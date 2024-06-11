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
        <div className='md:max-w-[85%] m-auto p-4'>
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

          <div className="step mt-[10rem] mb-[3rem] md:mb-[7rem]">
            <header className='my-[4rem]'>
              <h2 className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[40%] m-auto font-extrabold text-center'>
                Take the first step towards a pain-free life.
              </h2>
            </header>

            <div className='steps grid gap-7 md:grid-cols-3'>
              <div className="location text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                <Icon icon="humbleicons:location" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <p className='font-bold text-[18px]'>
                  Choose a location that is convenient
                  for you, ensure you attend consultations and follow-up
                  appointments
                </p>
              </div>
              <div className="scheduling text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                <Icon icon="arcticons:calendar-simple-19" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <p className='font-bold text-[18px]'>
                  Scheduling your procedure at a time
                  that suits you eunsures you can plan
                  your recovery period effectively
                </p>
              </div>
              <div className="finding text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                <Icon icon="uil:stethoscope-alt" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <p className='font-bold text-[18px]'>
                  Finding the right specialist is
                  crucial for successful hernia treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="risk bg-[#f4f4f4]">
        <div className='md:max-w-[85%] m-auto p-4'>
          <header className='py-[3rem]'>
            <h2 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold text-center'>
              How Risky Is A Hernia
            </h2>
          </header>

          <div className="relative hernia-list bg-[#fff] p-8 ps-[4rem] rounded-lg">
            <div className="absolute left-0 bg-[#449DD1] w-[40px] h-[30px]">

            </div>
            <ul className='grid gap-3 text-[#0000009b]'>
              <li className='text-[20px] font-extrabold'>Ingunial hernia</li>
              <li className='text-[20px] font-extrabold'>Incisional hernia</li>
              <li className='text-[20px] font-extrabold'>Hiatal hernia</li>
              <li className='text-[20px] font-extrabold'>Femoral hernia</li>
              <li className='text-[20px] font-extrabold'>Ventral hernia</li>
              <li className='text-[20px] font-extrabold'>Umblical hernia</li>
              <li className='text-[20px] font-extrabold'>Recurrent hernia</li>
              <li className='text-[20px] font-extrabold'>Diaphragmatic hernia</li>
              <li className='text-[20px] font-extrabold'>Spigelian hernia</li>
              <li className='text-[20px] font-extrabold'>Flank hernia</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
