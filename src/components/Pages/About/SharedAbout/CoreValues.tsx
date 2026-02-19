"use client";
import React, { useState } from "react";

const CoreValues = () => {
   const [activeIndex, setActiveIndex] = useState(null);

   // JavaScript object to store the content
   const values = [
      {
         title: "Passion",
         content: (
            <>
               <p>
                  <strong>
                     Our sovereign Lord, Jesus the Christ, has called us individually and collectively
                     to love our God and to love our neighbors as ourselves—above all else. To that
                     end, we, the board, faculty, and staff of AICU:
                  </strong>
               </p>
               <ul className="list-decimal ml-6 mt-2">
                  <li>
                     Commit to pursuing our work together with the passion that comes from
                     recognizing we are called to our work and relationships by God for purposes
                     beyond our comfort, agendas, or understanding.
                  </li>
                  <li>
                     We place our whole heart and feeling into our work with a holy discontent with
                     things as they are.
                  </li>
                  <li>
                     We commit to long-suffering obedience in the same direction of pursuing new
                     solutions and better ways.
                  </li>
                  <li>
                     We commit to be the best stewards of this work that God has given to us
                     recognizing that God will determine the outcome.
                  </li>
                  <li>
                     While we have opinions about many things, we are going to stake on the
                     following four values that will determine the way we work together and with
                     students, faculty, donors, partners, the public, and every other stakeholder of
                     AICU.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "Celebrate",
         content: (
            <p>
               <strong>
                  Recognizing that every good and perfect gift is from above, we are thankful. We
                  take time to recognize and mark God’s good gifts that come to us personally and in
                  our work together. Because these gifts come to us in both success and failure:
               </strong>
               <ul className="list-disc ml-6 mt-2">
                  <li>We reflect on our work and celebrate ALL that we are learning.</li>
                  <li>
                     We create a workplace that invites “dancing and singing” to the Lord – a place
                     where releasing holy joy is welcome because we know the redemptive power of
                     thankfulness and joy.
                  </li>
               </ul>
            </p>
         ),
      },
      {
         title: "Respect",
         content: (
            <p>
               <strong>
                  Respect People in all their diversity are gifts made in God’s image and therefore
                  worthy of respect. We show respect by:
               </strong>
               <ul className="list-disc ml-6 mt-2">
                  <li>Being accountable to one another.</li>
                  <li>AICU at a Glance - American International Christian University</li>
                  <li>
                     Dealing with conflict in a direct manner. d. We honor one another by listening
                     and communicating in an open, patient, and sensitive manner.
                  </li>
                  <li>We encourage and value each person’s input, ideas, and perspectives.</li>
                  <li>We show consideration through clear communications and punctuality.</li>
                  <li>
                     We acknowledge our differences and work together to complement our strengths
                     and weaknesses.
                  </li>
               </ul>
            </p>
         ),
      },
      {
         title: "Integrity",
         content: (
            <p>
               <strong>
                  Integrity We seek to be an honest reflection of God who became visible in Jesus
                  Christ. The fundamental spirituality of Jesus is submission to the will of God. We
                  therefore:
               </strong>
               <ul className="list-disc ml-6 mt-2">
                  <li>
                     Listen intently for God’s direction and commit without excuse to pursue that
                     path
                  </li>
                  <li>
                     We pursue truth with grace, holiness with mercy, and justice with compassion.
                  </li>
                  <li>We strive to be authentic in our words, emotions, and actions.</li>
               </ul>
            </p>
         ),
      },
      {
         title: "Community",
         content: (
            <p>
               <strong>
                  Recognizing the triune God exists forever in community expressed in the church as
                  body and family, we live into that calling.
               </strong>
               <ul className="list-disc ml-6 mt-2">
                  <li>
                     We commit to listen, pray, speak, work, study, suffer, struggle, and do
                     theology together, not solely or in isolation.
                  </li>
                  <li>
                     Our communion is local and global. It includes the saints of the past, “that
                     great cloud of witnesses,” our partners, our teams, our students, and those
                     they serve
                  </li>
                  <li>We strive to be authentic in our words, emotions, and actions.</li>
               </ul>
            </p>
         ),
      },
   ];

   const toggleSection = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <section className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-start lg:space-x-6 p-6">
         {/* Left: Image */}
         <div className="lg:w-1/2">
            <img
               src="/about/al-9.jpg"
               alt="Core Values"
               className="rounded-lg shadow-md"
            />
         </div>

         {/* Right: Content */}
         <div className="lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Core Values</h2>
            <p className="text-gray-600 mb-6">
               We have five core institutional values to sustain our strategic plan and offer an
               essential context for the successful execution of AICU's mission.
            </p>

            {/* Dropdown Sections */}
            <div className="space-y-4">
               {values.map((value, index) => (
                  <div
                     key={index}
                     className="border-b"
                  >
                     <button
                        className="w-full flex justify-between items-center py-2 text-left text-blue-700 font-semibold"
                        onClick={() => toggleSection(index)}
                     >
                        {value.title}
                        <span>
                           {activeIndex === index ? (
                              <span>&#9650;</span> // Up arrow
                           ) : (
                              <span>&#9660;</span> // Down arrow
                           )}
                        </span>
                     </button>
                     <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                           activeIndex === index ? "max-h-screen" : "max-h-0"
                        }`}
                     >
                        <div className="p-4 bg-gray-100 text-gray-700">{value.content}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CoreValues;
