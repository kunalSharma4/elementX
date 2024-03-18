// header.js

"use client";

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaInstagram } from "react-icons/fa";





export default function portofolio () {
  
  return (
    <React.Fragment>
       
                    
       <section className=" mt-1 bg-cover bg-no-repeat   py-2 flex justify-center" style={{ backgroundImage: "url('')" }}>
    <div className="flex  justify-center ">
      <ul className="pl-1 mt-48 ">
        <li className='w-100  changing-gradient-text text-4xl' >Full-Stack Web Developer</li>
        <li className='w-80 mt-10'>Hi,I am Kunal Sharma. A Passionate Web Developer from Melbourne</li>
        <li className=' text-4xl mt-10 flex '>
            <a href='' rel="noopener noreferrer" className='transition-transform hover:scale-150 ' ><FaGithub /></a>
            <a href=''  rel="noopener noreferrer" className='ml-4 transition-transform hover:scale-150  '><FaInstagram /></a>
        </li>
       
      </ul>
   
    </div>
    <div className=" hover:border-8  rounded-full  mt-20 min-h-80 flex items-center ml-10">
        <a className='flex justify-center relative  transition-transform hover:scale-110' href='/'>
            <Image
                className="  ml rounded-full bg-rose-300"
                src="/images/pfp.JPG" // Path relative to the public directory
                alt="Description of the image"
                width={300} // Set the width of the image
                height={1} // Set the height of the image
            />
        </a>
    </div>

    
</section >

<section className='mt-40 bg-cover bg-no-repeat   py-2 flex justify-start'>
        <div className='justify-start'>
              
              
                  <Image
                      className=" ml-56  flex justify-center"
                      src="/images/pfp.JPG" // Path relative to the public directory
                      alt="Description of the image"
                      width={200} // Set the width of the image
                      height={1} // Set the height of the image
                  />
        </div>
        <div className='  mt-10 min-h-80 flex items-start ml-40' >
          <ul className='w-80'>
            <li>About me</li>
            <li>A Dedicated Web Developer based in Melbourne</li>
            <li>sdsdhsuiydbsiudb sduysduysd suydgsuyduysd sudgsuydgusd shdugsuydgvusyd shudvsuydvsuyd suydvusydvusyd</li>
          </ul>
            
         
        </div>
       
         
</section>


    </React.Fragment>
   
  )
};

