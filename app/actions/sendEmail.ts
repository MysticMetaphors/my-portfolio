// "use server";
// import Mailjet from 'node-mailjet';

// const mailjet = new Mailjet({
//   apiKey: process.env.MAILJET_API_KEY,
//   apiSecret: process.env.MAILJET_SECRET
// });

// export async function sendEmail(formData: FormData) {
//   const name = formData.get("name");
//   const email = formData.get("email");

//   try {
//     const result = await mailjet
//       .post("send", { version: "v3.1" })
//       .request({
//         Messages: [
//           {
//             From: {
//               Email: process.env.MAILJET_SENDER_EMAIL,
//               Name: "Von Bryan B."
//             },
//             To: [
//               {
//                 Email: email,
//                 Name: name
//               }
//             ],
//             // --- TEMPLATE SETTINGS START ---
//             TemplateID: 7781049, 
//             TemplateLanguage: true,
//             Subject: "Why is your business invisible", 
//             Variables: {
//               firstname: name, 
//               company_name: "Von Bryan B."
//             }
//             // --- TEMPLATE SETTINGS END ---
//           }
//         ]
//       });

//     return { success: true };
//   } catch (error) {
//     return { success: false, error: error };
//   }
// }