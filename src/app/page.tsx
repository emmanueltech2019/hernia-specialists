import React from 'react';
import { Icon } from '@iconify/react';
import Image from "next/image";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function Home() {
  return (
    <div>
      <section className="hero bg-[#00000058] bg-blend-overlay">
        <div className="backdrop-blur-sm">
          <div className='md:max-w-[85%] m-auto pt-[7rem] p-4 pb-[6rem] min-h-[100vh]'>
            <header className='mt-[6.5rem]'>
              <h1 className='md:w-[85%] text-[37px] md:text-[60px] font-bold text-[#fff] leading-10 md:leading-[16mm]'>
                Find your <br  className='md:hidden'/>
                Hernia<br className='hidden md:block'/>Specialists in Austin, TX.
              </h1>

              <p className='text-[#f4f4f4] md:text-[18px] md:w-[40%] my-[1.4rem]'>
                your trusted destination for
                premier hernia care in Austin
                and Surrounding Areas.
              </p>
            </header>

            <div className="buttons flex justify-between gap-3 text-center mt-[6rem] md:w-[40%]">
              <div className="about-us bg-[#fff] p-2 py-3 font-bold rounded-full w-full">
                <button>About Us</button>
              </div>
              <div className="contact-us bg-[#449DD1] text-[#fff] p-2 py-3 font-bold rounded-full w-full">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className='bg-[#fff] relative'>
        <div className='md:max-w-[85%] p-4'>
          <header className='bg-[#fff] w-[95%] lg:w-[60%] m-auto left-[11px] lg:left-[20%] grid grid-cols-2 md:grid-cols-4 gap-3 shadow-md absolute top-[-50px] py-8 px-[2rem] rounded-full text-[#000]'>
            <div className="location p-2 rounded-full bg-[#ddd]">
              <input type="text" placeholder='Location' className='bg-transparent text-[14px]' />
            </div>
            <div className="date p-2 rounded-full bg-[#ddd]">
              <input type="date" placeholder='Date' className='bg-transparent text-[14px]' />
            </div>
            <div className="specialty p-2 rounded-full bg-[#ddd]">
              <input type="text" placeholder='Specialty' className='bg-transparent text-[14px]' />
            </div>
            <div className="search p-2 rounded-full bg-[#ddd] text-center text-[#449DD1]">
              <button>Search</button>
            </div>
          </header>

          <div className="step">
            <header>
              <h2>
                Take the first step towards a pain-free life.
              </h2>
            </header>

            <div className='steps'>
              <div className="location">
                <div className="location-icon">
                <Icon icon="material-symbols-light:location-on-outline"></Icon>
                </div>
                <p>
                  Choose a location that is convenient
                  for you, ensure you attend consultations and follow-up
                  appointments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
