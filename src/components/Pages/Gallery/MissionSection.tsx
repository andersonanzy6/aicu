"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const MissionSection = () => {
   return (
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-12 mb-16">
         <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 pb-8 border-b-2 border-[#4169E1]">
               <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  🚀 ANAZOPUREO - Global Campus Reignition
               </h2>
               <p className="text-gray-600 text-lg">
                  Igniting Purpose, Passion, and Power Across Global Campuses
               </p>
            </div>

            {/* About Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
               <div>
                  <h3 className="text-2xl font-bold text-[#4169E1] mb-4">About ANAZOPUREO</h3>
                  <p className="text-gray-700 leading-relaxed">
                     A global spiritual and academic awakening initiative organized by the American 
                     International Christian University (AICU) in conjunction with the Joint Christian 
                     Campus Fellowship (JCCF), Rivers State.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                     Our vision is to ignite a new wave of purpose, passion, and power among students 
                     and young adults across campuses. By combining revival fire, academic excellence, 
                     and leadership development, we believe in raising a generation that will shape the 
                     future with kingdom values.
                  </p>
               </div>

               {/* Mission */}
               <div>
                  <h3 className="text-2xl font-bold text-[#4169E1] mb-4">Our Mission</h3>
                  <p className="text-gray-700 font-semibold mb-4 text-lg">
                     To reignite the fire of revival, renew academic commitment, and raise visionary 
                     leaders across global campuses.
                  </p>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                     <p className="text-gray-700 font-semibold mb-4">We are committed to:</p>
                     <ul className="space-y-3">
                        <li className="flex items-start">
                           <span className="text-[#4169E1] font-bold mr-3">✓</span>
                           <span className="text-gray-700">Building a generation of spiritually vibrant students</span>
                        </li>
                        <li className="flex items-start">
                           <span className="text-[#4169E1] font-bold mr-3">✓</span>
                           <span className="text-gray-700">Promoting academic responsibility and kingdom excellence</span>
                        </li>
                        <li className="flex items-start">
                           <span className="text-[#4169E1] font-bold mr-3">✓</span>
                           <span className="text-gray-700">Equipping young people for impactful leadership in society and ministry</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Who We Are */}
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
               <h3 className="text-2xl font-bold text-[#4169E1] mb-4">Who We Are</h3>
               <p className="text-gray-700 mb-6">
                  We are a passionate team of Christian leaders, ministers, and students from diverse 
                  backgrounds — united by one purpose: to see God's glory fill the campuses of the world.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                     <span className="text-[#4169E1] font-bold mr-3">•</span>
                     <span className="text-gray-700">Global and national guest ministers</span>
                  </div>
                  <div className="flex items-start">
                     <span className="text-[#4169E1] font-bold mr-3">•</span>
                     <span className="text-gray-700">Christian student fellowships</span>
                  </div>
                  <div className="flex items-start">
                     <span className="text-[#4169E1] font-bold mr-3">•</span>
                     <span className="text-gray-700">Worship ministers and educators</span>
                  </div>
                  <div className="flex items-start">
                     <span className="text-[#4169E1] font-bold mr-3">•</span>
                     <span className="text-gray-700">A network of believers hungry for change</span>
                  </div>
               </div>
               <p className="text-gray-700 font-semibold mt-6 text-lg">
                  We believe the time is now to "ANAZOPUREO" — to stir again the flames of revival!
               </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                  href="https://aicuglobalcampusreignitions.org/mission/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#4169E1] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
               >
                  Visit ANAZOPUREO Website
                  <ExternalLink className="w-5 h-5 ml-2" />
               </a>
               <a
                  href="mailto:info@aicuglobalcampusreignitions.org"
                  className="inline-flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300"
               >
                  Get Involved
               </a>
            </div>
         </div>
      </div>
   );
};

export default MissionSection;
