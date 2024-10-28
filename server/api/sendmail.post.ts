import nodemailer from "nodemailer";

const runtimeConfig = useRuntimeConfig();
const mail = runtimeConfig.mail;
const psw = runtimeConfig.psw;

const transporter = nodemailer.createTransport({
  host: "mail.infomaniak.com",
  port: 465,
  secure: true,
  auth: { user: mail, pass: psw },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const options = {
    from: mail,
    to: mail,
    subject: "[PORTFOLIO] : " + data.subject + " from : " + data.email,
    text: data.message,
  };
  try {
    await transporter.sendMail(options);
    return { statut: 200, msg: "mail sent" };
  } catch (error) {
    return { statut: 404, error: error };
  }
  return { options };
});
