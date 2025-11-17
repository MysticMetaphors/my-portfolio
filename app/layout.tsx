import type { Metadata } from "next";
import Footer from "./components/layouts/Footer";
import Navigation from "./components/layouts/Navigation";
import "./globals.css";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Von Bryan | Creative Web Solutions",
  description:
    "I crafts high-performing websites, e-commerce platforms, and digital experiences through innovation, design, and technology.",
  keywords: [
    "Von Bryan Bañal",
    "web development",
    "UI/UX design",
    "UI/UX",
    "Next.js",
    "Vue.js",
    "React",
    "web design",
    "Laravel",
    "frontend developer",
    "Frontend developer",
    "frontend development",
  ],
  authors: [{ name: "Von Bryan Team", url: "https://von-bryan-five-92.vercel.app/" }],
  openGraph: {
    title: "Von Bryan | Creative Web Solutions",
    description:
      "Building modern, responsive, and impactful digital experiences through design and innovation.",
    url: "https://von-bryan-five-92.vercel.app/",
    siteName: "Von Bryan",
    images: [
      {
        url: "https://von-bryan-five-92.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Von Bryan Web Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Von Bryan | Creative Web Solutions",
    description:
      "I create exceptional web and e-commerce experiences through design, performance, and innovation.",
    images: ["https://von-bryan-five-92.vercel.app/og-image.png"],
    creator: "Von Bryan",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://von-bryan-five-92.vercel.app/",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-darkblue-primary"
      >
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* <div className="sm:p-0 pb-25"> */}
          <Navigation />
        {/* </div> */}
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
