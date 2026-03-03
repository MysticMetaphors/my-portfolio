"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Link2, Loader, Rocket } from "lucide-react";
import Link from "next/link";
import { sileo } from "sileo";

type EmailRecord = {
  id: number;
  name: string;
  sent_to: string;
  social: string;
  sent_by: string;
  custom_id: string;
  created_at: string;
}

export default function EmailManager() {
  const [loading, setLoading] = useState(false)
  const [dataLoading, setDataLoading] = useState(true)
  const [history, setHistory] = useState({
    page: 1,
    limit: 10,
    data: [] as EmailRecord[]
  });
  const totalEmails = useRef(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    social: ''
  })

  useEffect(() => {
    fetchData()
  }, [history.page, history.limit])

  async function fetchData() {
    try {
      const response = await fetch("/api/emailer?page=" + history.page + "&limit=" + history.limit, {
        method: "GET",
      });

      if (!response.ok) {
        setDataLoading(false)
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      totalEmails.current = data[1]
      setHistory(prev => ({
        ...prev,
        data: data[0]
      }))
      setDataLoading(false)
    } catch (error) {
      console.error("Error loading email history:", error);
      sileo.error({
        title: "Failed to load email history",
        description: "there could be unexpected errors try to reload the tab CTRL + R"
      })
      setDataLoading(false)
    }
  }

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
    if (formData.name && formData.email && formData.social) {
      // 1. Prepare data
      // const customId = window.crypto.randomUUID();
      // const payloadContact = {
      //   name: formData.name,
      //   email: formData.email,
      //   custom_id: customId,
      // };

      const payloadEmail = {
        to: formData.email,
        name: formData.name,
        social: formData.social,
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
                                    Copyright &copy; 2025  VonBryan™. All rights reserved.
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

                    <div style="font-size: 12px; color: #999999; line-height: 1.6; margin-top: 25px; text-align: center;">
                      This email was sent automatically. Please do not reply to this message.
                    </div>
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
        ]).then(responses => Promise.all(responses.map(r => r.json())));

        if (emailRes.success) {
          setLoading(false)
          sileo.success({
            title: `Email sent to ${formData.name}.`,
            icon: <Rocket className="size-3.5" />
          })
          fetchData()
          setFormData({
            name: '',
            email: '',
            social: ''
          });
          return
        } else {
          setLoading(false)
          sileo.error({
            title: !emailRes.success ? emailRes.message : `Failed to send Email to ${formData.name}.`
          })
          return
        }
      } catch (error) {
        setLoading(false)
        sileo.error({
          title: `Failed to send Email to ${formData.name}.`
        })
        setFormData({
          name: '',
          email: '',
          social: ''
        })
      }
    }
    return sileo.error({
      title: "Please fill all fields!"
    })
  }

  return (
    <>
      <div className="space-y-4 mt-[65px] md:pb-30 md:p-8 p-6 pb-30 min-h-screen text-white">

        {/* Header Section */}
        <div className="md:mb-12 mb-4 max-w-7xl mx-auto flex justify-between items-center md:flex-row flex-col gap-4">
          <div className="w-full">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
              Manage <span className="text-blue-primary">Emails</span>
            </h1>
            <p className="text-slate-400 max-w-2xl">
              Manage all possible leads and contacts
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-fit w-full p-1 px-3 bg-charleston-green rounded-md border border-white/10 shadow-sm">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              {totalEmails.current}
            </h2>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={(e) => sendEmail(e)} className="w-full p-3 bg-charleston-green border border-white/10 rounded-md flex justify-between items-center lg:flex-row flex-col gap-4">
          <div className="flex lg:w-fit w-full justify-center items-center lg:flex-row flex-col gap-4">
            <input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value, }))}
              className="p-2 px-3 bg-white/5 lg:w-fit w-full border border-white/10 rounded-sm outline-none focus:border-blue-500"
              placeholder="Recipient Name"
            />
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value, }))}
              className="p-2 px-3 bg-white/5 lg:w-fit w-full border border-white/10 rounded-sm outline-none focus:border-blue-500"
              placeholder="recipient@gmail.com"
            />
            <input
              name="social"
              type="text"
              id="social"
              value={formData.social}
              onChange={(e) => setFormData((prev) => ({ ...prev, social: e.target.value, }))}
              className="p-2 px-3 bg-white/5 lg:w-fit w-full border border-white/10 rounded-sm outline-none focus:border-blue-500"
              placeholder="Recipient Social Link"
            />
          </div>
          <button type="submit" disabled={loading} className="p-2 px-6 lg:w-fit w-full bg-blue-primary shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black font-semibold hover:shadow-[0_0_40px_#0095ff] rounded-sm transition-all cursor-pointer">
            {loading ?
              <Loader className="animate-spin" />
              : "Send Email"
            }
          </button>
        </form>

        <div className="overflow-hidden rounded-md border border-white/10 bg-charleston-green shadow-2xl">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-white/5 lg:table-header-group hidden">
              <tr>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Recipient
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Email Address
                </th>
                <th className="whitespace-nowrap px-6 py-4 text-left font-semibold text-white tracking-wider">
                  Socials
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
              {dataLoading ? (
                <tr className="whitespace-nowrap px-6 py-4">
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Loader className="animate-spin text-blue-primary" />
                    </div>
                  </td>
                </tr>
              ) : (
                history.data.length > 0 ? (
                  history.data.map((item, i) => (
                    <React.Fragment key={i}>
                      {/* Desktop: Table Row */}
                      <tr className="hidden lg:table-row hover:bg-white/[0.03] transition-colors duration-200 group">
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="font-medium text-white group-hover:text-blue-400">{item.name.length >= 14 ? `${item.name.slice(0, 14)}...` : item.name || "Unnamed"}</span>
                        </td>
                        <td className="px-6 py-4 text-white/70">{item.sent_to.slice(0, 20)}...</td>
                        <td className="px-6 py-4">
                          <Link href={item.social} target="_blank"><Link2 size={16} /></Link>
                        </td>
                        <td className="px-6 py-4 text-white/70">{item.sent_by.slice(0, 14)}</td>
                        <td className="px-6 py-4 text-white/50">{formatDate(item.created_at)}</td>
                        <td className="px-6 py-4">
                          <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-white/40 border border-white/10">
                            {item.custom_id.split('-')[0]}...
                          </span>
                        </td>
                      </tr>

                      {/* Mobile: Card View */}
                      <tr className="lg:hidden p-4 border-b border-white/40 bg-charleston-green">
                        <td className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <span className="font-bold text-white text-lg">{item.name || "Unnamed Contact"}</span>
                            <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-white/40 border border-white/10">
                              {item.custom_id.split('-')[0]}...
                            </span>
                          </div>

                          <div className="space-y-2 text-sm text-white/60">
                            <div className="flex justify-between">
                              <span>Sent To:</span>
                              <span className="text-white">{item.sent_to.slice(0, 20)}...</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sent By:</span>
                              <span>{item.sent_by.slice(0, 14)}</span>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                              <span className="text-xs text-white/40">{formatDate(item.created_at)}</span>
                              <Link href={item.social} target="_blank" className="text-blue-400">
                                <Link2 size={18} />
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="text-white/20 text-lg">No records found</span>
                        <p className="text-white/10 text-xs">When you send emails, they will appear here.</p>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <div className="flex lg:justify-between justify-end items-center p-4 border-t border-white/10">
            <span className="text-sm text-white/70 lg:block hidden">{history.page * history.limit} of {totalEmails.current} Emails</span>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span>Page {history.page} of {Math.ceil(totalEmails.current / history.limit)}</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setHistory(prev => ({ ...prev, page: Math.max(prev.page - 1, 1) }))}
                  disabled={history.page === 1}
                  className="px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setHistory(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={history.page >= Math.ceil(totalEmails.current / history.limit)}
                  className="px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}