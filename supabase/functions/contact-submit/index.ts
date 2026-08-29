import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactRequestBody {
  email?: string;
  message?: string;
  locale?: string;
  source?: string;
  website?: string; // Honeypot
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body: ContactRequestBody = await req.json().catch(() => ({}));
    const { email, message, locale = "tr", source = "xp-portfolio", website } = body;

    // 1. Honeypot check: If filled, silently return success without saving or emailing
    if (website && website.trim().length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Server-side validation
    const trimmedEmail = (email || "").trim();
    const trimmedMessage = (message || "").trim();

    if (!trimmedEmail) {
      return new Response(
        JSON.stringify({
          success: false,
          error: locale === "tr" ? "E-posta adresi zorunludur." : "Email is required.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            locale === "tr"
              ? "Lütfen geçerli bir e-posta adresi girin."
              : "Please enter a valid email address.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            locale === "tr"
              ? "Mesajınız en az 10 karakter olmalıdır."
              : "Message must be at least 10 characters long.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (trimmedMessage.length > 3000) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            locale === "tr"
              ? "Mesajınız 3000 karakterden uzun olamaz."
              : "Message cannot exceed 3000 characters.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Insert into Supabase database using Service Role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment");
      return new Response(
        JSON.stringify({
          success: false,
          error:
            locale === "tr"
              ? "Sunucu yapılandırma hatası. Lütfen daha sonra tekrar deneyin."
              : "Server configuration error. Please try again later.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: insertedData, error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          email: trimmedEmail,
          message: trimmedMessage,
          locale: locale === "en" ? "en" : "tr",
          source: source.slice(0, 50),
          status: "unread",
          email_notified: false,
        },
      ])
      .select("id")
      .single();

    if (dbError || !insertedData?.id) {
      console.error("Database insert error:", dbError);
      return new Response(
        JSON.stringify({
          success: false,
          error:
            locale === "tr"
              ? "Mesaj kaydedilemedi. Lütfen tekrar deneyin."
              : "Could not save message. Please try again.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const contactId = insertedData.id;

    // 4. Send email notification via Resend & update delivery observability
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const recipientEmail =
      Deno.env.get("CONTACT_NOTIFICATION_EMAIL") || "gorkemberkgundogdu@gmail.com";
    const senderEmail =
      Deno.env.get("CONTACT_FROM_EMAIL") || "onboarding@resend.dev";

    if (resendApiKey) {
      try {
        const formattedDate = new Date().toLocaleString("tr-TR", {
          timeZone: "Europe/Istanbul",
          dateStyle: "medium",
          timeStyle: "short",
        });

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [recipientEmail],
            reply_to: trimmedEmail,
            subject: `[XP Portfolio] Yeni İletişim Mesajı — ${trimmedEmail}`,
            text: `Yeni Portfolyo İletişim Mesajı\n\nGönderen: ${trimmedEmail}\nTarih: ${formattedDate} (TSİ)\nDil: ${locale.toUpperCase()}\nKaynak: ${source}\n\nMesaj:\n${trimmedMessage}\n`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #0055EA; margin-top: 0;">Yeni Portfolyo İletişim Mesajı</h2>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 110px; color: #4a5568;">Gönderen:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #0055EA;">${escapeHtml(trimmedEmail)}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Tarih:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${escapeHtml(formattedDate)} (TSİ)</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Dil & Kaynak:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${escapeHtml(locale.toUpperCase())} · ${escapeHtml(source)}</td>
                  </tr>
                </table>
                <div style="background-color: #f7fafc; border-left: 4px solid #0055EA; padding: 15px; margin-top: 15px; border-radius: 4px;">
                  <h4 style="margin: 0 0 10px 0; color: #2d3748;">Mesaj:</h4>
                  <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #1a202c;">${escapeHtml(trimmedMessage)}</p>
                </div>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          const resendData = await emailResponse.json().catch(() => ({}));
          const providerId = resendData?.id || null;

          // Update contact row with success observability
          await supabase
            .from("contacts")
            .update({
              email_notified: true,
              email_provider_id: providerId,
              email_error: null,
              notified_at: new Date().toISOString(),
            })
            .eq("id", contactId);
        } else {
          const errText = await emailResponse.text();
          console.error("Resend API error:", errText);

          // Sanitize error message (no secrets/tokens)
          const sanitizedError = `Resend status ${emailResponse.status}: ${errText.slice(0, 200)}`;
          await supabase
            .from("contacts")
            .update({
              email_notified: false,
              email_error: sanitizedError,
            })
            .eq("id", contactId);
        }
      } catch (emailErr: any) {
        console.error("Resend dispatch exception:", emailErr);
        const sanitizedError = `Network exception: ${String(emailErr?.message || emailErr).slice(0, 200)}`;
        await supabase
          .from("contacts")
          .update({
            email_notified: false,
            email_error: sanitizedError,
          })
          .eq("id", contactId);
      }
    } else {
      console.warn("RESEND_API_KEY is not configured; email notification skipped.");
      await supabase
        .from("contacts")
        .update({
          email_notified: false,
          email_error: "RESEND_API_KEY not configured in environment",
        })
        .eq("id", contactId);
    }

    // User Response Principle: The message is confirmed in DB, so return success to visitor
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Unexpected error in contact-submit Edge Function:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
