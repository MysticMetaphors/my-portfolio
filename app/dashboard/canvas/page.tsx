"use client";

import Header from "@/app/components/dashboard/header";

export default function CanvasPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom space-y-10">


        <section className="bg-gray-900 text-white font-sans relative bg-slate-950 rounded-md">
          <div className="max-w-screen-xl px-30 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute -top-[10%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-primary/20 blur-[120px]" />
              </div>

              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  We invest in the<br />world's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">potential</span>
                </h1>
                <p className="max-w-2xl mb-6 font-normal text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
                  Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                </p>

                <form action="#" className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-1 max-w-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="email" id="email" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3" placeholder="Enter your email" required />
                  </div>
                  <button type="submit" className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 transition">
                    Sign up
                    <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </form>

                <div className="flex items-center text-sm text-gray-400 gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="font-medium text-white">1,456+</span> Reviews
                  </div>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                    <span className="font-medium text-white">Trusted by 10k+ Users</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-auto opacity-80 mix-blend-overlay" />
                </div>
              </div>

            </div>

            <div className="mt-12 lg:mt-24 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-xl font-bold tracking-tighter flex items-center gap-1"><span className="text-2xl">△</span> airbnb</div>
              <div className="text-2xl font-semibold tracking-tight">Google</div>
              <div className="text-3xl font-bold italic scale-y-75 transform -skew-x-12">NIKE</div>
              <div className="text-xl font-medium tracking-widest">UBER</div>
              <div className="text-2xl font-bold tracking-tighter">stripe</div>
              <div className="text-xl font-black tracking-tight">Mashable</div>
            </div>

          </div>
        </section>

        <section className="bg-white font-sans rounded-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen lg:min-h-0">

            <div className="flex flex-col justify-center col-span-2 p-8 md:p-12 lg:p-16 xl:p-18">
              <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-800 md:text-4xl lg:text-6xl max-w-2xl">
                Discover <span className="text-blue-900">new product</span> and best possibilities
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-600 max-w-2xl">
                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 max-w-3xl">

                <div>
                  <svg className="w-6 h-6 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">28 November 2021</h3>
                  <p className="mb-6 text-sm text-gray-500 leading-relaxed">
                    Join us at FlowBite 2021 to understand what's next as the global tech and startup ecosystem, rethinks the future of everything.
                  </p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-900 transition w-max">
                    Conference
                    <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>

                <div>
                  <svg className="w-6 h-6 mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd"></path></svg>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">25+ top notch speakers</h3>
                  <p className="mb-6 text-sm text-gray-500 leading-relaxed">
                    Here you will find keynote speakers, who all are able to talk about Recruiting. Click on the individual keynote speakers and read more about them and their keynotes.
                  </p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-700 transition w-max">
                    <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                    View list
                  </a>
                </div>

              </div> */}
            </div>

            <div className="hidden lg:block col-span-1 lg:relative h-64 lg:h-auto">
              <img src="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?q=80&w=2000&auto=format&fit=crop" alt="Conference Speaker" className="absolute inset-0 w-full h-full object-cover" />
            </div>

          </div>
        </section>

        <section className="bg-gray-900 font-sans min-h-fit flex items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12">

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Your Dream Vacation
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-24 leading-relaxed">
              Here at Flowbite we compare a wide range of destinations, flights and hotels to conjure up cheap holidays for you to enjoy, time and time again.
            </p>

            <div className="flex flex-col mb-12 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-900 transition">
                Discover locations
              </a>
              <a href="#" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-transparent border border-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800 transition">
                Start a trip request
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">

              <div className="flex -space-x-4">
                <img className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User 1" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User 2" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User 3" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User 4" />
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-600"></div>

              <div className="text-left flex flex-col justify-center">
                <div className="flex items-center space-x-1.5 mb-0.5">
                  <svg className="w-5 h-5 text-[#00B67A]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <span className="text-lg font-bold text-white tracking-tight">Trustpilot</span>
                </div>
                <p className="text-sm text-gray-400 font-light">
                  Rated Best Over <span className="font-bold text-white">15.7k</span> Reviews
                </p>
              </div>

            </div>

          </div>
        </section>


        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <button className="bg-brand-primary text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-brand-primary transition-all shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2 group">Primary</button>
            <button className="bg-white border-2 border-brand-primary text-brand-primary p-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
            </button>
            <button className="bg-white border-2 gap-2 border-brand-primary text-brand-primary p-2 pr-3 rounded-full font-bold tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" /></svg>
              Setting
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-brand-primary/70 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">Secondary</button>
            <button className="bg-white border-2 gap-2 border-brand-primary text-brand-primary p-2 rounded-full font-bold tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
            </button>
            <button className="bg-white border-2 gap-2 border-brand-primary text-brand-primary p-2 pr-3 rounded-full font-bold tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
              Loading
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-brand-primary hover:text-white transition-all flex items-center justify-center">Tertiary</button>
            <button className="gap-1 text-gray-400 hover:text-brand-primary rounded-full font-bold tracking-wider text-sm transition-all flex items-center justify-center">
              Visit Page
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}