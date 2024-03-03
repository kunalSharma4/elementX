// pages/contact.js

"use client";

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useClient } from 'next/client';
import { useEffect } from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="bg-black px-10">
    <section className="min-h-screen py-2   border-teal-500">
      <nav className="pb-2 pt-2 mb-2 flex justify-between">
        <div className='flex'>
         {/* <h1 className="mt-4">
            <a onClick={() => setIsContactVisible(!isContactVisible)} className="changing-gradient-text bg-gradient-to-r from-red-500 to-teal-700 text-white px-4 py-2 rounded-md">
              Contact
            </a>
          </h1> */} 
          <a href='../'>
          <Image className='mt-2 ml-1 flex items-center mx-auto bg-black'
            src="/images/Untitled.png"  // Path relative to the public directory
            alt="Description of the image"
            width={100}  // Set the width of the image
            height={70}  // Set the height of the image
          />
          </a>
        
          <h1 className='mt-2 ml-2'>
            <a className="  changing-gradient-text bg-gradient-to-r px-4 py-2 rounded-md  dark:text-black flex justify-center text-black" href="./resume/ResumeKunal.pdf" target="_blank" rel="noopener noreferrer" download>
              Resume
            </a>
          </h1>
          <h1 className='mt-2 ml-4'>
            <a className="  changing-gradient-text bg-gradient-to-r px-4 py-2 rounded-md  dark:text-black flex justify-center text-black" href="/contactUs" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </h1>
         
        </div>
     
        <ul className="flex items-center">
          <li className='mt-5 text-3xl flex justify-center gap-10'>
            <a href="https://github.com/kunalSharma4/Codes" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/kunalfancylens/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
        
      </nav>

      

      <div className='text-center pt-7  mt-7'>
        <h1 className='changing-gradient-text text-5xl py-2 text-purple-700 font-semibold'>ELEMENT X.inc</h1>
        <h1 className=' text-2xl py-2 text-green-400 font-semibold'>By Kunal Sharma</h1>
        <h3 className='text-1xl py-2'>Web Developer and Digital Marketing expert.</h3>
        <p className='text-md py-5 leading-8 text-teal-800' >
          Passionate Web Developer and Digital Marketing expert, I bring creativity and technical prowess to the digital realm. Proficient in the MERN stack, adept with Adobe Suite, and skilled in video editing, I craft seamless online experiences. Beyond coding, I excel in creating impactful ads on platforms like Facebook and Google, coupled with strong SEO strategies. With a keen eye for design and a strategic mind, I seamlessly merge innovation and technology. Elevate your digital presence with my expertise – let's build something extraordinary together.
        </p>
      </div>
    </section>

    <section>
        <div>
          <h3 className="  changing-gradient-text text-3xl py-1 flex justify-center ">Services We Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Passionate about crafting digital experiences, I am a dedicated Web Developer and Digital Marketing expert. With a keen eye for design and a knack for turning ideas into reality, I bring creativity and technical expertise to every project. Explore my portfolio to see the fusion of innovation and technology in action. Let's build something extraordinary together!
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            
          </p>
        </div>
        <div className="lg:flex gap-10">

          <div className=" changing-gradient-text border text-center shadow-lg p-10 rounded-xl my-10  changing-gradiant-bg   flex-1">
          {/* <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/> */} 
            <h2 className="text-2xl font-medium pt-8 pb-2  ">
              
              Web Development
            </h2>
            <p className="py-2">
              Creating elegant Websites with designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">My Stack</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">React.JS</p>
            <p className="text-gray-800 py-1">Node.JS</p>
            <p className="text-gray-800 py-1">Tailwind</p>
          </div>
          <div className=" changing-gradient-text border  text-center shadow-lg p-10 rounded-xl my-10 changing-gradiant-bg  flex-1">
           
            <h3 className="text-2xl font-medium pt-8 pb-2">
              Elevate Your Business
            </h3>
            <p className="py-2">
            Unlocking growth through strategic digital ads and compelling online campaigns tailored for success. Let's make your brand stand out in the digital landscape.
            </p>
            <h4 className="py-4 text-teal-600">Expertise in Handeling</h4>
            <p className="text-gray-800 py-1">Facebook Ads Manager</p>
            <p className="text-gray-800 py-1">Google Ads</p>
            <p className="text-gray-800 py-1">SEO</p>
            <p className="text-gray-800 py-1">CMS</p>
          </div>
        
        </div>
      </section>
   
      <section className=' bg-gradient-to-r rounded-xl text-center'>
          <div className=''>
            <h3 className="text-3xl pb-3 dark:text-black flex justify-center text-black">CONTACT</h3>
            <p className="text-md py-1 leading-2 text-gray-800 dark:text- flex justify-center ">
              CONTACT NO - 0403740066
            </p>
            <p className="text-md py-1 leading-2 text-gray-800  flex justify-center ">
              EMAIL - kunal04051999@gmail.com
            </p>
          </div>
      </section>

      <section className="py-10 border-t border-violet-500 ">
        <div>
          <h3 className="text-3xl py-1 dark:text-white flex justify-center ">PORTOFOLIO</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Passionate about crafting digital experiences, I am a dedicated Web Developer and Digital Marketing expert. With a keen eye for design and a knack for turning ideas into reality, I bring creativity and technical expertise to every project. Explore my portfolio to see the fusion of innovation and technology in action. Let's build something extraordinary together!
           
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
          <div className="basis-1/3 flex-1">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
          <div className="basis-1/3 flex-1">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
          <div className="basis-1/3 flex-1">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
          <div className="basis-1/3 flex-1">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
          <div className="basis-1/3 flex-1">
          <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/>
          </div>
        </div>
      </section>
  </main>
  );
};

export default ContactPage;
