import React from "react";
import "./App.css";
import Video from "./Video.js";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="nitish166"
          description="Yoo this work"
          song="99 problem but react aint one"
          likes={123}
          messages={456}
          shares={222}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="nitish166"
          description="Yoo this work"
          song="99 problem but react aint one"
          likes={123}
          messages={456}
          shares={222}
        />
      </div>
    </div>
  );
}

export default App;
