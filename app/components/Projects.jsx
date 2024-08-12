"use client";
import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState("Web Design");

  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className="font-bold sm:text-4xl mb-4">My Projects</h1>
      <p className=" w-96 sm:w-[700px]">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus
      </p>
      <p className="mb-4 w-96">lectus. Phasellus consequat urna tellus</p>
      <div className="flex gap-2  sm:gap-6 mb-6">
        <button
          className={`h-10 w-20 rounded-xl ${
            active === "All"
              ? "bg-[#ff6300] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => setActive("All")}
        >
          All
        </button>
        <button
          className={`h-10 w-20 rounded-xl ${
            active === "UI/UX"
              ? "bg-[#ff6300] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => setActive("UI/UX")}
        >
          UI/UX
        </button>
        <button
          className={`h-10 w-40 rounded-xl ${
            active === "Web Design"
              ? "bg-[#ff6300] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => setActive("Web Design")}
        >
          Web Design
        </button>
        <button
          className={`h-10 w-40 rounded-xl ${
            active === "App Design"
              ? "bg-[#ff6300] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => setActive("App Design")}
        >
          App Design
        </button>
        <button
          className={`h-10 w-40 rounded-xl ${
            active === "Graphic Design"
              ? "bg-[#ff6300] text-white"
              : "bg-[#f8f8f8] text-black"
          }`}
          onClick={() => setActive("Graphic Design")}
        >
          Graphic Design
        </button>
      </div>
      <div className=" mt-10">
        {active === "All" && <div className=" flex gap-6">
            <Image src="/webDesign.png" height={300} width={300}/>
            <Image src="/webDesign2.png" height={300} width={300}/>
            <Image src="/webDesign3.png" height={300} width={300}/>
            </div>}
        {active === "UI/UX" && <div className=" flex gap-6">
            <Image src="/webDesign.png" height={300} width={300}/>
            <Image src="/webDesign2.png" height={300} width={300}/>
            <Image src="/webDesign3.png" height={300} width={300}/>
            </div>}
        {active === "Web Design" && <div className=" flex gap-6">
            <Image src="/webDesign.png" height={300} width={300}/>
            <Image src="/webDesign2.png" height={300} width={300}/>
            <Image src="/webDesign3.png" height={300} width={300}/>
            </div>}
        {active === "App Design" && <div className=" flex gap-6">
            <Image src="/webDesign.png" height={300} width={300}/>
            <Image src="/webDesign2.png" height={300} width={300}/>
            <Image src="/webDesign3.png" height={300} width={300}/>
            </div>}
        {active === "Graphic Design" && <div className=" flex gap-6">
            <Image src="/webDesign.png" height={300} width={300}/>
            <Image src="/webDesign2.png" height={300} width={300}/>
            <Image src="/webDesign3.png" height={300} width={300}/>
            </div>}
      </div>
    </div>
  );
};

export default Projects;
