import React from 'react'
import Hero from '../components/hero/Hero'

function page() {
  return (
    <div>
        <div className='h-[100px] mb-[5rem]'>
        <Hero title={''} description={''} />
        </div>
        <section className='p-4 mt-[15rem] min-h-[100vh]'>
            <div className='md:max-w-[85%] m-auto'>
                <input type="text" placeholder='search here..' className='p-[1rem] outline-none border-[2px] rounded-full w-full'/>
            </div>
        </section>
    </div>
  )
}

export default page