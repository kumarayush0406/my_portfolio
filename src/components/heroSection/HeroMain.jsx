import React from "react";
import HeroText from "./heroText";
import HeroPic from "./heropic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
        <div className="flex md:flex-row sm:flex-col px-4 max-w-[1200px] mx-auto justify-between items-center relative">
        <HeroText></HeroText>
        <HeroPic></HeroPic>
       
    </div></div> 
  )
};

export default HeroMain;
