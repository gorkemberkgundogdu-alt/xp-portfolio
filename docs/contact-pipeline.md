# Windows XP Portfolio — Contact Pipeline Setup Guide

This document outlines the architecture, database schema, and exact manual steps required in Supabase and Resend to activate the portfolio contact pipeline.

---

## 1. Pipeline Architecture

```
Portfolio Contact UI (Desktop MSN / Mobile Properties)
  │
  ▼ HTTPS POST (Email, Message, Locale, Source, Honeypot)
Supabase Edge Function (`contact-submit`)
  │
  ├─ 1. Validate inputs (Email format, message 10-3000 chars, honeypot)
  ├─ 2. Insert into `public.contacts` table (Service Role Key)
  ├─ 3. Dispatch notification email via Resend API
  ├─ 4. Update delivery observability fields on the contact record
  │       ├─ Success: email_notified=true, email_provider_id=resend_id, notified_at=now()
  │       └─ Failure: email_notified=false, email_error=sanitized_error
  │
  ▼ Return `{ "success": true }` to client once DB insert succeeds
```

---

## 2. Supabase Database Schema

1. Log in to your [Supabase Dashboard](https://supabase.com/dashboard).
2. Open your project and navigate to the **SQL Editor**.
3. Copy and paste the contents of [`supabase/schema.sql`](../supabase/schema.sql) and click **Run**:

```sql
-- 1. Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  email TEXT NOT NULL CHECK (char_length(trim(email)) > 0 AND char_length(email) <= 255),
  message TEXT NOT NULL CHECK (char_length(trim(message)) >= 10 AND char_length(message) <= 3000),
  locale TEXT NOT NULL DEFAULT 'tr' CHECK (locale IN ('tr', 'en')),
  source TEXT NOT NULL DEFAULT 'xp-portfolio' CHECK (char_length(source) <= 50),
  status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived', 'replied')),
  
  -- Delivery Observability Fields (Studio v1be parity)
  email_notified BOOLEAN NOT NULL DEFAULT false,
  email_provider_id TEXT NULL,
  email_error TEXT NULL,
  notified_at TIMESTAMPTZ NULL
);

-- 2. Create indexes
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts (status);
CREATE INDEX IF NOT EXISTS idx_contacts_email_notified ON public.contacts (email_notified);

-- 3. Enable RLS and Lock Table
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.contacts FROM anon, authenticated;
```

### Notification Tracking Fields Explained

| Field | Type | Description |
| :--- | :--- | :--- |
| `email_notified` | `BOOLEAN` | `true` if Resend confirmed delivery; `false` if notification failed or was skipped. |
| `email_provider_id` | `TEXT` | The message ID returned by Resend (e.g. `49a3999c0c0a41e3...`) for webhook/log tracking. |
| `email_error` | `TEXT` | Sanitized error message if Resend HTTP call fails (never stores raw tokens/keys). |
| `notified_at` | `TIMESTAMPTZ` | Timestamp when email was successfully accepted by Resend; `NULL` if failed. |

---

## 3. Supabase Edge Function Deployment

Deploy the `contact-submit` Edge Function using the Supabase CLI:

```bash
# Login to Supabase CLI
npx supabase login

# Link your project
npx supabase link --project-ref your-project-ref

# Deploy the function
npx supabase functions deploy contact-submit
```

---

## 4. Supabase Edge Function Secrets

In the **Supabase Dashboard** -> **Project Settings** -> **Edge Functions** -> **Secrets**, set the following environment variables:

| Secret Key | Description | Example / Recommended Value |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Resend API Key for dispatching email notifications | `re_xxxxxxxxxxxxxxxxxxxx` |
| `CONTACT_NOTIFICATION_EMAIL` | Destination mailbox where notifications arrive | `gorkemberkgundogdu@gmail.com` |
| `CONTACT_FROM_EMAIL` | Verified sender address or testing sender | `onboarding@resend.dev` *(or `hello@yourdomain.com`)* |

*(Note: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically by the Supabase Edge Function runtime environment).*

---

## 5. Client Environment Variables

In your local `.env` and in GitHub Actions Repository Secrets (if environment variables are injected during build):

```env
PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

*(These variables are client-safe and used to invoke the Edge Function endpoint).*
