/**
 * GALLERY COMPONENTS USAGE GUIDE
 * ==============================
 * 
 * This guide explains how to use the gallery components created for AICU website.
 */

// ==========================================
// 1. LIGHTBOX GALLERY COMPONENT
// ==========================================
/**
 * Displays images in an interactive gallery with:
 * - Responsive grid layout
 * - Click-to-enlarge lightbox modal
 * - Keyboard navigation (Arrow keys, ESC)
 * - Smooth transitions and hover effects
 * 
 * Location: /src/components/Pages/Gallery/LightboxGallery.tsx
 * 
 * Usage Example:
 * 
 * import LightboxGallery from "@/components/Pages/Gallery/LightboxGallery";
 * 
 * const images = [
 *   {
 *     src: "/path/to/image1.jpg",
 *     alt: "Description",
 *     title: "Image Title",
 *     category: "Graduation"
 *   },
 *   {
 *     src: "/path/to/image2.jpg",
 *     alt: "Description",
 *     title: "Another Image"
 *   }
 * ];
 * 
 * export default function MyGallery() {
 *   return <LightboxGallery images={images} title="My Gallery" />;
 * }
 * 
 * Props:
 * - images: Array of image objects (required)
 *   - src: string - Image URL (required)
 *   - alt: string - Alt text (required)
 *   - title?: string - Optional title shown in lightbox
 *   - category?: string - Optional category label
 * - title?: string - Gallery title displayed above grid
 */

// ==========================================
// 2. YOUTUBE EMBED COMPONENT
// ==========================================
/**
 * Embeds YouTube videos with responsive sizing and full controls
 * 
 * Location: /src/components/Pages/Gallery/YouTubeEmbed.tsx
 * 
 * Usage Example:
 * 
 * import YouTubeEmbed from "@/components/Pages/Gallery/YouTubeEmbed";
 * 
 * export default function VideoPage() {
 *   return (
 *     <>
 *       <h1>Graduation Highlights</h1>
 *       <YouTubeEmbed 
 *         videoId="dQw4w9WgXcQ" 
 *         title="Graduation 2024"
 *       />
 *     </>
 *   );
 * }
 * 
 * Props:
 * - videoId: string - YouTube video ID (required)
 *   HOW TO GET VIDEO ID:
 *   - Full URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *   - Short URL: https://youtu.be/dQw4w9WgXcQ
 *   - Video ID: dQw4w9WgXcQ (extract the ID portion)
 * 
 * - title?: string - Video title for accessibility (default: "YouTube Video")
 * - width?: string - Container width (default: "100%")
 * - height?: string - Container height (default: "450")
 * - className?: string - Additional CSS classes
 * 
 * UPLOADING TO YOUTUBE:
 * 1. Sign in to YouTube
 * 2. Click the camera icon → Upload video
 * 3. Select file or drag & drop
 * 4. Add title, description, and visibility settings
 * 5. Publish
 * 6. Copy the video URL and extract the video ID
 */

// ==========================================
// 3. LIGHTROOM EMBED COMPONENT
// ==========================================
/**
 * Links to and displays information about Lightroom galleries
 * 
 * Location: /src/components/Pages/Gallery/LightroomEmbed.tsx
 * 
 * Usage Example:
 * 
 * import LightroomEmbed from "@/components/Pages/Gallery/LightroomEmbed";
 * 
 * export default function GalleryPage() {
 *   return (
 *     <LightroomEmbed 
 *       albumUrl="https://adobe.ly/YOUR_GALLERY_ID" 
 *       title="Graduation 2024 Photos"
 *     />
 *   );
 * }
 * 
 * Props:
 * - albumUrl: string - Lightroom share URL (required)
 * - title?: string - Display title
 * - className?: string - Additional CSS classes
 * 
 * HOW TO SET UP LIGHTROOM GALLERY:
 * 1. Go to lightroom.adobe.com
 * 2. Log in with Adobe account
 * 3. Create a new gallery or select existing one
 * 4. Add photos from your computer or Lightroom library:
 *    - Drag & drop photos
 *    - Click "Add photos" button
 *    - Use "Upload" if gallery is new
 * 5. Organize photos:
 *    - Add titles and captions
 *    - Create albums or collections
 *    - Arrange in desired order
 * 6. Click "Share" button
 * 7. Configure sharing:
 *    - Allow downloads (optional)
 *    - Allow comments (optional)
 *    - Set password (optional)
 * 8. Copy the share link (typically https://adobe.ly/[ID])
 * 9. Use this link in the albumUrl prop
 * 
 * FEATURES OF LIGHTROOM GALLERIES:
 * ✓ Professional image organization
 * ✓ Full-resolution downloads (if enabled)
 * ✓ Client commenting/feedback
 * ✓ Customizable appearance
 * ✓ Mobile-responsive
 * ✓ Fast loading (Lightroom CDN)
 * ✓ Analytics tracking
 * ✓ Password protection available
 * 
 * PRICING:
 * - Lightroom Web is available with Creative Cloud subscriptions
 * - Free account with limited features
 * - Premium features with subscription
 */

