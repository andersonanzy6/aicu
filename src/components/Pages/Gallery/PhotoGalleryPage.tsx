"use client";
import React from "react";
import HeaderPage from "@/components/Shared/HeaderPage";
import Link from "next/link";
import { Calendar, Image } from "lucide-react";

interface Album {
   year: number;
   title: string;
   description: string;
   image: string;
   eventType: string;
}

const PhotoGalleryPage = () => {
   const albums: Album[] = [
      {
         year: 2025,
         title: "Graduation Ceremony May 2025",
         description: "Celebrating the accomplishments of our graduates",
         image: "/photogallery/2024/photo-55%20(1).jpg",
         eventType: "Graduation",
      },
      {
         year: 2024,
         title: "Graduation Ceremony 2024",
         description: "Celebrating the accomplishments of our graduates",
         image: "/photogallery/2024/photo-55%20(2).jpg",
         eventType: "Graduation",
      },
      {
         year: 2023,
         title: "Graduation Ceremony 2023",
         description: "A memorable celebration of achievement",
         image: "/photogallery/2024/photo-55%20(3).jpg",
         eventType: "Graduation",
      },
      {
         year: 2022,
         title: "Graduation Ceremony 2022",
         description: "Honoring our class of 2022",
         image: "/photogallery/2024/photo-55%20(4).jpg",
         eventType: "Graduation",
      },
   ];

   return (
      <>
         <title>AICU | Photo Gallery</title>
         <HeaderPage
            text="Photo Gallery"
            image="/about/mission-eleven.jpg"
         />

         <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Introduction */}
            <div className="text-center mb-12">
               <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                  Browse our collection of photos capturing memorable moments from AICU events, 
                  ceremonies, and campus life.
               </p>
            </div>

            {/* Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {albums.map((album) => (
                  <Link
                     key={album.year}
                     href={`/graduation-photos/${album.year}`}
                  >
                     <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                        {/* Album Image */}
                        <div className="relative h-56 overflow-hidden bg-gray-200">
                           <img
                              src={album.image}
                              alt={album.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                           />
                           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                        </div>

                        {/* Album Info */}
                        <div className="p-6">
                           {/* Event Type Badge */}
                           <div className="mb-3">
                              <span className="inline-block bg-[#4169E1] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                 {album.eventType}
                              </span>
                           </div>

                           {/* Year */}
                           <div className="flex items-center text-gray-600 text-sm mb-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              {album.year}
                           </div>

                           {/* Title */}
                           <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#4169E1] transition-colors">
                              {album.title}
                           </h3>

                           {/* Description */}
                           <p className="text-gray-600 text-sm mb-4">
                              {album.description}
                           </p>

                           {/* View Button */}
                           <div className="flex items-center text-[#4169E1] font-semibold group-hover:translate-x-1 transition-transform">
                              <Image className="w-4 h-4 mr-2" />
                              View Album →
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

            {/* Featured Section */}
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
