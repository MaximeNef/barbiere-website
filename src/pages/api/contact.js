import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nom, prenom, mail, telephone, description, bienUid } = req.body;

  const { error } = await resend.emails.send({
    from: "Contact <onboarding@resend.dev>",
    to: "maximenef1@gmail.com", // TEST - à remettre sur info@barbiere.be après vérification du domaine
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
  return res.status(200).json({ error: "" });
}
