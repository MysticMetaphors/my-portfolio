"use client";

import Header from "@/app/components/dashboard/header";

export default function HeroPage() {
  // const [data, setData] = useState<Resource[] | null>(null);
  //   const [loading, setLoading] = useState(true);
  //   async function getData() {
  //     const response = await fetch('/api/resources/Hero?category=layouts&type=Hero');
  //     if (response.ok) {
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //       setLoading(false);
  //     }
  //   }
  
  //   useEffect(() => {
  //     getData();
  //   }, []);
  
  return (
    <>
    <Header />
    <div className="min-h-screen p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom">

    </div>
    </>
  )
}
