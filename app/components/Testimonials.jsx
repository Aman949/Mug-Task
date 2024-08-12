import React from "react";

import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" font-bold sm:text-4xl pb-4">Testimonials</h1>
      <p className=" w-96 sm:w-[700px]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus 
      </p>
      <p className=" pb-4">netus in. Aliquet donec morbi convallis pretium</p>
      <Carousel/>
    </div>
  );
};

export default Testimonials;
