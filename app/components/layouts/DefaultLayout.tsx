import ScrollToTopButton from "../ui/ScrollToTopButton";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function DefaultLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  )
}