const sgMail = require("@sendgrid/mail");
// const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(process.env.SG_API_KEY);

async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: "maximenef1@gmail.com", // Your email where you'll receive emails
      from: "barbiere@listri.digital ", // your website email address here
      subject: `[Lead from website] : ${req.body.mail}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.nom}, their email is: ✉️${req.body.prenom} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.telephone}</p>
              <br>
              </div>
           
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

// export default async function handler(req, res) {
//   const { nom, prenom, mail, telephone } = req.body;
//   const msg = {
//     to: "maximenef1@gmail.com",
//     from: "barbiere@listri.digital",
//     subject: "formulaire immo",
//     html: `<p> ${nom} ${prenom} ${mail} ${telephone} </p> `,
//   };
//   await sgMail.send(msg);
//   res.json({ succes: true });
// }

// try {
//   await mail.send(data);
//   res.status(200).json({ status: "OK" });
// } catch (error) {
//   console.log(error);
//   if (error.response) {
//     console.log(error.response.body);
//   }
//   res.status(400).json({ status: "ERROR", message: error.message });
// }
