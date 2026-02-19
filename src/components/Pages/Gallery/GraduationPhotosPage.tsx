"use client";
import React, { useState } from "react";
import HeaderPage from "@/components/Shared/HeaderPage";
import LightboxGallery from "@/components/Pages/Gallery/LightboxGallery";
import YouTubeEmbed from "@/components/Pages/Gallery/YouTubeEmbed";
import LightroomEmbed from "@/components/Pages/Gallery/LightroomEmbed";
import MissionSection from "@/components/Pages/Gallery/MissionSection";
import { Calendar } from "lucide-react";

interface GraduationPhotosProps {
   year: string;
   images: Array<{ src: string; alt: string }>;
}

const GraduationPhotosPage: React.FC<GraduationPhotosProps> = ({ year, images }) => {
   const [activeTab, setActiveTab] = useState<"photos" | "videos" | "lightroom">("photos");

   // Format images for LightboxGallery
   const formattedImages = images.map((img, index) => ({
      ...img,
      title: `Graduation ${year} - Photo ${index + 1}`,
      category: "Graduation",
   }));

   // Lightroom gallery URLs by year
   const lightroomUrls: { [key: string]: string } = {
      "2025": "https://lightroom.adobe.com/shares/7a95e322b82a4f3ca06ee892114b4fb2",
      "2024": "https://lightroom.adobe.com/shares/7a95e322b82a4f3ca06ee892114b4fb2",
      "2023": "https://lightroom.adobe.com/shares/7a95e322b82a4f3ca06ee892114b4fb2",
      "2022": "https://lightroom.adobe.com/shares/7a95e322b82a4f3ca06ee892114b4fb2",
   };

   const lightroomUrl = lightroomUrls[year] || "https://lightroom.adobe.com/shares/7a95e322b82a4f3ca06ee892114b4fb2";
   const graduationVideos = year === "2025" ? [
      {
         id: "RQGkgVgHkug",
         title: "May 2025 Graduation Ceremony",
      },
   ] : year === "2024" ? [
      {
         id: "488Z_rVQDZc",
         title: "2024 AICU Graduation Ceremony",
      },
      {
         id: "WfG5c3MAicc",
         title: "2024 AICU Graduation - Extended Coverage",
      },
   ] : year === "2023" ? [
      {
         id: "488Z_rVQDZc",
         title: "2023 AICU Graduation Ceremony",
      },
      {
         id: "WfG5c3MAicc",
         title: "2023 AICU Graduation - Extended Coverage",
      },
   ] : year === "2022" ? [
      {
         id: "WfG5c3MAicc",
         title: "2022 AICU Graduation Ceremony",
      },
   ] : [
      {
         id: "RQGkgVgHkug",
         title: "Graduation Ceremony Highlights",
      },
      {
         id: "488Z_rVQDZc",
         title: "AICU Graduation Moments",
      },
      {
         id: "WfG5c3MAicc",
         title: "Extended Ceremony Coverage",
      },
   ];

   return (
      <>
         <title>AICU | Graduation Photos {year}</title>
         <HeaderPage
            text={`Graduation ${year}`}
            image="/about/mission-eleven.jpg"
         />

         <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Header */}
            <div className="mb-12">
               <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-lg">Class of {year}</span>
               </div>
               <p className="text-gray-700 text-lg max-w-2xl">
                  Celebrating the accomplishments and cherished moments from the graduation ceremony. 
                  Browse through photos, watch highlights, or visit our Lightroom gallery for more.
               </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-12 border-b-2 border-gray-200">
               <button
                  onClick={() => setActiveTab("photos")}
                  className={`py-3 px-6 font-semibold transition-colors ${
                     activeTab === "photos"
                        ? "text-[#4169E1] border-b-4 border-[#4169E1]"
                        : "text-gray-600 hover:text-gray-800"
                  }`}
               >
                  📸 Photos ({images.length})
               </button>
               <button
                  onClick={() => setActiveTab("videos")}
                  className={`py-3 px-6 font-semibold transition-colors ${
                     activeTab === "videos"
                        ? "text-[#4169E1] border-b-4 border-[#4169E1]"
                        : "text-gray-600 hover:text-gray-800"
                  }`}
               >
                  🎥 Video Highlights
               </button>
               <button
                  onClick={() => setActiveTab("lightroom")}
                  className={`py-3 px-6 font-semibold transition-colors ${
                     activeTab === "lightroom"
                        ? "text-[#4169E1] border-b-4 border-[#4169E1]"
                        : "text-gray-600 hover:text-gray-800"
                  }`}
               >
                  🖼️ Lightroom Gallery
               </button>
            </div>

            {/* Photos Tab */}
            {activeTab === "photos" && (
               <div className="mb-16">
                  {images.length > 0 ? (
                     <LightboxGallery
                        images={formattedImages}
                        title="Graduation Photos"
                     />
                  ) : (
                     <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-lg">No photos available for this year.</p>
                     </div>
                  )}
               </div>
            )}

            {/* Videos Tab */}
            {activeTab === "videos" && (
               <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Graduation Highlights & Ceremonies</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {graduationVideos.map((video) => (
                        <div key={video.id}>
                           <h3 className="text-lg font-semibold mb-4 text-gray-800">
                              {video.title}
                           </h3>
                           <YouTubeEmbed videoId={video.id} title={video.title} />
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* Lightroom Tab */}
            {activeTab === "lightroom" && (
               <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Professional Gallery on Lightroom</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <LightroomEmbed
                        albumUrl={lightroomUrl}
                        title={`Graduation ${year} - Full Gallery`}
                     />
                     <div className="bg-blue-50 rounded-lg p-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                           📖 How to Access Lightroom Galleries
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                           <li>
                              <strong>1.</strong> Visit our Lightroom gallery using the link on the left
                           </li>
                           <li>
                              <strong>2.</strong> Browse full-resolution photos with professional editing
                           </li>
                           <li>
                              <strong>3.</strong> Download your favorite photos if sharing is enabled
                           </li>
                           <li>
                              <strong>4.</strong> Leave comments and interact with other alumni
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            )}

            {/* Download Section */}
            <div className="bg-gradient-to-r from-[#4169E1] to-indigo-600 text-white rounded-lg p-12 text-center">
               <h2 className="text-3xl font-bold mb-4">Download Your Photos</h2>
               <p className="mb-6 text-lg">
                  Want high-resolution versions of your photos? Visit our Lightroom gallery where you 
                  can download your favorite memories.
               </p>
               <a
                  href={lightroomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#4169E1] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
               >
                  Download Photos on Lightroom →
               </a>
            </div>

            {/* Mission Section */}
            <MissionSection />

            {/* YouTube Channel Section */}
            <div className="mt-16 bg-red-50 border-2 border-red-500 rounded-lg p-12 text-center">
               <h2 className="text-3xl font-bold text-red-700 mb-4">🎥 Subscribe to Our YouTube Channel</h2>
               <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
                  For more graduation ceremonies, campus events, and exclusive content, subscribe to our official YouTube channel!
               </p>
               <a
                  href="https://youtube.com/@aicuglobalcampusreignition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300"
               >
                  Visit AICU Global Campus Reignition Channel →
               </a>
               <p className="text-gray-600 text-sm mt-4">
                  Watch graduation ceremonies, campus tours, student testimonials, and more!
               </p>
            </div>
         </div>
      </>
   );
};

export default GraduationPhotosPage;
