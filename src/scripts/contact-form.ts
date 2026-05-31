declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]');
const contactFeedback = document.getElementById('contact-feedback');

function getFormMessage(form: HTMLFormElement, key: string, fallback: string): string {
  const value = form.dataset[key];
  return value && value.length > 0 ? value : fallback;
}

function setFeedback(type: 'ok' | 'error', message: string) {
  if (!contactFeedback) return;

  contactFeedback.textContent = message;
  contactFeedback.classList.remove('hidden', 'bg-emerald-800/70', 'bg-red-900/70');
  contactFeedback.classList.add('block');
  contactFeedback.classList.add(type === 'ok' ? 'bg-emerald-800/70' : 'bg-red-900/70');
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalText = submitButton?.textContent;
    const msgSubmitting = getFormMessage(contactForm, 'msgSubmitting', 'Enviando...');
    const msgSuccess = getFormMessage(contactForm, 'msgSuccess', 'Mensaje enviado correctamente.');
    const msgError = getFormMessage(contactForm, 'msgError', 'No se ha podido enviar el mensaje.');
    const msgConnection = getFormMessage(
      contactForm,
      'msgConnection',
      'Error de conexión. Vuelve a intentarlo.',
    );
    const msgSubmit = getFormMessage(contactForm, 'msgSubmit', 'Enviar');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = msgSubmitting;
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok) {
        setFeedback('ok', result.message ?? msgSuccess);
        contactForm.reset();

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'contact',
            event_label: 'contact_form',
          });
        }
      } else {
        setFeedback('error', result?.message ?? msgError);
      }
    } catch {
      setFeedback('error', msgConnection);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText ?? msgSubmit;
      }
    }
  });
}
