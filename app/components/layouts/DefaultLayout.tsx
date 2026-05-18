import AIChatbot from "../ui/AI-Chatbot";
import GridBg from "../ui/GridBackground";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function DefaultLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Navigation />
      <GridBg
        color="#0095ff" height="80vh"
        vertical_line={[
          { left: '180px', duration: '8s', delay: '0s', height: '100px', opacity: 0.4 },
          { left: '360px', duration: '10s', delay: '0s', height: '70px', opacity: 0.25 },
          { left: '540px', duration: '7s', delay: '0s', height: '120px', opacity: 0.45 },
          { left: '120px', duration: '12s', delay: '0s', height: '60px', opacity: 0.2 },
          { left: '480px', duration: '9s', delay: '0s', height: '90px', opacity: 0.3 },
          { left: '1260px', duration: '9s', delay: '0s', height: '120px', opacity: 0.3 },
          { left: '1380px', duration: '5s', delay: '0s', height: '80px', opacity: 0.5 },
          { left: '1440px', duration: '13s', delay: '0s', height: '120px', opacity: 0.3 },
        ]}
        horizontal_lines={[
          { top: '120px', duration: '6s', delay: '0s', width: '140px', opacity: 0.5 },
          { top: '300px', duration: '9s', delay: '0s', width: '80px', opacity: 0.3 },
          { top: '480px', duration: '7s', delay: '0s', width: '110px', opacity: 0.45 },
          { top: '60px', duration: '11s', delay: '0s', width: '60px', opacity: 0.25 },
          { top: '240px', duration: '8s', delay: '0s', width: '90px', opacity: 0.35 },
        ]}
      />
      {children}
      <Footer />
      <ScrollToTopButton />
      <AIChatbot />
    </>
  )
}