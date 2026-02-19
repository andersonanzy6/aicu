import React from "react";

interface LightroomEmbedProps {
   albumUrl: string;
   title?: string;
   className?: string;
}

/**
 * LightroomEmbed Component
 * 
 * To use Lightroom galleries with this component:
 * 
 * 1. Go to Adobe Lightroom (lightroom.adobe.com)
 * 2. Create or select a gallery
 * 3. Click "Share" button
 * 4. Copy the share link (e.g., https://adobe.ly/[random-id])
 * 5. Use the link as the albumUrl prop
 * 
 * Example usage:
 * <LightroomEmbed albumUrl="https://adobe.ly/YOUR_GALLERY_ID" title="Campus Gallery" />
 * 
 * The embed will show as a link that opens the gallery in a new window.
 * For full embedded galleries, you may need to use Lightroom's Web Gallery embed codes.
 */

const LightroomEmbed: React.FC<LightroomEmbedProps> = ({
   albumUrl,
   title = "View Gallery on Lightroom",
   className = "",
}) => {
   return (
      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#4169E1] rounded-lg p-8 text-center ${className}`}>
         <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
         </h3>
         <p className="text-gray-600 mb-6">
            This gallery is hosted on Adobe Lightroom. Click below to view the full collection with professional editing and organization.
         </p>
         <a
            href={albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4169E1] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
         >
            View Gallery on Lightroom →
         </a>
         <p className="text-xs text-gray-500 mt-4">
            Opens in a new window
         </p>
      </div>
   );
};

export default LightroomEmbed;
