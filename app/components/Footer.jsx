import React from 'react'
import Image from 'next/image'
const Footer = () => {
    const List = ["Home","About Me","Services","Projects","Testimonials","Contact"]
    const Socials = [
        "/socialsLogo/Facebook - Negative.svg",
        "/socialsLogo/Instagram - Negative.svg",
        "/socialsLogo/LinkedIn - Negative.svg",
        "/socialsLogo/Twitter - Negative.svg"
    ]
  return (
    <footer className=' bg-[#F8F8F8]'>
        <div className=' flex flex-col items-center pt-16 pb-12'>
           <Image src="/footerLogo.svg" height={67} width={279} alt='logo' ></Image>
           <div className=' flex gap-8 pt-10'>
            {
                List.map((item,index)=>(
                    <li className=' list-none cursor-pointer' key={index}>{item}</li>
                ))
            }
           </div>
           <div className=' flex gap-6 pt-10'>
             {
                Socials.map((icon,index)=>(
                     <Image key={index} src={icon} height={30} width={30} alt='icon' className=' cursor-pointer'></Image>
                ))
             }
           </div>
        </div>
        <div className=' bg-[#545454] text-center p-5'>
            <p className='text-[#e6e6e6]'>© 2023 <span className=' text-[#ff6300]'>Mumair</span> All Rights Reserved , Inc.</p>
        </div>
    </footer>
  )
}

export default Footer