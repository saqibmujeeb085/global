import React from "react";

const VideoCard = () => {
  return (
    <video
      className="w min-w-full"
      controlsList="nodownload"
      disablePictureInPicture
      controls
    >
      <source
        src="assets/videos/16-scikit-learn-wtf-is-a-closure-BkkygOyaH.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoCard;
