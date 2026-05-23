import DefaultLayout from "./components/layouts/DefaultLayout";
import ScrollAnimator from "./components/ScrollAnimator";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Offers from "./sections/Offers";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Services />
      <Offers />
      <Projects />
      <TechStack />
      <Contact onView={true} />
      <ScrollAnimator />
    </DefaultLayout>
  );
}
