import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("lime");
  return (
    <div>
      <h1>STYLE</h1>
      <div className="display" style={{ backgroundColor: color }}>
        <button onClick={() => setColor(color === "lime" ? "red" : "lime")}>
          CHANGE COLOR
        </button>
      </div>
    </div>
  );
};

// condition ? true : false;

export default Home;
