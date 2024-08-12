import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" flex justify-center items-center mt-20 mb-20">
      <Image src="/person2.svg" height={400} width={400} alt="img" />
      <div className=" sm:ml-32">
        <h1 className=" font-bold text-sm sm:text-4xl mb-4 ">About Me</h1>
        <p className=" w-60 sm:w-[550px] mb-5">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div>
            <h1 className=" font-bold pb-2">UX</h1>
             <input type="range" className=" accent-[#ff6300]   sm:w-[450px] cursor-pointer  " defaultValue={90}/>
             <h1 className=" font-bold pt-2 pb-2">Website Design</h1>
             <input type="range" className="accent-[#ff6300]  sm:w-[450px] cursor-pointer" defaultValue={80}/>
             <h1 className=" font-bold pt-2 pb-2">App Design</h1>
             <input type="range" className=" accent-[#ff6300]  sm:w-[450px] cursor-pointer" defaultValue={85}/>
             <h1 className=" font-bold pt-2 pb-2">Graphic Design</h1>
             <input type="range" className=" accent-[#ff6300]  sm:w-[450px] cursor-pointer" defaultValue={78}/>
        </div>
      </div>
    </div>
  );
};

export default About;
