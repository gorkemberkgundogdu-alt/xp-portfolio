import { useState, useCallback } from 'react';
import { submitContactMessage } from '../services/contactService';

export type ContactFormStatus = 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';

export interface UseContactFormOptions {
  locale: 'tr' | 'en';
  source?: string;
  onSuccess?: () => void;
}

export function useContactForm({ locale, source = 'xp-portfolio', onSuccess }: UseContactFormOptions) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot
  const [status, setStatus] = useState<ContactFormStatus>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (status === 'SUBMITTING') return;

      setStatus('SUBMITTING');
      setErrorMessage(null);

      try {
        await submitContactMessage({
          email,
          message,
          locale,
          source,
          website,
        });

        setStatus('SUCCESS');
        setEmail('');
        setMessage('');
        setWebsite('');
        if (onSuccess) onSuccess();
      } catch (err: any) {
        setStatus('ERROR');
        setErrorMessage(
          err?.message ||
            (locale === 'tr'
              ? 'Mesaj gönderilemedi. Lütfen tekrar dene.'
              : "Message couldn't be sent. Please try again.")
        );
      }
    },
    [email, message, website, locale, source, status, onSuccess]
  );

  const resetForm = useCallback(() => {
    setStatus('IDLE');
    setErrorMessage(null);
    setEmail('');
    setMessage('');
    setWebsite('');
  }, []);

  return {
    email,
    setEmail,
    message,
    setMessage,
    website,
    setWebsite,
    status,
    errorMessage,
    handleSubmit,
    resetForm,
    isSubmitting: status === 'SUBMITTING',
    isSuccess: status === 'SUCCESS',
    isError: status === 'ERROR',
  };
}
