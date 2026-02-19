"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

const AboutIndex = () => {
   const aboutLinks = [
      {
         title: "Welcome",
         description: "A message from our President",
         href: "/about/welcome",
         image: "/about/welcome-bg.jpg",
      },
      {
         title: "Mission",
         description: "Our mission and values",
         href: "/about/mission",
         image: "/about/mission.jpg",
      },
      {
         title: "History",
         description: "Learn about our heritage",
         href: "/about/history",
         image: "/about/history.jpg",
      },
      {
         title: "At a Glance",
         description: "Key facts and figures",
         href: "/about/at-a-glance",
         image: "/about/about-bg.jpg",
      },
      {
         title: "President",
         description: "Meet our President",
         href: "/about/president",
         image: "/about/president.jpg",
      },
      {
         title: "Pro-Chancellor",
         description: "Meet our Pro-Chancellor",
         href: "/about/pro-chancellor",
         image: "/about/pro-chancellor.jpg",
      },
      {
         title: "Chancellor",
         description: "Meet our Chancellor",
         href: "/about/our-chancellor",
         image: "/about/chancellor.jpg",
      },
      {
         title: "Board of Trustees",
         description: "Meet our leadership team",
         href: "/about/board-of-trustees",
         image: "/about/board.jpg",
      },
      {
         title: "Student Achievement",
         description: "Celebrating our students",
         href: "/about/student-achievement-rate",
         image: "/about/achievement.jpg",
      },
      {
         title: "Photo Gallery",
         description: "Visual glimpse of AICU",
         href: "/about/photo-gallery",
         image: "/about/gallery.jpg",
      },
   ];

   return (
      <>
         <title>AICU | About</title>
         <HeaderPage
            text="About AICU"
            image="/about/about-bg.jpg"
         />
         
         <div className="max-w-7xl mx-auto py-16 px-4">
            <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
               Discover more about American International Christian University, our mission, values, 
               leadership, and commitment to academic excellence and spiritual development.
            </p>

            {/* About Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {aboutLinks.map((link, index) => (
                  <a
                     key={index}
                     href={link.href}
                     className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group"
                  >
                     <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                           src={link.image}
                           alt={link.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{link.title}</h3>
                        <p className="text-gray-600">{link.description}</p>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </>
   );
};

export default AboutIndex;
