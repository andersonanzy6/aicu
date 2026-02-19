"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

const TermsOfService = () => {
   return (
      <>
         <title>AICU | Terms of Service</title>
         <HeaderPage
            text="Terms of Service"
            image="/about/about-bg.jpg"
         />
         
         <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="prose prose-lg max-w-none">
               <p className="text-gray-600 mb-6">
                  <strong>Last Updated: February 18, 2026</strong>
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
               <p className="text-gray-700 mb-4">
                  By accessing and using the American International Christian University (AICU) website, you accept 
                  and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
               <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on the AICU website for personal, non-commercial transitory viewing only. This is the grant of a 
                  license, not a transfer of title, and under this license you may not:
               </p>
               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
               </ul>

               <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
               <p className="text-gray-700 mb-4">
                  The materials on AICU's website are provided on an 'as is' basis. AICU makes no warranties, expressed 
                  or implied, and hereby disclaims and negates all other warranties including, without limitation, implied 
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
               <p className="text-gray-700 mb-4">
                  In no event shall AICU or its suppliers be liable for any damages (including, without limitation, damages 
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                  the materials on AICU's website.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">5. Accuracy of Materials</h2>
               <p className="text-gray-700 mb-4">
                  The materials appearing on AICU's website could include technical, typographical, or photographic errors. 
                  AICU does not warrant that any of the materials on the website are accurate, complete, or current. AICU 
                  may make changes to the materials contained on its website at any time without notice.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">6. Links</h2>
               <p className="text-gray-700 mb-4">
                  AICU has not reviewed all of the sites linked to its website and is not responsible for the contents of 
                  any such linked site. The inclusion of any link does not imply endorsement by AICU of the site. Use of any 
                  such linked website is at the user's own risk.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications</h2>
               <p className="text-gray-700 mb-4">
                  AICU may revise these terms of service for the website at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
               <p className="text-gray-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction 
                  in which AICU is located, and you irrevocably submit to the exclusive jurisdiction of the courts located 
                  in that state or location.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">9. User Content</h2>
               <p className="text-gray-700 mb-4">
                  Any information, data, or materials submitted by users to the AICU website are non-confidential unless 
                  otherwise specified. AICU has the right to use, copy, distribute, and disclose any such user-submitted 
                  content for any purpose.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
               <p className="text-gray-700 mb-4">
                  If you have questions about these Terms of Service, please contact us at:
               </p>
               <p className="text-gray-700 mb-2">
                  <strong>AICU Administration</strong><br/>
                  Email: <a href="mailto:admin@aicu.edu" className="text-[#4169E1] hover:underline">admin@aicu.edu</a><br/>
                  Phone: +1 (234) 567-890
               </p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
               <a
                  href="/"
                  className="text-[#4169E1] hover:underline font-semibold"
               >
                  ← Back to Home
               </a>
            </div>
         </div>
      </>
   );
};

export default TermsOfService;
