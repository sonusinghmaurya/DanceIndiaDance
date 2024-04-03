import React from "react";
import image from "../asset/main_light.png"
const Logo = () => {
  return (
    <div className="image-logo">
      <img 
        src={image}
        alt="logo" 
      />  
    </div>
  );
};

export default Logo;
