// header.js

"use client";

import React from 'react';
import Image from 'next/image';


import { FaGithub, FaInstagram } from "react-icons/fa";


export default function Header  () {
  return (
    <React.Fragment>
       <header>
                    
                     <nav className=" mx-auto pb-2 pt-2 mb-2 flex justify-between">
          <div className='flex'>
           {/* <h1 className="mt-4">
              <a onClick={() => setIsContactVisible(!isContactVisible)} className="changing-gradient-text bg-gradient-to-r from-red-500 to-teal-700 text-white px-4 py-2 rounded-md">
                Contact
              </a>
            </h1> 
           */}
           <a href='/'> 
            <Image className='mt-2 ml-1 flex items-center mx-auto bg-black'
              src="/images/Untitled.png"  // Path relative to the public directory
              alt="Description of the image"
              width={100}  // Set the width of the image
              height={70}  // Set the height of the image
              
            />
           </a>
            
           
            <h1 className='mt-2 ml-2'>
              <a className=" transition-transform hover:scale-110   changing-gradient-text bg-gradient-to-r px-4 py-2 rounded-md  dark:text-black flex justify-center text-black" href="./resume/ResumeKunal.pdf" target="_blank" rel="noopener noreferrer" download>
                About
              </a>
            </h1>
            <h1 className='mt-2 ml-4'>
              <a className="  transition-transform hover:scale-110  changing-gradient-text bg-gradient-to-r px-4 py-2 rounded-md  dark:text-black flex justify-center text-black" href="/contactUs"  rel="noopener noreferrer"                 >
                Contact Us
              </a>
            </h1>  
              <h1 className='mt-2 ml-4'>
              <a className=" transition-transform hover:scale-110  changing-gradient-text bg-gradient-to-r px-4 py-2 rounded-md  dark:text-black flex justify-center text-black" href="/services"  rel="noopener noreferrer"                 >
                Services
              </a>
            </h1>
            
          
           
          </div>
       
          <ul className=" flex items-center">
            <li className='mt-2 text-3xl flex justify-center gap-1'>
              <a className=' transition-transform hover:scale-110 changing-gradient-text rounded-md px-2  py-1 text-black text-xl mr-1' href='/portofolio'>
                Portofolio
              </a>
              <a className='transition-transform hover:scale-110  pr-2' href="https://github.com/kunalSharma4/Codes" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className='transition-transform hover:scale-110 ' href="https://www.instagram.com/kunalfancylens/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            
            </li>
          </ul>
          
        </nav>
        </header>

    </React.Fragment>
   
  )
};

