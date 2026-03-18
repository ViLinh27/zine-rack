import React from "react";
import './HeroBanner.css';
function IconHolder({ icon, text }) {
  return (
    <div className="icon-holder">
      <img src={icon.src} alt={icon.alt} className="heroBannerImg"/>
      <h1 className="icon-holder_text">{text}</h1>
    </div>
  );
}

export default IconHolder;
