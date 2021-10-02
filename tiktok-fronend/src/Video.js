import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ></video>
    </div>
  );
}

export default Video;
