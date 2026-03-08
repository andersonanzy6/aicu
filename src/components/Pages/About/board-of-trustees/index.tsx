"use client";
import React from "react";
import { boardMembers } from "./constants";
import HeaderPage from "@/components/Shared/HeaderPage";

const Bot = () => {
   return (
      <>
         <HeaderPage
            text="Board of Trustees"
            image="/about/mission-eleven.jpg"
         />
         <div className="my-[4rem] p-[1rem]">
            <div className="max-w-[1200px] mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] justify-center">
                  {boardMembers.map((val, idx) => (
                     <div
                        key={idx}
                        className={`p-[1.2rem] border rounded-[10px] shadow ${
                           idx === 0 ? "md:col-span-3 md:w-[400px] mx-auto" : ""
                        }`}
                     >
                        <img
                           src={val.image}
                           alt=""
                           className="w-[full] hover:grayscale rounded-[9px]"
                        />
                        <div className="text-center mt-[.8rem]">
                           <h1 className="text-[#2A3E9E] text-[1.6rem] font-bold leading-[1]">
                              {val.name}
                           </h1>
                           { <p className="font-bold my-[.2rem] text-[.95rem]">{val.position}</p>
                           /*<p className="text-bold my-[.2rem] text-[.95rem]">{val.title}</p>
                           <p className="text-bold my-[.2rem] text-[.95rem]">{val.organization}</p> */}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Bot;
