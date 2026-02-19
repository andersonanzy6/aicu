"use client";
import React, { useEffect, useState } from "react";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, Menu, X } from "lucide-react";
import Link from "next/link";
import {
   aboutDropdownContent,
   academicPrograms,
   admissionsContent,
   facultyOptions,
   otherNavItems,
} from "./constant";
import Navbar from "./Top";

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      setOpenDropdown(null);
   };

   const toggleDropdown = (dropdown) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
   };

   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   const handleItemClick = () => {
      setOpenDropdown(null); // Close the dropdown when an item is clicked
   };
   return (
      <>
         <Navbar />
         <header className="w-full bg-white shadow-sm py-[1.5rem]">
            <div className="max-w-[1100px] mx-auto px-4  hidden md:block">
               <div className="flex items-center justify-between h-full">
                  <Link
                     href="/"
                     className="flex items-center"
                  >
                     <img
                        src="/logo.png"
                        alt="Redeemers University Logo"
                        className="h-[70px] w-auto"
                     />
                  </Link>

                  {/* Navigation Section */}
                  <nav className="flex items-center gap-[2rem]">
                     {/* About AICU Dropdown */}
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           <h1 className="leading-none">ABOUT AICU</h1>{" "}
                           {/* <ChevronDown className="ml-1 h-4 w-4 leading-none" /> */}
                           <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[600px] p-[3rem]">
                           <div className="grid grid-cols-3 gap-8">
                              {Object.entries(aboutDropdownContent).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-3"
                                 >
                                    <h3 className="font-semibold text-blue-900 text-sm">
                                       {section}
                                    </h3>
                                    <div className="flex flex-col space-y-2">
                                       {items.map((item) =>
                                          item.isButton ? (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={handleItemClick}
                                                className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition-colors"
                                             >
                                                <DropdownMenuItem>{item.label}</DropdownMenuItem>
                                             </Link>
                                          ) : (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                             >
                                                <DropdownMenuItem>{item.label}</DropdownMenuItem>
                                             </Link>
                                          ),
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           ADMISSIONS <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[800px] p-6">
                           <div className="grid grid-cols-3 gap-8">
                              {Object.entries(admissionsContent).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-4"
                                 >
                                    <h3 className="font-semibold text-blue-900 text-sm border-b border-blue-900 pb-2">
                                       {section}
                                    </h3>
                                    <div className="flex flex-col space-y-3">
                                       {items.map((item, index) =>
                                          item.img ? (
                                             <div
                                                key={`img-${index}`}
                                                className="mt-4"
                                             >
                                                <img
                                                   src={item.img}
                                                   alt={item.alt}
                                                   className="rounded-lg w-full h-auto object-cover"
                                                />
                                             </div>
                                          ) : (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                             >
                                                <DropdownMenuItem>{item.label}</DropdownMenuItem>
                                             </Link>
                                          ),
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-6">
                              <Link
                                 href="/apply-now"
                                 className="block w-full bg-blue-700 text-white text-center py-3 rounded hover:bg-blue-800 transition-colors"
                              >
                                 Apply Now
                              </Link>
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           ACADEMIC PROGRAMS <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[1000px] p-[2rem]">
                           <div className="grid grid-cols-4 gap-8">
                              {Object.entries(academicPrograms).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-4"
                                 >
                                    <h3 className="font-semibold text-blue-900 text-sm border-b border-blue-900 pb-2">
                                       {section}
                                    </h3>
                                    <div className="flex flex-col space-y-3">
                                       {items.map((item, index) =>
                                          item.img ? (
                                             <div
                                                key={`img-${index}`}
                                                className="mt-4"
                                             >
                                                <img
                                                   src={item.img}
                                                   alt={item.alt}
                                                   className="rounded-lg w-full h-auto object-cover"
                                                />
                                             </div>
                                          ) : (
                                             <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                             >
                                                <DropdownMenuItem>{item.label}</DropdownMenuItem>
                                             </Link>
                                          ),
                                       )}
                                    </div>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-6">
                              <div className="grid grid-cols-2 gap-2">
                                 <Link
                                    href="/transcript-request"
                                    className="block w-full bg-[#60C087] text-white text-center py-3 rounded hover:bg-blue-800 transition-colors"
                                 >
                                    Transcript Request
                                 </Link>
                                 <Link
                                    href="/apply-now"
                                    className="block w-full bg-blue-700 text-white text-center py-3 rounded hover:bg-blue-800 transition-colors"
                                 >
                                    Transfer Credit
                                 </Link>
                              </div>
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center text-[15px] text-[#003399] hover:text-blue-700">
                           FACULTY <Plus className="h-2 w-2 ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[1000px] p-[2rem]">
                           <div className="">
                              {Object.entries(facultyOptions).map(([section, items]) => (
                                 <div
                                    key={section}
                                    className="space-y-4  w-full"
                                 >
                                    <div className="grid grid-cols-2 gap-[2rem]  items-center">
                                       <div>
                                          <img
                                             src="/faculty/fa-3.jpg"
                                             alt=""
                                             className="rounded-[20px]"
                                          />
                                       </div>
                                       <div>
                                          <h3 className="font-semibold text-blue-900 text-sm border-b border-blue-900 pb-2">
                                             {section}
                                          </h3>
                                          <div className="flex flex-col space-y-3 mt-[1rem]">
                                             {items.map((item, index) => (
                                                <Link
                                                   key={item.label}
                                                   href={item.href}
                                                   className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                                >
                                                   <DropdownMenuItem>{item.label}</DropdownMenuItem>
                                                </Link>
                                             ))}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </DropdownMenuContent>
                     </DropdownMenu>

                     <Link
                        target="_blank"
                        href="https://rccgnaseminary.populiweb.com/router/library/links/index"
                        className="flex uppercase items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        Library
                     </Link>
                     <Link
                        href="library"
                        className="flex items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        ALUMNI
                     </Link>

                     <Link
                        href="/news"
                        className="flex items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        NEWS
                     </Link>

                     <Link
                        href="/search"
                        className="flex items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        SEARCH
                     </Link>

                     <Link
                        href="/support-us"
                        className="flex items-center text-[15px] text-[#003399] hover:text-blue-700"
                     >
                        SUPPORT
                     </Link>
                  </nav>

                  {/* Apply Button */}
                  <Link
                     href="/apply"
                     className="bg-[#F7C750] shadow-md hover:bg-[#a78635] text-blue-900 px-6 py-2 rounded transition-colors"
                  >
                     Apply Online →
                  </Link>
               </div>
            </div>
            <div className="md:hidden w-[100%!important]">
               <div className="flex items-center justify-between p-4">
                  <Link
                     href="/"
                     className="flex items-center"
                  >
                     <img
                        src="/logo.png"
                        alt="Redeemers University Logo"
                        className="h-[50px] w-auto"
                     />
                  </Link>
                  <button
                     onClick={toggleMobileMenu}
                     className="text-blue-900"
                  >
                     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
               {isMobileMenuOpen && (
                  <div className="absolute z-50 w-full bg-white shadow-lg">
                     <nav className="flex flex-col">
                        {/* Mobile Dropdown Sections */}
                        <MobileDropdown
                           title="ABOUT AICU"
                           content={aboutDropdownContent}
                           isOpen={openDropdown === "about"}
                           onToggle={() => toggleDropdown("about")}
                           onItemClick={handleItemClick}
                        />
                        <MobileDropdown
                           title="ADMISSIONS"
                           content={admissionsContent}
                           isOpen={openDropdown === "admissions"}
                           onToggle={() => toggleDropdown("admissions")}
                           onItemClick={handleItemClick}
                        />
                        <MobileDropdown
                           title="ACADEMIC PROGRAMS"
                           content={academicPrograms}
                           isOpen={openDropdown === "programs"}
                           onToggle={() => toggleDropdown("programs")}
                           onItemClick={handleItemClick}
                        />
                        <MobileDropdown
                           title="FACULTY"
                           content={facultyOptions}
                           isOpen={openDropdown === "faculty"}
                           onToggle={() => toggleDropdown("faculty")}
                           onItemClick={handleItemClick}
                        />

                        {/* Direct Links */}
                        <Link
                           href="https://rccgnaseminary.populiweb.com/router/library/links/index"
                           target="_blank"
                           className="px-4 py-3 text-blue-900 hover:bg-blue-50 border-t"
                        >
                           Library
                        </Link>
                        <Link
                           href="/library"
                           className="px-4 py-3 text-blue-900 hover:bg-blue-50 border-t"
                        >
                           ALUMNI
                        </Link>
                        <Link
                           href="/news"
                           className="px-4 py-3 text-blue-900 hover:bg-blue-50 border-t"
                        >
                           NEWS & BLOG
                        </Link>
                        <Link
                           href="/search"
                           className="px-4 py-3 text-blue-900 hover:bg-blue-50 border-t"
                        >
                           SEARCH
                        </Link>
                        <Link
                           href="/support-us"
                           className="px-4 py-3 text-blue-900 hover:bg-blue-50 border-t"
                        >
                           SUPPORT AICU
                        </Link>

                        {/* Apply Button */}
                        <Link
                           href="/apply"
                           className="px-4 py-3 bg-[#F7C750] text-blue-900 text-center font-bold border-t"
                        >
                           Apply Online →
                        </Link>
                     </nav>
                  </div>
               )}
            </div>
         </header>
      </>
   );
};

const MobileDropdown = ({ title, content, isOpen, onToggle, onItemClick }) => {
   return (
      <div className="border-t">
         <button
            onClick={onToggle}
            className="w-full flex justify-between items-center px-4 py-3 text-blue-900 hover:bg-blue-50"
         >
            {title}
            <Plus
               className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-45" : ""}`}
            />
         </button>
         {isOpen && (
            <div className="bg-blue-50 p-4">
               {Object.entries(content).map(([section, items]) => (
                  <div
                     key={section}
                     className="mb-4"
                  >
                     <h3 className="font-semibold text-blue-900 text-sm mb-2">{section}</h3>
                     <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-3">
                           {items.map((item, index) =>
                              item.img ? (
                                 <div
                                    key={`img-${index}`}
                                    className="mt-4"
                                 >
                                    <img
                                       src={item.img}
                                       alt={item.alt}
                                       className="rounded-lg w-full h-[70px] object-cover"
                                    />
                                 </div>
                              ) : (
                                 <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={onItemClick}
                                    className="text-gray-700 hover:text-blue-700 text-sm transition-colors"
                                 >
                                    {item.label}
                                 </Link>
                              ),
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Header;
