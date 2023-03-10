import React from "react";
import "../App.css";

const VideoBackground = () => {
  return (
    <video autoPlay loop muted>
      <source src="../videos/ai.mp4" type="video/mp4" />
      <source src="../videos/ai.mp4" type="video/webm" />
      <source src="../videos/ai.mp4" type="video/ogg" />
      {/* Fallback for browsers that don't support HTML5 video */}
      <img src="../images/ai.png" alt="video background" />
    </video>
  );
};

export default VideoBackground;
