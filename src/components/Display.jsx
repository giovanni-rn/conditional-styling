import React, { useState } from "react";

const Display = () => {
  const [display, setDisplay] = useState("block");
  return (
    <div>
      <h2 style={{ display: display }}>SALUT</h2>
      <button
        onClick={() => setDisplay(display === "block" ? "none" : "block")}
      >
        show/hide
      </button>
    </div>
  );
};

export default Display;
