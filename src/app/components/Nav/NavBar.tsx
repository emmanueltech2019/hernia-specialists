"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import logoImg from './img/logo 1.png'
import Link from 'next/link';

function NavBar() {
    const [toggle, setToggle] = useState(false)

    function handleToggle () {
        setToggle(!toggle)
    }
  return (
    <div>
        <section className='absolute w-full z-50'>
            <div className="md:w-[85%] m-auto p-4 overflow-hidden">
                <header className='flex justify-between items-center'>
                    <div className="logo">
                        <Image src={logoImg} alt="alt"/>
                    </div>
                    <div className="toggle/user">
                        <div className="seach">

                        </div>
                        <div className='bg-[#fff] flex items-center shadow-sm shadow-[#08080847] p-1 rounded-full gap-1'>
                            <div className='toggle'>
                            <Icon icon="mi:menu" className='text-[#2c2c2ca1] text-[20px]' onClick={handleToggle}></Icon>
                            </div>
                            <div className="user">
                            <Icon icon="lucide:user-round" className='text-[#2c2c2ca1] font-bold text-[23px] bg-[#adacac] rounded-full p-1'></Icon>
                            </div>
                        </div>
                    </div>
                </header>

                <nav className={!toggle ? ' absolute w-[400px] m-auto flex flex-col justify-center items-center text-center shadow-md bg-[#ffff] shadow-[#08080847] p-4 rounded-3xl transition-all ease-in-out duration-500 scale-[20%] top-[-300px] md:right-40' : 'absolute w-[345px] m-auto md:m-0 flex flex-col justify-center items-center text-center shadow-md bg-[#ffff] shadow-[#08080847] p-4 rounded-3xl transition-all ease-in-out duration-500 scale-100 top-20 md:right-40'}>
                    <div className="user py-2">
                    <Icon icon="lucide:user-round" className='text-[#2c2c2ca1] font-bold text-[52px] bg-[#d5d4d4] rounded-full p-2 m-auto mb-3'></Icon>

                    <div className="user-name text-[#969494]">
                        <p>Name of Patient</p>
                    </div>
                    </div>
                    <ul className='text-center flex flex-col my-3 gap-3 w-[70%]'>
                        <Link href="/about"><li className='rounded-full p-2 hover:border border-[#000000] cursor-pointer'>About Us</li></Link>
                        <Link href="/faq">
                        <li className='rounded-full p-2 hover:border border-[#000000] cursor-pointer'>FAQ</li>
                        </Link>
                        <li className='rounded-full p-2 hover:border border-[#000000] cursor-pointer'>Contact Us</li>
                        <li className='rounded-full p-2 border border-[#000000] cursor-pointer'>Log out</li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
  )
}

export default NavBar