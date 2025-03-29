import postmark from "postmark";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  const client = new postmark.ServerClient("VOTRE_API_KEY_POSTMARK");

  try {
    await client.sendEmail({
      From: "autoxp@epaveautomobile.fr", // Expéditeur validé sur Postmark
      To: "autoxp@epaveautomobile.fr",  // Destinataire (peut être changé)
      Subject: "Nouveau message de " + name,
      HtmlBody: `<strong>Email :</strong> ${email} <br><br> <strong>Message :</strong> ${message}`,
      MessageStream: "outbound", // Stream transactionnel
      ReplyTo: email, // Permet de répondre directement à l'expéditeur
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    console.error("Erreur Postmark :", error);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: error.message }) };
  }
}
