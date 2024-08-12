"use client";
import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [active, setActive] = useState("#item1");

  return (
    <>
      {active === "#item1" && (
        <div className=" flex h-72 sm:h-60 gap-6 rounded-md w-96 sm:w-[750px] bg-[#e6e6e6] p-6">
          <Image src="/dummy.png" height={100} width={100} alt="Description of item 1" />
          <div>
            <p className=" w-56 text-sm sm:text-md sm:w-[500px]">
              <span className="text-[#ff6300] text-3xl font-bold">&ldquo;</span> Lorem ipsum dolor sit amet consectetur. In enim cursus
              odio accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices. <span className=" text-[#ff6300] text-xl font-bold">,,</span>
            </p>
            <h1 className=" font-semibold mt-4">Name</h1>
            <h3>CEO</h3>
          </div>
        </div>
      )}
      {active === "#item2" && (
        <div className=" flex h-72 sm:h-60 gap-6 rounded-md w-96 sm:w-[750px] bg-[#e6e6e6] p-6">
          <Image src="/dummy.png" height={100} width={100} alt="Description of item 2" />
          <div>
            <p className=" w-56 text-sm sm:text-md sm:w-[500px]">
              <span className="text-[#ff6300] text-3xl font-bold">&ldquo;</span> Lorem ipsum dolor sit amet consectetur. In enim cursus
              odio accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices. <span className=" text-[#ff6300] font-bold text-xl">,,</span>
            </p>
            <h1 className=" font-semibold mt-4">Name</h1>
            <h3>CEO</h3>
          </div>
        </div>
      )}
      {active === "#item3" && (
        <div className=" flex h-72 sm:h-60 gap-6 rounded-md w-96 sm:w-[750px] bg-[#e6e6e6] p-6">
          <Image src="/dummy.png" height={100} width={100} alt="Description of item 3" />
          <div>
            <p className=" w-56 text-sm sm:text-md sm:w-[500px]">
              <span className="text-[#ff6300] text-3xl font-bold">&ldquo;</span> Lorem ipsum dolor sit amet consectetur. In enim cursus
              odio accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices. <span className=" text-[#ff6300] text-xl font-bold">,,</span>
            </p>
            <h1 className=" font-semibold mt-4">Name</h1>
            <h3>CEO</h3>
          </div>
        </div>
      )}
      {active === "#item4" && (
        <div className=" flex h-72 sm:h-60 gap-6 rounded-md w-96 sm:w-[750px] bg-[#e6e6e6] p-6">
          <Image src="/dummy.png" height={100} width={100} alt="Description of item 4" />
          <div>
            <p className=" w-56 text-sm sm:text-md sm:w-[500px]">
              <span className="text-[#ff6300] text-3xl font-bold">&ldquo;</span> Lorem ipsum dolor sit amet consectetur. In enim cursus
              odio accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices. <span className=" text-[#ff6300] text-xl font-bold">,,</span>
            </p>
            <h1 className=" font-semibold mt-4">Name</h1>
            <h3>CEO</h3>
          </div>
        </div>
      )}
      <div className="flex w-full justify-center gap-2 py-2 mt-6">
        <button
          onClick={() => setActive("#item1")}
          className={`btn btn-xs h-4 w-14 rounded-full ${
            active === "#item1" ? "bg-[#ff6300]" : "bg-[#e6e6e6]"
          }`}
        ></button>
        <button
          onClick={() => setActive("#item2")}
          className={`btn btn-xs h-4 w-14 rounded-full ${
            active === "#item2" ? "bg-[#ff6300]" : "bg-[#e6e6e6]"
          }`}
        ></button>
        <button
          onClick={() => setActive("#item3")}
          className={`btn btn-xs h-4 w-14 rounded-full ${
            active === "#item3" ? "bg-[#ff6300]" : "bg-[#e6e6e6]"
          }`}
        ></button>
        <button
          onClick={() => setActive("#item4")}
          className={`btn btn-xs h-4 w-14 rounded-full ${
            active === "#item4" ? "bg-[#ff6300]" : "bg-[#e6e6e6]"
          }`}
        ></button>
      </div>
    </>
  );
};

export default Carousel;
