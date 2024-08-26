"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const Today = () => {
  return (
    <div className="w-full flex items-center justify-center py-8">
      {" "}
      {/* Adjust py as needed */}
      <div className="relative w-full max-w-[600px]">
        {" "}
        {/* Fixed width */}
        <div className="relative aspect-w-16 aspect-h-4.5">
          {" "}
          {/* Custom Aspect Ratio */}
          <CldVideoPlayer
            className="absolute inset-0 rounded-md"
            src="video_2024-08-23_19-44-24_ryotaj"
          />
        </div>
      </div>
    </div>
  );
};

export default Today;
