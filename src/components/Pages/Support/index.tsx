"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";
import { Heart, Users, BookOpen, Award } from "lucide-react";

const SupportPage = () => {
   const impactAreas = [
      {
         icon: <BookOpen className="w-12 h-12" />,
         title: "Scholarships",
         description: "Support students with tuition assistance and scholarship programs",
      },
      {
         icon: <Users className="w-12 h-12" />,
         title: "Student Life",
         description: "Fund student organizations, events, and campus activities",
      },
      {
         icon: <Award className="w-12 h-12" />,
         title: "Academic Excellence",
         description: "Support research initiatives and academic programs",
      },
      {
         icon: <Heart className="w-12 h-12" />,
         title: "Campus Development",
         description: "Help improve our facilities and campus infrastructure",
      },
   ];

   const givingLevels = [
      {
         level: "Friend",
         amount: "$1 - $99",
         color: "bg-blue-100 border-blue-300",
         benefits: ["Donor recognition", "Newsletter updates"],
      },
      {
         level: "Patron",
         amount: "$100 - $499",
         color: "bg-indigo-100 border-indigo-300",
         benefits: ["All Friend benefits", "Annual report", "Event invitations"],
      },
      {
         level: "Benefactor",
         amount: "$500 - $2,499",
         color: "bg-purple-100 border-purple-300",
         benefits: ["All Patron benefits", "Named recognition", "Special events"],
      },
      {
         level: "Premier Partner",
         amount: "$2,500+",
         color: "bg-yellow-100 border-yellow-300",
         benefits: ["All benefits", "Naming opportunity", "Private meeting with leadership"],
      },
   ];

   return (
      <>
         <title>AICU | Support Us</title>
         <HeaderPage
            text="Support AICU"
            image="/about/about-bg.jpg"
         />
         
         <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Opening Section */}
            <section className="mb-16">
               <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
                  Your generosity helps AICU provide world-class education and shape leaders for 
                  tomorrow. Make a difference in the lives of thousands of students.
               </p>
               <div className="text-center">
                  <a
                     href="#give"
                     className="inline-block bg-[#FF6B6B] text-white font-bold py-4 px-12 rounded-lg hover:bg-red-600 transition-colors duration-300 text-lg"
                  >
                     Make a Donation
                  </a>
               </div>
            </section>

            {/* Impact Areas */}
            <section className="mb-16">
               <h2 className="text-3xl font-bold text-center mb-12">Where Your Gift Makes an Impact</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {impactAreas.map((area, index) => (
                     <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow"
                     >
                        <div className="text-[#4169E1] mb-4 flex justify-center">{area.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Giving Levels */}
            <section className="mb-16">
               <h2 className="text-3xl font-bold text-center mb-12">Giving Levels</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {givingLevels.map((level, index) => (
                     <div
                        key={index}
                        className={`border-2 rounded-lg p-8 ${level.color}`}
                     >
                        <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                        <p className="text-lg font-semibold mb-6 text-gray-700">{level.amount}</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                           {level.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                 <span className="mr-2">✓</span>
                                 <span>{benefit}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </section>

            {/* Donation Section */}
            <section id="give" className="bg-gradient-to-r from-[#4169E1] to-indigo-600 text-white rounded-lg p-12">
               <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
               <p className="mb-8 text-lg max-w-2xl">
                  Your donation is secure and tax-deductible. 100% of your contribution goes directly 
                  to supporting our students and programs.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-white text-[#4169E1] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                     Give One-Time
                  </button>
                  <button className="bg-white text-[#4169E1] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                     Set Up Monthly Giving
                  </button>
                  <button className="bg-white text-[#4169E1] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                     Other Ways to Give
                  </button>
               </div>
            </section>

            {/* Contact for Giving */}
            <section className="mt-16 bg-gray-100 rounded-lg p-8">
               <h3 className="text-2xl font-bold mb-6">Questions About Giving?</h3>
               <p className="text-gray-700 mb-4">
                  Our Development team is here to help you find the giving opportunity that's right for you.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <p className="font-semibold text-gray-800 mb-2">Email</p>
                     <a href="mailto:development@aicu.edu" className="text-[#4169E1] hover:underline">
                        development@aicu.edu
                     </a>
                  </div>
                  <div>
                     <p className="font-semibold text-gray-800 mb-2">Phone</p>
                     <a href="tel:+1234567890" className="text-[#4169E1] hover:underline">
                        +1 (234) 567-890
                     </a>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default SupportPage;
