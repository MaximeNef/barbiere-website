import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nom, prenom, mail, telephone, description, bienUid } = req.body;

  const { error } = await resend.emails.send({
    from: "Barbiere Immo <contact@barbiere.be>",
    to: "contact@barbiere.be",
    subject: `Nouveau message de ${nom} ${prenom}`,
    html: `
      <div style="font-family: helvetica, sans-serif; margin: 20px; font-size: 16px;">
        <h2>Nouveau message depuis le site Barbiere Immo</h2>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${mail}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        ${bienUid ? `<p><strong>Bien concerné :</strong> ${bienUid}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p style="color: #333;">${description}</p>
      </div>
    `,
  });

  if (error) return res.status(500).json({ error: error.message });

  await resend.emails.send({
    from: "Barbiere Immo <contact@barbiere.be>",
    to: mail,
    subject: "Nous avons bien reçu votre message",
    html: `
      <div style="font-family: helvetica, sans-serif; margin: 20px; font-size: 16px; color: #333;">
        <h2 style="color: #0b2528;">Bonjour ${prenom},</h2>
        <p>Merci pour votre message. Nous l'avons bien reçu et reviendrons vers vous dans les plus brefs délais.</p>
        <p><strong>Votre message :</strong></p>
        <p style="color: #555; border-left: 3px solid #41B8B8; padding-left: 12px;">${description}</p>
        <br/>
        <p>Cordialement,<br/><strong>L'équipe Barbiere Immo</strong></p>
      </div>
    `,
  });
  return res.status(200).json({ error: "" });
}
