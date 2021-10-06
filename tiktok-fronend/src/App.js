import React, { useState } from "react";
import "./App.css";
import Demo from "./demo";
// import Video from "./Video.js";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="app__videos">
        {/* <Video />
        <Video /> */}
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {[...Array(count)].map((_, i) => (
          <Demo key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
