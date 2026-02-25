"use client";

import { FormEvent, useState } from "react";
// import { sendEmail } from "@/app/actions/sendEmail";
import Header from "@/app/components/dashboard/header";
import { appendToast } from "@/lib/global";

export default function EmailManager() {
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true);

      // We wrap your entire Tabular HTML inside these backticks
      const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Design</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,700;0,800;1,400&display=swap" rel="stylesheet">
    
    <style>
        /* General Resets */
        body {
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            font-family: 'Albert Sans', Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        table {
            border-spacing: 0;
            border-collapse: collapse;
        }
        td {
            padding: 0;
        }
        img {
            border: 0;
        }
        a {
            text-decoration: none;
        }
        
        /* Mobile Responsiveness */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .content-padding {
                padding: 30px 20px !important;
            }
            .button-wrapper {
                display: block !important;
                width: 100% !important;
                margin-bottom: 15px !important;
            }
            .btn {
                display: block !important;
                text-align: center !important;
            }
            .spacer {
                display: none !important;
            }
            .footer-col {
                display: block !important;
                width: 100% !important;
                text-align: left !important;
                margin-bottom: 20px !important;
            }
        }
    </style>
</head>
<body>

    <center style="width: 100%; background-color: #f9f9f9; padding: 40px 0;">
        <table class="email-container" width="600" style="background-color: #ffffff; margin: 0 auto; max-width: 600px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            
            <tr>
                <td>
                    <img src="https://von-bryan-five-92.vercel.app/email.png" alt="Smartphone" width="100%" style="display: block; width: 100%; height: auto; object-fit: cover;">
                </td>
            </tr>

            <tr>
                <td class="content-padding" style="padding: 50px 40px;">
                    
                    <div style="font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #333333; text-transform: uppercase; margin-bottom: 15px;">
                        VON BRYAN B.
                    </div>
                    
                    <h1 style="font-size: 34px; font-weight: 800; color: #1a1a1a; margin: 0 0 25px 0; line-height: 1.1; letter-spacing: -0.5px;">
                        Have you ever considered having your own site?
                    </h1>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 20px 0;">
                        having a website today is crucial for any growing business. A well-built website increases your visibility, builds credibility, and gives customers the best way to explore your products and services anytime, anywhere.
                    </p>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 20px 0;">
                        It also helps support long-term business growth by making it easier for potential clients to find you, trust you, and take action.
                    </p>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 20px 0;">
                        I help businesses launch modern, responsive websites designed to showcase their brand and convert visitors into customers.
                    </p>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 35px 0; font-style: italic;">
                        If you're open to discussing how a website could support your business, feel free to contact me
                    </p>
                    
                    <table width="100%" style=" display: flex; justify-content: center; align-items: center; ">
                        <tr>
                            <td>
                                <table class="button-wrapper" align="left" style="margin-right: 15px;">
                                    <tr>
                                        <td>
                                            <a href="mailto:vonbanalbryan18v@gmail.com" class="btn" style="background-color: #1a1a1a; color: #ffffff; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; border: 1px solid #1a1a1a;">
                                                CONTACT ME
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                
                                <table class="button-wrapper" align="left">
                                    <tr>
                                        <td>
                                            <a href="https://von-bryan-five-92.vercel.app/" class="btn" style="background-color: #ffffff; color: #1a1a1a; padding: 14px 28px; border-radius: 30px; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; border: 1px solid #1a1a1a;">
                                                VISIT MY SITE
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td style="background-color: #f1f1f1; padding: 40px;">
                    <table width="100%">
                        <tr>
                            <td class="footer-col" valign="bottom" align="left" style="width: 50%;">
                                <img src="https://von-bryan-five-92.vercel.app/logo.png" alt="Von Logo" width="60" style="display: block; border-radius: 50%; margin-bottom: 20px;">
                                <div style="font-size: 13px; color: #666666; line-height: 1.6;">
                                    Antipolo City, Philippines<br>
                                    Copyright &copy; 2022 All rights reserved.
                                </div>
                            </td>
                            
                            <td class="footer-col" valign="bottom" align="right" style="width: 50%;">
                                <div style="font-size: 13px; color: #666666; line-height: 1.6;">
                                    (+63)-960-687-4147<br>
                                    vonbanalbryan18v@gmail.com
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

        </table>
    </center>

</body>
</html>
    `;

      const res = await fetch("/api/emailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.email,
          subject: "Ready to take your business online?",
          html: emailHtml, // Using the new HTML content
        }),
      });

      const data = await res.json();
      appendToast('append-toast', 'success', `Email sent to ${formData.name}`);
      setFormData({
        name: '',
        email: ''
      })
      console.log(data);

    } catch (error) {
      console.error("Error sending email:", error);
      appendToast('append-toast', 'error', `Failed to send Email to ${formData.name}`);
      setFormData({
        name: '',
        email: ''
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="space-y-4 p-6 min-h-screen text-white">

        {/* Header Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Manage <span className="text-blue-primary">Emails</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Manage all possible leads and contacts
          </p>
        </div>
        {/* Form Section */}
        <form onSubmit={(e) => sendEmail(e)} className="w-full p-3 bg-charleston-green border border-white/10 rounded-md flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            <input
              name="name"
              type="text"
              id="name"
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value, }))}
              className="p-2 px-3 bg-white/5 border border-white/10 rounded-sm outline-none focus:border-blue-500"
              placeholder="Recipient Name"
            />
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value, }))}
              className="p-2 px-3 bg-white/5 border border-white/10 rounded-sm outline-none focus:border-blue-500"
              placeholder="recipient@gmail.com"
            />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 p-2 px-6 rounded-sm transition-colors cursor-pointer">
            Send Email
          </button>
        </form>

        {/* Table Section */}
        {/* <div className="w-full h-80 bg-charleston-green border border-white/10 rounded-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 text-xs uppercase text-gray-400">
              <tr>
                <th className="p-3 border-b border-white/10">Name</th>
                <th className="p-3 border-b border-white/10">Email</th>
                <th className="p-3 border-b border-white/10">Time</th>
                <th className="p-3 border-b border-white/10">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/2">
                  <td className="p-3 text-sm">{item.name}</td>
                  <td className="p-3 text-sm text-gray-300">{item.email}</td>
                  <td className="p-3 text-xs text-gray-500">{item.date}</td>
                  <td className="p-3">
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full uppercase font-bold">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-10 text-center text-gray-500 italic">No emails sent yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
}