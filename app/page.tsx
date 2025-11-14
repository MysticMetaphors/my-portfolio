import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
