import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchImages() {
   const url = "https://runa.us/2024/06/13/graduation-2024/";

   try {
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);

      // Extract image sources
      const images = [];
      $("img.attachment-thumbnail").each((_, element) => {
         const src = $(element).attr("src");
         const alt = $(element).attr("alt") || ""; // Optional alt text
         if (src) {
            images.push({ src, alt });
         }
      });

      // Return images if found, otherwise return fallback
      if (images.length > 0) {
         return images;
      } else {
         return getFallbackImages();
      }
   } catch (error) {
      console.log("Error fetching images from URL:", error.message);
      // Return fallback images instead of throwing error
      return getFallbackImages();
   }
}

function getFallbackImages() {
   // Fallback mock images when external fetch fails - using actual graduation photos
   return [
      {
         src: "/photogallery/2024/photo-55%20(1).jpg",
         alt: "AICU Campus - Graduation 2024",
      },
      {
         src: "/photogallery/2024/photo-55%20(2).jpg",
         alt: "Graduation Ceremony Moments",
      },
      {
         src: "/photogallery/2024/photo-55%20(3).jpg",
         alt: "AICU Campus Life",
      },
      {
         src: "/photogallery/2024/photo-55%20(4).jpg",
         alt: "Student Celebrations",
      },
      {
         src: "/photogallery/2024/photo-55%20(5).jpg",
         alt: "Graduation Photos",
      },
      {
         src: "/photogallery/2024/photo-55%20(6).jpg",
         alt: "Campus Events",
      },
      {
         src: "/photogallery/2024/photo-55%20(7).jpg",
         alt: "Graduation Ceremony",
      },
      {
         src: "/photogallery/2024/photo-55%20(8).jpg",
         alt: "Class of 2024",
      },
   ];
}
