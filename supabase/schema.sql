-- ==============================================================================
-- Windows XP Portfolio: Contacts Database Schema & Row Level Security (RLS)
-- ==============================================================================

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

-- 2. Create index for fast dashboard querying & ordering
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts (status);
CREATE INDEX IF NOT EXISTS idx_contacts_email_notified ON public.contacts (email_notified);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 4. Revoke all public access by default (Strict Security Model)
-- Public / Anon users CANNOT select, insert, update, or delete directly from the browser.
-- All database operations are executed securely by the Supabase Edge Function using the Service Role Key.
REVOKE ALL ON TABLE public.contacts FROM anon, authenticated;

-- Service role retains full access automatically in Supabase.
