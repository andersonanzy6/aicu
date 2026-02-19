"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";

const PrivacyPolicy = () => {
   return (
      <>
         <title>AICU | Privacy Policy</title>
         <HeaderPage
            text="Privacy Policy"
            image="/about/about-bg.jpg"
         />
         
         <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="prose prose-lg max-w-none">
               <p className="text-gray-600 mb-6">
                  <strong>Last Updated: February 18, 2026</strong>
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
               <p className="text-gray-700 mb-4">
                  American International Christian University (AICU) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
               <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways, including:</p>
               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
                  <li><strong>Application Information:</strong> Details submitted through admission applications</li>
                  <li><strong>Automatic Information:</strong> Browser type, IP address, pages visited, etc.</li>
                  <li><strong>Cookies:</strong> Small files stored on your device for functionality and analytics</li>
               </ul>

               <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
               <p className="text-gray-700 mb-4">We use the information we collect for various purposes:</p>
               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                  <li>Processing applications and admissions decisions</li>
                  <li>Providing customer service and responding to inquiries</li>
                  <li>Sending educational materials and updates</li>
                  <li>Improving website functionality and user experience</li>
                  <li>Conducting research and analytics</li>
                  <li>Complying with legal obligations</li>
               </ul>

               <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
               <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Disclosure</h2>
               <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personally identifiable information to third parties 
                  without your consent, except as required by law.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies and Tracking</h2>
               <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar tracking technologies to enhance your experience and gather 
                  usage information. You can control cookie settings in your browser.
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
               <p className="text-gray-700 mb-4">You have the right to:</p>
               <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
               </ul>

               <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
               <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
               </p>
               <p className="text-gray-700 mb-2">
                  <strong>AICU Privacy Office</strong><br/>
                  Email: <a href="mailto:privacy@aicu.edu" className="text-[#4169E1] hover:underline">privacy@aicu.edu</a><br/>
                  Phone: +1 (234) 567-890
               </p>

               <h2 className="text-2xl font-bold mt-8 mb-4">9. Policy Changes</h2>
               <p className="text-gray-700 mb-4">
                  We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately 
                  upon posting to the website. Your continued use of the website constitutes your acceptance of any changes.
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

export default PrivacyPolicy;
