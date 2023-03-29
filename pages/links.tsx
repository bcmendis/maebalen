import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTiktok, FaInstagram, FaDiscord, FaImdb, FaPaypal } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineWeb } from 'react-icons/md';

const maebae = require('../assets/maebae.png');

const LinksPage = () => {
  return (
    <div className='flex flex-col items-center sm:justify-center p-5 w-full h-full bg-slate-300 text-black'>
        <div className='flex flex-col items-center w-[90%] sm:w-[70%] p-5 sm:justify-center sm:flex-row bg-white rounded-b-3xl rounded-t-[300px] space-y-5 sm:space-y-0 sm:rounded-lg'>
          <Image src={maebae} alt='maebae' className='w-full max-w-[200px] rounded-full'/>
         <div className='flex flex-col text-center text-slate-700 p-2 sm:p-5 text-sm sm:text-xl space-y-3'>
            <h1 className='text-2xl'>Hey I’m Mae!</h1>
           <p>I’m a voice actor and content creator! Check out my socials!</p>
        </div>
        <Link href='' className='flex gap-2 justify-center items-center p-4 bg-slate-200 rounded-lg w-full'>
          <FaTiktok className='w-[20px]'/>
          <span>TikTok</span>
        </Link>
        <Link href='' className='flex gap-2 justify-center items-center p-4 bg-slate-200 rounded-lg w-full'>
          <FaInstagram className='w-[20px]'/>
          <span>Instagram</span>
        </Link>
        <Link href='' className='flex gap-2 justify-center items-center p-4 bg-slate-200 rounded-lg w-full'>
          <FaDiscord className='w-[20px]'/>
          <span>Instagram</span>
        </Link>
        <Link href='' className='flex gap-2 justify-center items-center p-4 bg-slate-200 rounded-lg w-full'>
          <FaImdb className='w-[20px]'/>
          <span>Instagram</span>
        </Link>
        <Link href='' className='flex gap-2 justify-center items-center p-4 bg-slate-200 rounded-lg w-full'>
          <FaPaypal className='w-[20px]'/>
          <span>Instagram</span>
        </Link>
      </div>
    </div>
  )
}

export default LinksPage