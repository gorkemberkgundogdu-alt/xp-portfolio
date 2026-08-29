export interface ContactSubmissionPayload {
  email: string;
  message: string;
  locale: 'tr' | 'en';
  source?: string;
  website?: string; // Honeypot field
}

export interface ContactSubmissionResponse {
  success: boolean;
  error?: string;
}

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export async function submitContactMessage(
  payload: ContactSubmissionPayload
): Promise<ContactSubmissionResponse> {
  // Client validation
  const trimmedEmail = payload.email.trim();
  const trimmedMessage = payload.message.trim();

  if (!trimmedEmail) {
    throw new Error(payload.locale === 'tr' ? 'E-posta adresi zorunludur.' : 'Email is required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
    throw new Error(
      payload.locale === 'tr'
        ? 'Lütfen geçerli bir e-posta adresi girin.'
        : 'Please enter a valid email address.'
    );
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    throw new Error(
      payload.locale === 'tr'
        ? 'Mesajınız en az 10 karakter olmalıdır.'
        : 'Message must be at least 10 characters long.'
    );
  }

  if (trimmedMessage.length > 3000) {
    throw new Error(
      payload.locale === 'tr'
        ? 'Mesajınız 3000 karakterden uzun olamaz.'
        : 'Message cannot exceed 3000 characters.'
    );
  }

  // Honeypot check: If filled, resolve successfully without network request (harmless drop)
  if (payload.website && payload.website.trim().length > 0) {
    return { success: true };
  }

  // Fallback endpoint URL
  const functionUrl = SUPABASE_URL
    ? `${SUPABASE_URL.replace(/\/$/, '')}/functions/v1/contact-submit`
    : '/api/contact-submit';

  const response = await fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(SUPABASE_ANON_KEY ? { Authorization: `Bearer ${SUPABASE_ANON_KEY}` } : {}),
      ...(SUPABASE_ANON_KEY ? { apikey: SUPABASE_ANON_KEY } : {}),
    },
    body: JSON.stringify({
      email: trimmedEmail,
      message: trimmedMessage,
      locale: payload.locale || 'tr',
      source: payload.source || 'xp-portfolio',
      website: payload.website || '',
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    const errorMsg =
      data?.error ||
      (payload.locale === 'tr'
        ? 'Mesaj gönderilemedi. Lütfen tekrar dene.'
        : "Message couldn't be sent. Please try again.");
    throw new Error(errorMsg);
  }

  return { success: true };
}
