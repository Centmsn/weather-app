import React from "react";

const AnimatedBg = ({ bg }) => {
  return (
    <div className="animatedBg">
      <video src={bg} autoPlay muted loop>
        There was a problem playing this video.
      </video>
    </div>
  );
};

export default AnimatedBg;
