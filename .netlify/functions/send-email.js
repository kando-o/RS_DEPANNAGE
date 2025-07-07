import nodemailer from 'nodemailer';

export const handler = async (event) => {
  // N'accepter que les requêtes POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Méthode non autorisée' };
  }

  try {
    // Récupérer les données du formulaire
    const { name, email, phone, postCode, message } = JSON.parse(event.body);

    // Configuration du transporteur SMTP IonOS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,           // ex: smtp.ionos.fr
      port: Number(process.env.SMTP_PORT),   // ex: 465
      secure: true,                          // Utilisation de SSL
      auth: {
        user: process.env.SMTP_USER,         // ex: contact@rsdepannage.com
        pass: process.env.SMTP_PASS,         // mot de passe SMTP
      },
    });

    // Préparer l'e-mail
    const mailOptions = {
      from: `"Site RS Dépannage" <${process.env.SMTP_USER}>`, // expéditeur
      to: process.env.SMTP_USER,       // destinataire (toi-même)
      subject: `Nouveau message de ${name}`,
      replyTo: email,                  // permet de répondre directement
      text: `Nom       : ${name}
			Email     : ${email}
			Téléphone : ${phone}
			Code postal: ${postCode}

			Message   :
			${message}`,
			html: `
				<p><strong>Nom :</strong> ${name}</p>
				<p><strong>Email :</strong> ${email}</p>
				<p><strong>Téléphone :</strong> ${phone}</p>
				<p><strong>Code postal :</strong> ${postCode}</p>
				<p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
			`,
		};

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(`Erreur lors de l'envoi du mail :', error`);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
