
"use client";



import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactStyle = {
    width: isContactVisible ? '1350px' : '0',
    overflow: 'hidden',
    transition: 'width 0.7s ease',
    
  };

  return (
    <main className="bg-black px-10">
    
      <section className="min-h-screen py-2   border-teal-500">
      
        <div className='text-center pt-7  mt-10'>
          <h1 className='changing-gradient-text text-5xl py-2 text-purple-700 font-semibold'>ElementX Inc.</h1>
          <h1 className=' text-2xl py-2 text-green-400 font-semibold'>Your Digital Journey Starts Here</h1>
          <h3 className='text-1xl py-2'>Web Development and Digital Marketing experts.</h3>
          <p className='text-md py-5 leading-8 text-rose-800'>
            {`At Element X, we are not just builders; we're architects of your digital success story.
            From creating eye-catching websites that make heads turn to orchestrating social media buzz and turbocharging your brand with Facebook and Google ads, we've got the X-factor to get your business booming!`}
          </p>

           <section className=' changing-gradient-text  border rounded-md'>
                  <h1 className=' pt-10 text-3xl'>
                    Why ElementX Inc.? </h1>
                  <h2 className=' pt-10 text-2xl'>Digital Passport</h2>
                  <p className=' pt-5 text-xl'>{`In today's world, your website is your business's passport to global recognition. Be more than a page; be a captivating digital experience.`}</p>
                  <h2  className='text-2xl pt-10'> Visibility is Currency:</h2>
                  <p className=' pt-15 text-xl'>In a digital sea, visibility is everything. Element X Inc. ensures your brand is not just seen but remembered.</p>
                  <h2  className='text-2xl pt-10'> Future-Proof Your Brand:</h2>
                  <p className=' pt-5 text-xl'>In the digital era, your online presence is your business strategy. Element X Inc. ensures your brand is not just keeping up but setting trends.</p>
           </section>
           
        </div>
      </section>

      <section className=' pt-10 rounded-3xl'>
          <div>
            <h3 className="   changing-gradient-text text-3xl py-1 flex justify-center ">Services We Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {`Passionate about crafting digital experiences, I am a dedicated Web Developer and Digital Marketing expert. With a keen eye for design and a knack for turning ideas into reality, I bring creativity and technical expertise to every project. Explore my portfolio to see the fusion of innovation and technology in action. Let's build something extraordinary together!`}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              
            </p>
          </div>
          <div className="lg:flex gap-10">

            <div className=" changing-gradient-text border text-center shadow-lg p-10 rounded-xl my-10  changing-gradiant-bg   flex-1">
            {/* <img className='rounded-lg' src="./iconsNimages/WebDev.png" alt='img'/> */} 
              <h2 className="text-2xl font-medium pt-8 pb-2  ">
                
                Create Your Website
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
              {`Unlocking growth through strategic digital ads and compelling online campaigns tailored for success. Let's make your brand stand out in the digital landscape.`}
              </p>
              <h4 className="py-4 text-teal-600">Expertise in Handeling</h4>
              <p className="text-gray-800 py-1">Facebook Ads Manager</p>
              <p className="text-gray-800 py-1">Google Ads</p>
              <p className="text-gray-800 py-1">SEO</p>
              <p className="text-gray-800 py-1">CMS</p>
            </div>
          
          </div>
        </section>
     
        {/*<section className=' bg-gradient-to-r rounded-xl text-center'>
            <div className=''>
              <h3 className="text-3xl pb-3 dark:text-black flex justify-center text-black">CONTACT</h3>
              <p className="text-md py-1 leading-2 text-gray-800 dark:text- flex justify-center ">
                CONTACT NO - 0403740066
              </p>
              <p className="text-md py-1 leading-2 text-gray-800  flex justify-center ">
                EMAIL - kunal04051999@gmail.com
              </p>
            </div>
          </section>*/}

        <section className="py-10 border bg-gradient-to-l violet-500 rounded-lg ">
          <div>
            <h3 className="  changing-gradient-text text-3xl py-1 flex justify-center ">Designs & Templates</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {`Passionate about crafting digital experiences, I am a dedicated Web Developer and Digital Marketing expert. With a keen eye for design and a knack for turning ideas into reality, I bring creativity and technical expertise to every project. Explore my portfolio to see the fusion of innovation and technology in action. Let's build something extraordinary together!`}
             
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap pr-4 pl-4">
            <div className="basis-1/3 flex-1 ">
            <img className=' block transition-transform hover:scale-110 rounded-lg' src="./images/demo/4.png" alt='img'/>
            </div>
            <div className=" basis-1/3 flex-1 pt-20">
            <img className='relative block transition-transform hover:scale-110 rounded-lg' src="./images/demo/3.png" alt='img'/>
            </div>
            <div className="basis-1/3 flex-1 ">
            <img className='relative block transition-transform hover:scale-110 rounded-lg' src="./images/demo/2.png" alt='img'/>
            </div>
            <div className="basis-1/3 flex-1 pt-20">
            <img className='relative block transition-transform hover:scale-110 rounded-lg' src="./images/demo/1.png" alt='img'/>
            </div>
            
          </div>
        </section>
        <section>

        </section>
    </main>
  );
}
