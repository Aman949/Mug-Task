import Image from "next/image";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";

export default function Home() {
  const Socials = [
    { path: "", icon: "/socialsLogo/Facebook - Negative.svg" },
    { path: "", icon: "/socialsLogo/Instagram - Negative.svg" },
    { path: "", icon: "/socialsLogo/LinkedIn - Negative.svg" },
    { path: "", icon: "/socialsLogo/Twitter - Negative.svg" },
  ];

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center" id="home">
        <div className="pl-10 sm:p-20">
          <div className="">
            <h3 className="text-black font-semibold sm:text-2xl">Hi I am</h3>
            <h2 className="text-[#ff6300] font-medium sm:text-3xl">Muhammad Umair</h2>
            <h1 className="text-black font-bold sm:text-6xl">UI & UX</h1>
            <p className="text-black font-bold sm:text-6xl pl-10 sm:pl-40">Designer</p>
          </div>
          <p className="text-black mt-8 sm:w-[500px] text-sm sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="bg-[#ff6300] text-white rounded-sm p-3 w-40 mt-10">Hire Me</button>
        </div>
        <div className="p-8">
          <Image src="/person.svg" height={400} width={400} alt="image" />
          <div className='flex gap-3 sm:gap-6 sm:ml-24 mt-5'>
            {Socials.map((icon, index) => (
              <Image key={index} src={icon.icon} height={30} width={30} alt='icon' className='cursor-pointer' />
            ))}
          </div>
        </div>
      </div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
