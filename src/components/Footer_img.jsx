import React from "react";
import footerImg from "../assets/footer.png";

const Footer_img = () => {
  return (
    <div className="w-full relative overflow-hidden">
        <div className="absolute  inset-0 bg-linear-to-t from-black/80 to-transparent blur-md"></div>
      <img className="w-full h-[200px] md:h-100 object-cover" src={footerImg} alt="Footer graphic showing creative tools" />
    </div>
  );
};

export default Footer_img;
