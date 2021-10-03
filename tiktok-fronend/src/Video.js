import React, { useRef } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing
    // stop it...
    //otherwise if its not playing
    // play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ></video>
    </div>
  );
}

export default Video;
