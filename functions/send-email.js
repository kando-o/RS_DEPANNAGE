import fetch from 'node-fetch';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Méthode non autorisée' };
  }
	console.log("Données reçues :", event.body)
	console.log("Requête brute :", event.body);
  const { name, email, phone, postCode, message } = JSON.parse(event.body);

  const emailData = {
    service_id: process.env.VITE_SERVICE_ID, // Email service ID
    template_id: process.env.VITE_TEMPLATE_ID, // Template ID
    user_id: process.env.VITE_USER_ID, // Clé publique EmailJS
    template_params: {
      name,
      email,
      phone,
      postCode,
      message
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

		// Log la réponse brute avant d'essayer de la parser
		const responseText = await response.text();
		console.log('Réponse brute d\'EmailJS :', responseText);

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      const errorData = await response.json();
			console.error('Erreur EmailJS:', errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ success: false, error: errorData }),
      };
    }
  } catch (error) {
		console.error('Erreur lors de l\'appel API EmailJS :', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
