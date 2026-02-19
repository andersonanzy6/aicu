"use client";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import LinksShared from "../SharedAbout/LinksShared";

const OurChancellor = () => {
   return (
      <div>
         {/* Hero Section */}
         <HeaderPage
            text="Our Chancellor"
            image="/about/mission-seven.jpg"
         />

         <LinksShared />

         {/* Content Section */}
         <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-white">
            {/* Image of the President */}
            <div className="flex justify-center">
               <img
                  src="/new/president-aicu.jpeg"
                  alt="President"
                  className="w-[80%] h-auto rounded-lg shadow-lg"
               />
            </div>

            {/* Text Content */}
            <div className="md:ml-8 mt-4 md:mt-0 max-w-2xl">
               <h2 className="text-[18px] font-bold mb-4">A Visionary Leader at the Helm</h2>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Grace and peace to you from God our Father and the Lord Jesus Christ.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  At AICU, we are proud to be guided by our esteemed Chancellor, Dr. Akinsola Kings
                  Ojo. With a distinguished career in academia, leadership, and innovation, Dr. Ojo
                  brings a wealth of experience and a forward-thinking approach to shaping the
                  future of education at our institution.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  A Message from Our Chancellor “Education is the cornerstone of progress and
                  empowerment. At AICU, we are committed to nurturing talent, fostering innovation,
                  and creating opportunities that pave the way for a brighter tomorrow.”
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  A Message to Students “To all our students: You are the heart of AICU. Your
                  journey here is one of discovery, growth, and achievement. Together, let’s shape a
                  future that reflects the best of who we are and what we can achieve.”
               </p>
               <p className="text-gray-700 italic text-[1rem]">Dr. Akinsola Kings Ojo</p>
               <p className="font-bold">President, AICU</p>
            </div>
         </section>

         {/* Back to Top Button */}
         <button
            className="fixed bottom-4 right-4 bg-[#0d0c37] text-white p-3 rounded-full shadow-lg hover:bg-[#af9e5a] transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
            ⬆️
         </button>
      </div>
   );
};

export default OurChancellor;