// ==========================================
// 4. IMPLEMENTATION EXAMPLES
// ==========================================

// EXAMPLE 1: Simple Photo Gallery Page
/*
"use client";
import LightboxGallery from "@/components/Pages/Gallery/LightboxGallery";

export default function CampusPhotos() {
  const campusImages = [
    { src: "/campus/building1.jpg", alt: "Main building", title: "Administration Building" },
    { src: "/campus/library.jpg", alt: "Library", title: "Main Library" },
    { src: "/campus/quad.jpg", alt: "Quad", title: "Campus Quad" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Campus Photos</h1>
      <LightboxGallery images={campusImages} />
    </div>
  );
}
*/

// EXAMPLE 2: Multi-Media Event Page
/*
"use client";
import LightboxGallery from "@/components/Pages/Gallery/LightboxGallery";
import YouTubeEmbed from "@/components/Pages/Gallery/YouTubeEmbed";
import LightroomEmbed from "@/components/Pages/Gallery/LightroomEmbed";
import { useState } from "react";

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("photos");

  const eventPhotos = [
    // ... photo array
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab("photos")}
          className={activeTab === "photos" ? "font-bold" : ""}
        >
          Photos
        </button>
        <button 
          onClick={() => setActiveTab("videos")}
          className={activeTab === "videos" ? "font-bold" : ""}
        >
          Videos
        </button>
        <button 
          onClick={() => setActiveTab("lightroom")}
          className={activeTab === "lightroom" ? "font-bold" : ""}
        >
          Lightroom
        </button>
      </div>

      {activeTab === "photos" && <LightboxGallery images={eventPhotos} />}
      
      {activeTab === "videos" && (
        <div>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Event Highlights" />
        </div>
      )}
      
      {activeTab === "lightroom" && (
        <LightroomEmbed albumUrl="https://adobe.ly/EVENT_ID" />
      )}
    </div>
  );
}
*/

// EXAMPLE 3: Adding to Image Array from Different Sources
/*
// From static array
const staticImages = [
  { src: "/public/image1.jpg", alt: "Photo 1" },
];

// From API/Database
const fetchedImages = await fetch('/api/gallery').then(r => r.json());

// From file uploads
const uploadedImages = formData.getAll('photos').map(file => ({
  src: URL.createObjectURL(file),
  alt: file.name,
}));

// Combined
const allImages = [...staticImages, ...fetchedImages, ...uploadedImages];
*/

// ==========================================
// 5. STYLING & CUSTOMIZATION
// ==========================================
/**
 * The components use Tailwind CSS and support custom className props.
 * 
 * Customize LightboxGallery:
 * - Grid columns: Adjust grid-cols-{1,2,3,4} in component
 * - Image height: Modify h-{48} for thumbnail size
 * - Gap spacing: Change gap-{4,6,8} for grid spacing
 * 
 * Customize YouTubeEmbed:
 * - Size: Pass width and height props
 * - Container styling: Pass className prop
 * 
 * Customize LightroomEmbed:
 * - Colors: Modify the gradient and button colors
 * - Padding: Adjust p-{6,8,12} values
 */

// ==========================================
// 6. BEST PRACTICES
// ==========================================
/**
 * ✓ Use descriptive alt text for accessibility
 * ✓ Optimize image sizes before uploading (max 2-3MB per image)
 * ✓ Use consistent image dimensions for better grid layout
 * ✓ Add titles and categories for better UX
 * ✓ Test lightroom links are working and publicly accessible
 * ✓ Verify YouTube videos are public or unlisted (not private)
 * ✓ Use WebP format for better performance
 * ✓ Lazy load images for faster page load
 * ✓ Provide fallback for slow connections
 * ✓ Test on mobile devices for responsiveness
 */

// ==========================================
// 7. TROUBLESHOOTING
// ==========================================
/**
 * Lightroom link not working:
 * - Ensure gallery has "Share" enabled
 * - Check URL is correct (adobe.ly link)
 * - Verify gallery isn't password protected without sharing link
 * 
 * YouTube video not displaying:
 * - Verify video ID is correct
 * - Check video is not private
 * - Ensure video still exists (not deleted)
 * 
 * Images not loading:
 * - Check image URLs are correct
 * - Verify images exist in /public directory
 * - Check CORS settings if using external images
 * - Ensure alt text is descriptive
 * 
 * Lightbox not opening:
 * - Check browser console for JavaScript errors
 * - Verify click handler is working
 * - Check CSS for display:none hiding modal
 */

export {};
