import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const requiredField = (value: FormDataEntryValue | null) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
};

export const POST: APIRoute = async ({ request }) => {
  const jsonResponse = (ok: boolean, message: string, status = 200) =>
    new Response(JSON.stringify({ ok, message }), {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  try {
    const formData = await request.formData();

    const nombre = requiredField(formData.get('nombre'));
    const email = requiredField(formData.get('email'));
    const telefono = requiredField(formData.get('telefono'));
    const mensaje = requiredField(formData.get('mensaje'));
    const politica = formData.get('politica');
    const comerciales = formData.get('comerciales');

    if (!nombre || !email || !politica) {
      return jsonResponse(false, 'Faltan campos obligatorios.', 400);
    }

    const host = import.meta.env.SMTP_HOST;
    const port = Number(import.meta.env.SMTP_PORT ?? '587');
    const user = import.meta.env.SMTP_USER;
    const pass = import.meta.env.SMTP_PASS;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL ?? 'estudio-norai@gmail.com';

    if (!host || !user || !pass) {
      console.error('Contact form email service is not configured correctly');
      return jsonResponse(false, 'No se ha podido enviar el mensaje.', 500);
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"Web Estudi Norai" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nuevo contacto web - ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Telefono: ${telefono || '-'}`,
        `Acepta recibir novedades comerciales: ${comerciales ? 'Si' : 'No'}`,
        '',
        'Mensaje:',
        mensaje || '-',
      ].join('\n'),
    });

    return jsonResponse(true, 'Mensaje enviado correctamente.');
  } catch (error) {
    console.error('Error sending contact form email', error);
    return jsonResponse(false, 'No se ha podido enviar el mensaje.', 500);
  }
};
