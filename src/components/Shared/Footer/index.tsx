import Link from "next/link";
import React from "react";

// Footer data
const footerData = {
   about: [
      { title: "About AICU", link: "/about" },
      { title: "Our Mission", link: "/about/mission" },
      { title: "Our History", link: "/about/history" },
      { title: "AICU at a Glance", link: "/about/at-a-glance" },
      { title: "Board of Trustees", link: "/about/board-of-trustees" },
   ],
   admissions: [
      { title: "Admissions Hub", link: "/admissions" },
      { title: "How To Apply", link: "/admissions/how-to-apply" },
      { title: "Requirements for Admission", link: "/admissions/requirements-for-admission" },
      { title: "Tuition & Fees", link: "/admissions/tuition-fees" },
      { title: "Financial Aid", link: "/admissions/financial-aid" },
   ],
   academicResources: [
      { title: "Undergraduate Programs", link: "/academics" },
      { title: "Graduate Programs", link: "/academics" },
      { title: "Master's Degrees", link: "/academics" },
      { title: "Doctoral Programs", link: "/academics" },
      { title: "Faculty Directory", link: "/faculty" },
   ],
   quickLinks: [
      { title: "News & Blog", link: "/news" },
      { title: "Support AICU", link: "/support-us" },
      { title: "Search", link: "/search" },
      { title: "Apply Now", link: "/apply", button: true },
   ],
   contact: {
      address: "Columbia Sc Usa Office 1201 Main Columbia Sc 39201. Suite 1989",
      phone: "80337208012",
      email: "info@aicuedu.org",
      hours: "Monday - Friday 9AM - 5PM",
   },
   socialLinks: [
      { icon: "instagram", link: "#" },
      { icon: "facebook", link: "#" },
      { icon: "youtube", link: "#" },
      { icon: "linkedin", link: "#" },
   ],
};

const Footer = () => {
   return (
      <footer className="bg-[#19293d] text-white  relative">
         <button
            className="fixed bottom-4 right-4 bg-[#0d0c37] text-white p-3 rounded-full shadow-lg hover:bg-[#af9e5a] transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
            ⬆️
         </button>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="h-[30px] w-full fill-white"
         >
            <path
               className="elementor-shape-fill"
               d="M738,99l262-93V0H0v5.6L738,99z"
            ></path>
         </svg>
         <div className="max-w-[1100px] mx-auto px-6 py-[3rem]">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8  md:text-left mb-8">
               {/* About Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">About AICU</h3>
                  <ul>
                     {footerData.about.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Admissions Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Admissions</h3>
                  <ul>
                     {footerData.admissions.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Academic Resources Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Academic Resources</h3>
                  <ul>
                     {footerData.academicResources.map((item, index) => (
                        <li key={index}>
                           <Link
                              href={item.link}
                              className="text-gray-300 hover:text-white"
                           >
                              {item.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Quick Links Section */}
               <div>
                  <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>
                  <ul>
                     {footerData.quickLinks.map((item, index) => (
                        <li
                           key={index}
                           className="mb-2"
                        >
                           {item.button ? (
                              <Link
                                 href={item.link}
                                 className="bg-[#2C6695] text-white py-2 px-4 rounded hover:bg-blue-700"
                              >
                                 {item.title}
                              </Link>
                           ) : (
                              <Link
                                 href={item.link}
                                 className="text-gray-300 hover:text-white"
                              >
                                 {item.title}
                              </Link>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Middle Section with Address and Contact Info */}
            <div className="border-t text-[.9rem] border-gray-700 py-[2rem] flex flex-col md:flex-row items-center justify-between  md:text-left text-white">
               <div className="w-full">
                  <h1>ADDRESS</h1>
                  <p>{footerData.contact.address}</p>
               </div>

               <div className="w-full">
                  <p className="mb-2 md:mb-0">
                     <strong>PHONE:</strong> {footerData.contact.phone}
                  </p>
                  <p className="mb-2 md:mb-0">
                     <strong>EMAIL:</strong> {footerData.contact.email}
                  </p>
                  <p className="mb-2 md:mb-0">
                     <strong>HOURS:</strong> {footerData.contact.hours}
                  </p>
               </div>
            </div>

            {/* Bottom Section with Logo and Social Media Links */}
            <div className="border-t border-gray-700 py-4 flex flex-col items-center">
               {/* University Logo */}
               <img
                  src="/logo-uni.png"
                  alt="University Logo"
                  className="w-24 h-auto mb-4"
               />

               <p className="text-sm text-gray-400 mb-4 text-center">
                  © 2024 AICU. All Rights Reserved <br /> Web Design & Hosting by The Diplomats
               </p>

               {/* Social Media Links */}
               <div className="flex space-x-4">
                  {footerData.socialLinks.map((item, index) => (
                     <a
                        key={index}
                        href={item.link}
                        className="text-gray-400 hover:text-white"
                     >
                        <i
                           className={`fab fa-${item.icon} fa-lg`}
                           aria-hidden="true"
                        ></i>
                     </a>
                  ))}
               </div>

               {/* Privacy and Contact Links */}
               <div className="flex space-x-4 mt-4">
                  <a
                     href="/privacy"
                     className="text-gray-400 hover:text-white"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="/terms"
                     className="text-gray-400 hover:text-white"
                  >
                     Terms of Service
                  </a>
                  <a
                     href="/contact"
                     className="text-gray-400 hover:text-white"
                  >
                     Contact Us
                  </a>
               </div>
            </div>
         </div>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="-rotate-180 fill-[#f0bd14] h-[40px] w-full"
         >
            <path
               className="elementor-shape-fill"
               d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            ></path>
         </svg>
      </footer>
   );
};

export default Footer;
