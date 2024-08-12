import React from "react";

const Contact = () => {
  return (
    <div className=" flex justify-center items-center flex-col mt-12 mb-16 ">
      <h1 className="text-5xl font-bold">Lets Design Together</h1>
      <p className=" pt-6">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
      </p>
      <p> lectus netus in. Aliquet donec morbi convallis pretium</p>
      <div className="mt-16">
        <input type="email" placeholder="Enter Your Email" className=" border border-b-4 rounded-lg h-12 w-[400px] pl-4 bg-[#F8F8F8]" />
        <button className=" ml-16  bg-[#ff6300] h-12 w-40 rounded-lg text-white font-medium" >Contact Me</button>
      </div>
    </div>
  );
};

export default Contact;
