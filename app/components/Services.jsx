import Image from "next/image";
import React from "react";

const Services = () => {
    
  return (
    <div className=" flex  flex-col items-center mb-20 ">
      <h1 className=" font-bold sm:text-4xl pb-6">Services</h1>
      <p className=" text-sm sm:text-lg">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
      </p>
      <p className="text-sm  sm:text-lg">netus in. Aliquet donec morbi convallis pretium</p>

      <div>
    <Image src="/icon.svg" height={1000} width={1000} className=" pt-10 cursor-pointer"/> 
      </div>
    </div>
  );
};

export default Services;
