import React from "react";

export const renderTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      Rendered at: <br />
      <span className="render-time">{currentTime}</span>
    </>
  );
};
