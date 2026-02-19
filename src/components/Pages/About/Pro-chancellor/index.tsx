"use client";

import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import React from "react";
import LinksShared from "../SharedAbout/LinksShared";

const ProChancellor = () => {
   return (
      <div>
         <title>PRO-Chancellor</title>
         {/* Hero Section */}
         <HeaderPage
            text="PRO-Chancellor"
            image="/about/mission-eight.jpg"
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
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Dr. Akinsola Kings Ojo, the Pro Chancellor of American International Christian
                  University (AICU), is a distinguished leader and visionary in the field of higher
                  education. With a profound commitment to academic excellence and a passion for
                  fostering holistic development, Dr. Ojo has played an instrumental role in shaping
                  the university’s mission and strategic direction. His leadership is marked by a
                  deep understanding of the transformative power of education and a dedication to
                  creating an inclusive and dynamic learning environment for students, faculty, and
                  staff. Under his guidance, AICU has continued to evolve as an institution of
                  global repute, offering cutting-edge academic programs that prepare students to
                  excel in an interconnected and rapidly changing world.
               </p>
               <p className="text-gray-700 mb-4 text-[.8rem]">
                  Dr. Ojo’s vision extends beyond traditional educational practices; he is a strong
                  advocate for integrating Christian values into the academic experience, believing
                  that faith and learning can work together to nurture ethical leaders. His
                  extensive experience in academia, governance, and international partnerships has
                  been a key asset in advancing AICU’s global presence and its commitment to serving
                  diverse communities. As Pro Chancellor, Dr. Ojo remains steadfast in his mission
                  to elevate the university’s impact on both local and international levels,
                  ensuring that AICU remains a beacon of academic excellence, spiritual growth, and
                  social responsibility.
               </p>
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

export default ProChancellor;
