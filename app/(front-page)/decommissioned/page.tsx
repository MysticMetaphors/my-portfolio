import { League_Gothic, Inter } from "next/font/google";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-league-gothic",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export default function Decommissioned() {
  return (
    <div className={`${leagueGothic.variable} ${inter.variable} bg-[#121614] w-screen h-screen md:p-[72px] p-[20px]`} >
      <div className="md:p-24 p-14 rounded-[35px] border border-[#252629] w-full h-full shadow-[-4px_-9px_16px_0px_rgb(23,27,25),4px_9px_16px_0px_rgb(12,12,16)] flex flex-col items-start justify-start gap-6">
        <h1 className="md:max-w-70 max-w-60 font-[family-name:var(--font-league-gothic)] text-[#EDEDED] tracking-tight text-[clamp(4.5rem,10vw,6rem)] leading-[0.95]">
          Proceed to the portfolio
        </h1>

        <p className="font-[family-name:var(--font-inter)] text-[#8A8F8C] text-base md:text-lg max-w-md" >
          This link is no longer live. Head over to the new portfolio to see what's next.
        </p>

        <div className="flex md:items-center justify-start md:gap-5 md:flex-row flex-col">
          <a href="https://von-bryan.framer.website/" className="mt-4 font-[family-name:var(--font-inter)] font-medium text-[#EDEDED] rounded-[16px] border border-[#252629] px-8 py-4 shadow-[-4px_-9px_16px_0px_rgb(23,27,25),4px_9px_16px_0px_rgb(12,12,16)] hover:shadow-[inset_4px_9px_16px_0px_rgb(12,12,16),inset_-4px_-9px_16px_0px_rgb(23,27,25)] transition-shadow duration-300 ease-out active:shadow-[inset_6px_11px_18px_0px_rgb(12,12,16),inset_-6px_-11px_18px_0px_rgb(23,27,25)]" >
            Portfolio
          </a>
          <a href="https://von-bryan.framer.website/contact" className="mt-4 font-[family-name:var(--font-inter)] font-medium text-[#EDEDED] rounded-[16px] border border-[#252629] px-8 py-4 shadow-[-4px_-9px_16px_0px_rgb(23,27,25),4px_9px_16px_0px_rgb(12,12,16)] hover:shadow-[inset_4px_9px_16px_0px_rgb(12,12,16),inset_-4px_-9px_16px_0px_rgb(23,27,25)] transition-shadow duration-300 ease-out active:shadow-[inset_6px_11px_18px_0px_rgb(12,12,16),inset_-6px_-11px_18px_0px_rgb(23,27,25)]" >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}