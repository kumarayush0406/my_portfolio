import React from "react";

const HeroText = () =>{
    return(
        <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-centre">
            <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">Frontend web developer</h2>
            <h1 className="md:text-[2.8rem] lg:text-4xl font-bold font-special text-orange">AYUSH KUMAR</h1>
            <p className="text-lg mt-4 text-white">Dynamic Frontend developer equipped with a passion <br /> for creating hight performamce and leveraging skills <br /> in reusable component devlopment. </p>
        </div>
    )
}

export default  HeroText;