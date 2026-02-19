"use client";
import React, { useState, useCallback } from "react";
import { X } from "lucide-react";

interface GalleryImage {
   src: string;
   alt: string;
   title?: string;
   category?: string;
}

interface GalleryProps {
   images: GalleryImage[];
   title?: string;
}

const LightboxGallery: React.FC<GalleryProps> = ({ images, title }) => {
   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
   const [currentIndex, setCurrentIndex] = useState(0);

   const openLightbox = (image: GalleryImage, index: number) => {
      setSelectedImage(image);
      setCurrentIndex(index);
   };

   const closeLightbox = () => {
      setSelectedImage(null);
   };

   const goToNext = useCallback(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
   }, [currentIndex, images]);

   const goToPrevious = useCallback(() => {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
   }, [currentIndex, images]);

   // Keyboard navigation
   React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (!selectedImage) return;
         if (e.key === "ArrowRight") goToNext();
         if (e.key === "ArrowLeft") goToPrevious();
         if (e.key === "Escape") closeLightbox();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [selectedImage, goToNext, goToPrevious]);

   return (
      <div>
         {title && <h2 className="text-2xl font-bold mb-8">{title}</h2>}

         {/* Gallery Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
               <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(image, index)}
               >
                  <img
                     src={image.src}
                     alt={image.alt}
                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                     <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold">
                        View
                     </span>
                  </div>
                  {image.title && (
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <p className="text-white text-sm font-semibold">{image.title}</p>
                     </div>
                  )}
               </div>
            ))}
         </div>

         {/* Lightbox Modal */}
         {selectedImage && (
            <div
               className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
               onClick={closeLightbox}
            >
               <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  {/* Close Button */}
                  <button
                     onClick={closeLightbox}
                     className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                  >
                     <X size={32} />
                  </button>

                  {/* Image */}
                  <div className="max-w-4xl max-h-[90vh] flex items-center justify-center">
                     <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-full object-contain"
                     />
                  </div>

                  {/* Navigation Buttons */}
                  <button
                     onClick={goToPrevious}
                     className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all"
                  >
                     ❮
                  </button>

                  <button
                     onClick={goToNext}
                     className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all"
                  >
                     ❯
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                     {currentIndex + 1} / {images.length}
                  </div>

                  {/* Image Title */}
                  {selectedImage.title && (
                     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white text-center">
                        <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default LightboxGallery;
