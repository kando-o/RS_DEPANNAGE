var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// .netlify/functions/send-email.js
var send_email_exports = {};
__export(send_email_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(send_email_exports);
var import_nodemailer = __toESM(require("nodemailer"), 1);
var handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "M\xE9thode non autoris\xE9e" };
  }
  try {
    const { name, email, phone, postCode, message } = JSON.parse(event.body);
    const transporter = import_nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      // ex: smtp.ionos.fr
      port: Number(process.env.SMTP_PORT),
      // ex: 465
      secure: true,
      // Utilisation de SSL
      auth: {
        user: process.env.SMTP_USER,
        // ex: contact@rsdepannage.com
        pass: process.env.SMTP_PASS
        // mot de passe SMTP
      }
    });
    const mailOptions = {
      from: `"Site RS D\xE9pannage" <${process.env.SMTP_USER}>`,
      // expéditeur
      to: process.env.SMTP_USER,
      // destinataire (toi-même)
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      // permet de répondre directement
      text: `Nom       : ${name}
			Email     : ${email}
			T\xE9l\xE9phone : ${phone}
			Code postal: ${postCode}

			Message   :
			${message}`,
      html: `
				<p><strong>Nom :</strong> ${name}</p>
				<p><strong>Email :</strong> ${email}</p>
				<p><strong>T\xE9l\xE9phone :</strong> ${phone}</p>
				<p><strong>Code postal :</strong> ${postCode}</p>
				<p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
			`
    };
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error(`Erreur lors de l'envoi du mail :', error`);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=send-email.js.map
