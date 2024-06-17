import React from 'react'
import Hero from '../components/hero/Hero'
// import data from '../data'
import Link from 'next/link'

function page() {
    return (
        <div>
            <Hero title={'Contact Us'} description={`Reach Out to our team for expert care, Support, and personalized solutions for your Hernia Surgery needs.`} />

            <section className='p-4'>
                <div className='md:max-w-[85%] m-auto'>
                    <header className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[40%] m-auto font-extrabold text-center my-[1.5rem]'>
                        <h1>Get in Touch</h1>
                    </header>

                    <div className='sm:flex justify-between items-baseline'>
                        <div className='sm:w-[40%]'>
                            <p className='text-[14px] leading-[25px] font-[400]'>
                                If you have any questions, require further assistance or want to book an appointment give us a call or send us a message.
                            </p>

                            <div className='flex justify-between my-[2rem]'>
                                <div className="email">
                                    <p className='text-[11px] leading-[25px]'>Email:</p>
                                    <Link href="#">
                                        <p>xhs@gmail.com</p>
                                    </Link>
                                </div>
                                <div className="phone">
                                    <p className='text-[11px] leading-[25px]'>Phone:</p>
                                    <Link href="#">
                                        <p className='text-[18px]'>09422478</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="form my-[3rem] sm:w-[50%]">
                            <form className='grid gap-[2rem]'>
                                <div>
                                    <label className="text-[13.5px]" htmlFor="name">Name:</label><br/>
                                    <input type="text" id='name' placeholder='Micheal Collin' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[1rem] w-full rounded-full'/>
                                </div>

                                <div>
                                    <label className="text-[13.5px]" htmlFor="email">Email:</label><br/>
                                    <input type="email" id='email' placeholder='micheal67@gmail.com' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[1rem] w-full rounded-full'/>
                                </div>

                                <div>
                                    <label className="text-[13.5px]" htmlFor="message">Message:</label><br/>
                                    <textarea name="comment" id="message" placeholder='Leave us a Message...' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[2rem] w-full rounded-full'></textarea>
                                </div>

                                <div className='text-center '>
                                    <button className='bg-[#449dd1] text-[#fff] w-full p-[1rem] rounded-full text-[16px]'>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page