// header.js

"use client";

import React from 'react';
import Image from 'next/image';


import { FaGithub, FaInstagram } from "react-icons/fa";


export default function Footer  () {
  return (
    <React.Fragment>
        <footer class=" bg-black  justify-center flex lg:text-left">
          <div class="changing-gradient-text bg-black/5 p-4 text-center text-surface ">
            © 2024 Copyright:
            <a href="https://elementx.cloud/"> ElementX</a>
          </div>
        </footer>

    </React.Fragment>
   
  )
};

