const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_API_KEY);
async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: "info@barbiere.be", // Your email where you'll receive emails
      from: "barbiere@listri.digital", // your website email address here
      subject: `${req.body.vendre ? "Je veux VENDRE ma maison" : ""}${
        req.body.louer ? "Je veux LOUER ma maison" : ""
      }${req.body.acheter ? "Je veux Acheter une maison" : ""}${
        req.body.expertise ? "Je veux une EXPERTISE de ma maison" : ""
      }${req.body.estimation ? "Je veux une ESTIMATION de ma maison" : ""}`,
      html: `
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />  <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"> </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px; font-size: 16px;">
              <h2>Vous avez recu un e-mail de la part de :</h2>
              <p style="color:blue; "> ${req.body.nom} <span>  ${req.body.prenom}</span></p>
              <h2>  Voici mon E-mail :  </h2>
              <p style="color:blue;">✉️ ${req.body.mail}</p>

              <h2>Voici mon Numero de téléphone :</h2>
              <p style="color:blue;">${req.body.telephone}</p> 
              <br>
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

// const sgMail = require("@sendgrid/mail");
// // const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

// sgMail.setApiKey(process.env.SG_API_KEY);

// async function sendEmail(req, res) {
//   try {
//     await sgMail.send({
//       to: "maximenef1@gmail.com", // Your email where you'll receive emails
//       from: "barbiere@listri.digital ", // your website email address here
//       subject: `${req.body.vendre ? "Je veux VENDRE ma maison" : ""}${
//         req.body.louer ? "Je veux LOUER ma maison" : ""
//       }${req.body.acheter ? "Je veux Acheter une maison" : ""}${
//         req.body.expertise ? "Je veux une EXPERTISE de ma maison" : ""
//       }${req.body.estimation ? "Je veux une ESTIMATION de ma maison" : ""}`,
//       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//       <html lang="en">
//       <head>
//         <meta charset="utf-8">

//         <title>The HTML5 Herald</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>Vous avez recu un e-mail de la part de :</h3>
//               <h2 style="color:blue;"> ${req.body.nom} <span>  ${req.body.prenom}</span></h2>
//               <h3>  Voici mon E-mail: ✉️${req.body.mail} </h3>
//               <div style="font-size: 16px;">
//               <p>Voici mon Numero de téléphone:</p>
//               <h2 style="color:blue;">${req.body.telephone}</h2>
//               <br>
//               </div>

//               </div>
//       </body>
//       </html>`,
//     });
//   } catch (error) {
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;
