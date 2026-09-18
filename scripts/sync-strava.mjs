import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
// Optionally load local environment files if present
if (typeof process.loadEnvFile === 'function') {
  for (const envFile of ['.env', '.env.local']) {
    const envPath = path.join(rootDir, envFile);
    if (fs.existsSync(envPath)) {
      try {
        process.loadEnvFile(envPath);
      } catch {
        // Continue if file cannot be read
      }
    }
  }
}

const CLIENT_ID = process.env.STRAVA_CLIENT_ID?.trim();
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET?.trim();
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN?.trim();

const missingVars = [];
if (!CLIENT_ID) missingVars.push('STRAVA_CLIENT_ID');
if (!CLIENT_SECRET) missingVars.push('STRAVA_CLIENT_SECRET');
if (!REFRESH_TOKEN) missingVars.push('STRAVA_REFRESH_TOKEN');

if (missingVars.length > 0) {
  console.error(`❌ Error: Missing required Strava environment variable(s): ${missingVars.join(', ')}`);
  console.error('Please configure these environment variables or define them in a local .env file before running sync:strava.');
  process.exit(1);
}

async function syncStrava() {
  console.log('🔄 Refreshing Strava access token...');
  const tokenRes = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    console.error('❌ Failed to refresh Strava token:', tokenData);
    process.exit(1);
  }

  const headers = { Authorization: `Bearer ${tokenData.access_token}` };

  console.log('📥 Fetching Athlete Profile & Stats...');
  const athleteRes = await fetch('https://www.strava.com/api/v3/athlete', { headers });
  const athlete = await athleteRes.json();

  const statsRes = await fetch(`https://www.strava.com/api/v3/athletes/${athlete.id}/stats`, { headers });
  const stats = await statsRes.json();

  console.log('📥 Fetching Recent Activities...');
  const actRes = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=30', { headers });
  const activities = await actRes.json();

  if (!actRes.ok) {
    console.error(`❌ Failed to fetch Strava activities (HTTP ${actRes.status}):`, activities?.message || activities);
    if (activities?.errors) {
      console.error('❌ Missing permissions:', activities.errors.map((e) => `${e.field || e.resource}: ${e.code}`).join(', '));
      console.error('ℹ️ Note: Strava activities require an OAuth refresh token with "activity:read" or "activity:read_all" scope.');
    }
    process.exit(1);
  }

  const cleanedActivities = (Array.isArray(activities) ? activities : []).map((a) => {
    const paceSec = a.average_speed > 0 ? 1000 / a.average_speed : 0;
    const paceMin = Math.floor(paceSec / 60);
    const paceRemSec = Math.round(paceSec % 60);
    const formattedPace = `${paceMin}:${paceRemSec < 10 ? '0' : ''}${paceRemSec}`;

    const movingMin = Math.floor(a.moving_time / 60);
    const movingSec = a.moving_time % 60;
    const formattedDuration =
      movingMin >= 60
        ? `${Math.floor(movingMin / 60)}h ${movingMin % 60}m`
        : `${movingMin}m ${movingSec < 10 ? '0' : ''}${movingSec}s`;

    return {
      id: a.id,
      name: a.name,
      distanceKm: +(a.distance / 1000).toFixed(2),
      movingTimeSec: a.moving_time,
      formattedDuration,
      pace: formattedPace,
      avgSpeedKmh: +(a.average_speed * 3.6).toFixed(1),
      elevationGainM: Math.round(a.total_elevation_gain),
      startDate: a.start_date_local,
      type: a.type,
      prCount: a.pr_count || 0,
      kudosCount: a.kudos_count || 0,
      polyline: a.map?.summary_polyline || null,
      stravaUrl: `https://www.strava.com/activities/${a.id}`,
    };
  });

  const fileContent = `// Auto-generated Strava athlete dataset
export interface StravaActivity {
  id: number;
  name: string;
  distanceKm: number;
  movingTimeSec: number;
  formattedDuration: string;
  pace: string;
  avgSpeedKmh: number;
  elevationGainM: number;
  startDate: string;
  type: string;
  prCount: number;
  kudosCount: number;
  polyline: string | null;
  stravaUrl: string;
}

export interface StravaDataset {
  athlete: {
    id: number;
    name: string;
    city: string;
    country: string;
    profilePhoto: string;
    profileMedium: string;
    stravaUrl: string;
  };
  stats: {
    allRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
      elevationM: number;
    };
    ytdRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
      elevationM: number;
    };
    recentRuns: {
      count: number;
      distanceKm: number;
      movingTimeHours: number;
    };
  };
  lastSyncedAt: string;
  activities: StravaActivity[];
}

export const STRAVA_DATA: StravaDataset = ${JSON.stringify(
    {
      athlete: {
        id: athlete.id,
        name: `${athlete.firstname} ${athlete.lastname}`,
        city: athlete.city || 'İstanbul',
        country: athlete.country || 'Türkiye',
        profilePhoto: athlete.profile,
        profileMedium: athlete.profile_medium,
        stravaUrl: `https://www.strava.com/athletes/${athlete.id}`,
      },
      stats: {
        allRuns: {
          count: stats.all_run_totals?.count || 0,
          distanceKm: +((stats.all_run_totals?.distance || 0) / 1000).toFixed(1),
          movingTimeHours: +((stats.all_run_totals?.moving_time || 0) / 3600).toFixed(1),
          elevationM: Math.round(stats.all_run_totals?.elevation_gain || 0),
        },
        ytdRuns: {
          count: stats.ytd_run_totals?.count || 0,
          distanceKm: +((stats.ytd_run_totals?.distance || 0) / 1000).toFixed(1),
          movingTimeHours: +((stats.ytd_run_totals?.moving_time || 0) / 3600).toFixed(1),
          elevationM: Math.round(stats.ytd_run_totals?.elevation_gain || 0),
        },
        recentRuns: {
          count: stats.recent_run_totals?.count || 0,
          distanceKm: +((stats.recent_run_totals?.distance || 0) / 1000).toFixed(1),
          movingTimeHours: +((stats.recent_run_totals?.moving_time || 0) / 3600).toFixed(1),
        },
      },
      lastSyncedAt: new Date().toISOString(),
      activities: cleanedActivities,
    },
    null,
    2
  )};
`;

  const destPath = path.join(rootDir, 'src', 'data', 'stravaData.ts');
  fs.writeFileSync(destPath, fileContent, 'utf-8');
  console.log(`✅ Successfully synced Strava data to ${destPath}! (${cleanedActivities.length} activities)`);
}

syncStrava().catch((err) => {
  console.error('❌ Error during Strava sync:', err);
  process.exit(1);
});
