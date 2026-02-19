import React from "react";

interface YouTubeEmbedProps {
   videoId: string;
   title?: string;
   width?: string;
   height?: string;
   className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
   videoId,
   title = "YouTube Video",
   width = "100%",
   height = "450",
   className = "",
}) => {
   return (
      <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
         <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
         ></iframe>
      </div>
   );
};

export default YouTubeEmbed;
