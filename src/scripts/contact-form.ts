const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]');
const contactFeedback = document.getElementById('contact-feedback');

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

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'enviando...';
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
        setFeedback('ok', result.message ?? 'Mensaje enviado correctamente.');
        contactForm.reset();
      } else {
        setFeedback('error', result?.message ?? 'No se ha podido enviar el mensaje.');
      }
    } catch {
      setFeedback('error', 'Error de conexion. Vuelve a intentarlo.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText ?? 'enviar';
      }
    }
  });
}
