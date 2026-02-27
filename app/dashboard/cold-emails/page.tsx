"use client";

import { FormEvent, useEffect, useState } from "react";
import Header from "@/app/components/dashboard/header";
import { appendToast } from "@/lib/global";
import { Loader } from "lucide-react";

type EmailRecord = {
  id: number;
  name: string;
  sent_to: string;
  sent_by: string;
  custom_id: string;
  created_at: string;
}

export default function EmailManager() {
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<EmailRecord[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/emailer", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const emails = await response.json();
        setHistory(emails)


      } catch (error) {
        console.error("Error loading email history:", error);
        appendToast('append-toast', 'danger', "Failed to load email history.");
      }
    }

    fetchData()
  }, [])
  console.log("history:", history)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      // 1. Prepare data
      const customId = window.crypto.randomUUID();
      const payloadContact = {
        name: formData.name,
        email: formData.email,
        custom_id: customId,
      };

      const payloadEmail = {
        to: formData.email,
        name: formData.name,
        subject: "Ready to take your business online?",
        html: `<!DOCTYPE html>
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
                    <img src="https://von-bryan-five-92.vercel.app/email_bg.png" alt="Smartphone" width="100%" style="display: block; width: 100%; height: auto; object-fit: cover;">
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
                        having a <span style="font-weight: bold;">website landing page</span> today is crucial for any growing business. A well-built website increases your visibility, builds credibility, and gives customers the best way to explore your products and services anytime, anywhere.
                    </p>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 20px 0;">
                        A landing page also helps support long-term <span style="font-weight: bold;">business growth</span> by making it easier for potential clients to find you, trust you, and take action.
                    </p>
                    
                    <p style="font-size: 15px; color: #4a4a4a; line-height: 1.6; margin: 0 0 20px 0;">
                        I help businesses launch modern, responsive landing page websites designed to showcase their brand and convert visitors into customers.
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
</html>`,
      }

      setLoading(true)
      try {
        const [ 
          emailRes, 
          // contactRes
        ] = await Promise.all([
          fetch("/api/emailer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payloadEmail),
          }),
          // fetch("/api/contact", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify(payloadContact),
          // })
        ]);

        if (emailRes.ok) {
          setLoading(false)
          appendToast('append-toast', 'success', `Email sent to ${formData.name}`);
          setFormData({
            name: '',
            email: ''
          });
          return
        } else {
          setLoading(false)
          const errorMsg = !emailRes.ok ? "Email failed to send" : "Contact failed to save";
          appendToast('append-toast', 'danger', errorMsg);
          return
        }
      } catch (error) {
        setLoading(false)
        appendToast('append-toast', 'error', `Failed to send Email to ${formData.name}`);
        setFormData({
          name: '',
          email: ''
        })
      }
    }
    return appendToast('append-toast', 'error', 'Fill all fields')
  }

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
              value={formData.name}
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
          <button type="submit" disabled={loading} className="p-2 px-6 bg-blue-primary shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black font-semibold hover:shadow-[0_0_40px_#0095ff] rounded-sm transition-all cursor-pointer">
            {loading ?
              <Loader className="animate-spin" />
              : "Send Email"
            }
          </button>
        </form>

        <div className="overflow-hidden rounded-md border border-white/10 bg-charleston-green shadow-2xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Recipient
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Email Address
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Sent_by
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Date Sent
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Tracking ID
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {history.length > 0 ? (
                history.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/[0.03] transition-colors duration-200 group"
                  >
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="font-medium text-white group-hover:text-blue-400 transition-colors">
                        {item.name || "Unnamed Contact"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white/70">
                      {item.sent_to}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white/70">
                      {item.sent_by.slice(0, 14)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-white/50">
                      {formatDate(item.created_at)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-white/40 border border-white/10">
                        {item.custom_id.split('-')[0]}...
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <span className="text-white/20 text-lg">No records found</span>
                      <p className="text-white/10 text-xs">When you send emails, they will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}