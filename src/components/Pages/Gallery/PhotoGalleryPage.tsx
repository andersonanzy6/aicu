"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";
import { Image as ImageIcon } from "lucide-react";
import LightboxGallery from "@/components/Pages/Gallery/LightboxGallery";
import YouTubeEmbed from "@/components/Pages/Gallery/YouTubeEmbed";

const PhotoGalleryPage = () => {
   const galleryImages = [
      { src: "/new/media.png", alt: "AICU Media 1", title: "Campus Moments" },
      { src: "/new/media1.png", alt: "AICU Media 2", title: "Student Life" },
      { src: "/new/media2.png", alt: "AICU Media 3", title: "Academic Excellence" },
      { src: "/new/media3.png", alt: "AICU Media 4", title: "Ceremony Highlights" },
      { src: "/new/media4.png", alt: "AICU Media 5", title: "Graduation 2024" },
      { src: "/new/media5.png", alt: "AICU Media 6", title: "Campus View" },
      { src: "/new/media6.png", alt: "AICU Media 7", title: "Student Activities" },
      { src: "/new/media7.png", alt: "AICU Media 8", title: "AICU Events" },
      { src: "/new/media8.png", alt: "AICU Media 9", title: "Community Moments" },
      { src: "/new/media9.png", alt: "AICU Media 10", title: "AICU Leadership" },
      { src: "/new/media10.png", alt: "AICU Media 11", title: "Celebration" },
      { src: "/new/media11.png", alt: "AICU Media 12", title: "Academic Support" },
      { src: "/new/media12.png", alt: "AICU Media 13", title: "Student Success" },
      { src: "/new/media13.png", alt: "AICU Media 13", title: "Student Success" },
      { src: "/new/media14.png", alt: "AICU Media 13", title: "Student Success" },
      { src: "/new/media15.png", alt: "AICU Media 13", title: "Student Success" },
   ];

   const youtubeVideos = [
      { id: "RQGkgVgHkug", title: "Graduation Ceremony Highlights" },
      { id: "488Z_rVQDZc", title: "AICU Campus Life" },
      { id: "WfG5c3MAicc", title: "Student Testimonials & Excellence" },
   ];

   return (
      <>
         <title>AICU | Photo & Video Gallery</title>
         <HeaderPage
            text="Photo & Video Gallery"
            image="/about/mission-eleven.jpg"
         />

         <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Introduction */}
            <div className="text-center mb-16">
               <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                  Explore our vibrant campus life through our curated collection of photos and videos.
                  Capturing the spirit, excellence, and memorable moments at AICU.
               </p>
            </div>

            {/* Photo Gallery Section */}
            <div className="mb-24">
               <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                     <ImageIcon className="mr-3 text-[#4169E1]" />
                     Photo Highlights
                  </h2>
                  <div className="h-1 flex-1 bg-gray-100 ml-6 hidden md:block"></div>
               </div>

               <LightboxGallery images={galleryImages} />
            </div>

            {/* Video Highlights Section */}
            <div className="mb-24">
               <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-bold text-gray-800">Video Highlights</h2>
                  <div className="h-1 flex-1 bg-gray-100 ml-6 hidden md:block"></div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {youtubeVideos.map((video) => (
                     <div key={video.id} className="space-y-4">
                        <YouTubeEmbed videoId={video.id} title={video.title} height="250" />
                        <h3 className="text-lg font-bold text-gray-800 px-2">{video.title}</h3>
                     </div>
                  ))}
               </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#4169E1] to-indigo-600 text-white rounded-lg p-12 text-center">
               <h2 className="text-3xl font-bold mb-4">Share Your Memories</h2>
               <p className="mb-6 text-lg max-w-2xl mx-auto">
                  Have photos from AICU events? We'd love to feature your submissions in our gallery!
               </p>
               <a
                  href="mailto:photos@aicu.edu"
                  className="inline-block bg-white text-[#4169E1] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
               >
                  Submit Your Photos
               </a>
            </div>
         </div>
      </>
   );
};

export default PhotoGalleryPage;
