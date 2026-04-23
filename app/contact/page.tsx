import DefaultLayout from "../components/layouts/DefaultLayout";
import Contact from "../sections/Contact";

export default function contact() {
  return (
    <DefaultLayout>
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-[1]"
        style={{
          height: "80vh",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundColor: "#0a0f14",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
        }}
      />
      <div className="sm:p-0 sm:pt-10 pt-25 bg-black-primary">
        <Contact />
      </div>
    </DefaultLayout>
  )
}