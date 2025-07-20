const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
// const credit_transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.crescentpips.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@crescentpips.com",
//       pass: "crescentpips1@1",
//     },
//   }),
// );

let credit_transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
//    logger: true,
//   debug: true
});

let credit_mail_option = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `RECEIVED TRANSFER`,
    html:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Deposit Request Notification</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    body {
      margin: 0;
      padding: 0;
      background-color: #f6f9fc;
      font-family: 'Poppins', sans-serif;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
      border: 1px solid #e0e0e0;
    }
    .email-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .email-header img {
      height: 40px;
    }
    .email-title {
      font-size: 22px;
      font-weight: 600;
      color: #2c3e50;
      margin: 20px 0 10px;
    }
    .email-body {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
    }
    .cta-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #0c0e28;
      color: #ffffff;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 500;
    }
    .email-footer {
      text-align: center;
      font-size: 13px;
      color: #999;
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <div class="email-wrapper">
    <div class="email-header">
                <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
      <h2 class="email-title">Transfer Received</h2>
    </div>

    <div class="email-body">
      <p>Dear <strong>${userInfo.full_name}</strong>,</p>

      <p>We have received your deposit request of <strong>KSH${userInfo.amount} for the ${userInfo.plan_name}</p>

      <p>Please proceed to complete your deposit to ensure uninterrupted access to your trading account.</p>

      

      <p>For more information, please log in to your account.</p>
    </div>

    <div class="email-footer">
      <p>This message was generated via ndogo-financial's secure system. If you did not initiate this request, no action is required.</p>
    </div>
  </div>

</body>
</html>
`

//     html: `
   
//         <div class="mail_template"
//             style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
//             <div style="text-align: center;">
//                 <img src="https://crescentpips.com/ke/assets/images/logo'.png"   alt="Company Logo" style="max-width: 100%; max-height: 2rem;">
//             </div>
//             <div style="text-align: center; margin-top: 20px;">
//                 <h3 style="font-size: 24px; font-weight: bold; color: #333;">DEPOSIT REQUEST NOTIFICATION</h3>
//             </div>
//             <div style="margin-top: 30px;">
//                 <p style="font-size: 18px; color: #555;">Dear ${userInfo.first_name} ${userInfo.last_name},</p>
//                 <p style="font-size: 18px; color: #555;">  we have recieved a deposit of ${userInfo.currency}${userInfo.amount} request you made on <b>${datetime}</b> Go ahead and complete your deposit</p>
//             </div>
//             <div style="margin-top: 30px;">
//                 <p style="font-size: 18px; color: #555;"> For more detailed informations, please login to your account</p>
//             </div>
           
//             <div style="margin-top: 40px;">
//                 <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via crescentpips secured channel. Please do not take any action if you did not make this request.</p>
//             </div>
//         </div>
        
//         <style>
//             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
//         </style>
//  `,
  });
};
module.exports = { credit_mail_option, credit_transporter };
// credit_transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
