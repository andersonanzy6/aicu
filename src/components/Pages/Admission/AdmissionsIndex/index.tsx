"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

const AdmissionsIndex = () => {
   const admissionLinks = [
      {
         title: "How to Apply",
         description: "Step-by-step application guide",
         href: "/admissions/how-to-apply",
      },
      {
         title: "Requirements for Admission",
         description: "Academic and personal requirements",
         href: "/admissions/requirements-for-admission",
      },
      {
         title: "Apply for Undergraduate & Masters",
         description: "Application for UG and Graduate programs",
         href: "/admissions/apply-for-undergraduate-and-masters",
      },
      {
         title: "Apply for Doctoral Programs",
         description: "Application for Doctoral degrees",
         href: "/admissions/apply-for-doctoral-programs",
      },
      {
         title: "Academic Calendar",
         description: "Important dates and deadlines",
         href: "/admissions/academic-calendar",
      },
      {
         title: "Add/Drop & Refunds",
         description: "Course withdrawal policies",
         href: "/admissions/add-drop-date-refunds",
      },
      {
         title: "Tuition & Fees",
         description: "Cost of attendance",
         href: "/admissions/tuition-fees",
      },
      {
         title: "Financial Aid",
         description: "Scholarships and aid opportunities",
         href: "/admissions/financial-aid",
      },
      {
         title: "Financial Information",
         description: "Payment and financial details",
         href: "/admissions/financial-information",
      },
      {
         title: "Our Admissions Team",
         description: "Meet our admissions professionals",
         href: "/admissions/our-admissions-team",
      },
      {
         title: "Student Handbook",
         description: "Rules and guidelines",
         href: "/admissions/student-handbook",
      },
   ];

   return (
      <>
         <title>AICU | Admissions</title>
         <HeaderPage
            text="Admissions"
            image="/admission/ad-eleven.jpg"
         />
         
         <div className="max-w-7xl mx-auto py-16 px-4">
            <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
               Begin your journey at AICU. Find information about our application process, requirements, 
               financial aid, and everything you need to know to apply.
            </p>

            {/* Quick Links */}
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-center mb-8">Admissions Information</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {admissionLinks.map((link, index) => (
                     <a
                        key={index}
                        href={link.href}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#4169E1] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                     >
                        <h3 className="text-lg font-bold text-[#4169E1] mb-2">{link.title}</h3>
                        <p className="text-gray-600">{link.description}</p>
                        <div className="mt-4 text-[#4169E1] font-semibold flex items-center">
                           Learn More <span className="ml-2">→</span>
                        </div>
                     </a>
                  ))}
               </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-12 text-center">
               <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
               <p className="mb-6 text-lg">Start your application today and join the AICU community</p>
               <a
                  href="/apply"
                  className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
               >
                  Start Application
               </a>
            </div>
         </div>
      </>
   );
};

export default AdmissionsIndex;
