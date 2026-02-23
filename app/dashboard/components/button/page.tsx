"use client";

import Header from "@/app/components/dashboard/header";
import { useEffect, useState } from "react";
import { Resource } from "@/types/type";
import ResourceCard from "@/app/components/ui/resource-card";

export default function ButtonPage() {
  const [data, setData] = useState<Resource[] | null>(null);
  const [loading, setLoading] = useState(true);
  async function getData() {
    const response = await fetch('/api/resources/Button?category=components&type=Button');
    if (response.ok) {
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom">

        {/* Header Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Buttons <span className="text-blue-primary">Components</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Von Bryan's collection of buttons components that are ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-full h-[400px] bg-charleston-green animate-pulse rounded-lg"></div>
            ))
          ) : (
            /*@ts-ignore*/
            data?.data.map((item, i) => (
              <ResourceCard key={i} item={item} />
            ))
          )}
        </div>
      </div>

    </>
  )
}
