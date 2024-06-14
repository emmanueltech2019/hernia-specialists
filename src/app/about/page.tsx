import React from 'react'
import Hero from '../components/hero/Hero'
import SurgImg from "../components/assets/images/pexels-pixabay-356040 1.png"
import Image from 'next/image'

function page() {
  return (
    <div >
      <Hero title={'About.'} description={'Lorem ipsum dolor sit amet consectetur. Nec aliquet enim placerat id at. Elementum enim.'} />
      {/* <div className='flex md:px-32 py-20 h-[50vh]'>
            <Image src={SurgImg} className='w-[100%] h-[100%]' alt='Surgeon looking to a testecope'/>
            <div>
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod. Interdum cursus imperdiet porta vitae leo sodales. Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus. </p>
            </div>
        </div> */}
      <div className="inguinal my-[4rem] md:px-32 px-5 md:flex gap-10 text-left">
        <div >
          <Image src={SurgImg} alt="alt" className='rounded-xl h-[80%]'/>
        </div>

        <div className="text-left md:w-[50%]">
          <h2 className='text-[#449DD1] text-[20px] md:text-[30px] py-7 m-auto font-extrabold text-left'>
            Lorem ipsum dolor sit
          </h2>
          <p className='font-[500] text-[#000000a4]'>
            Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod. Interdum cursus imperdiet porta vitae leo sodales. Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus.
          </p>
        </div>
      </div>
      <div className="text-center gap-7 bg-[#F4F4F4] md:h-[600px] space-y-5 py-12 md:px-32 px-5">
        <h2 className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[40%] m-auto font-extrabold text-center'>
        Do You Need A Hernia Specialist?
        </h2>
        <span className='text-[#6B6B6B] py-5'>Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus. </span>
        <div className="cards flex md:flex-row flex-col spcace-y-10 md:space-y-0 gap-7 bg-[#F4F4F4] text-left py-10">
          <div className=' shadow-xl rounded-xl md:flex bg-white'>
            <Image src={SurgImg} alt='' className='md:w-[231px] h-[301px] rounded-xl '/>
            <p className='text-[13px] md:text-[15px] p-3'>
              Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod.
            </p>
          </div>
          <div className=' shadow-xl rounded-xl md:flex bg-white '>
            <Image src={SurgImg} alt='' className='md:w-[231px] h-[301px] rounded-xl '/>
            <p className='text-[13px] md:text-[15px] p-3'>
              Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='pb-10'>
          <h2 className="text-2xl font-bold mb-4 text-[#449DD1]">Lorem ipsum dolor sit</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. 
            Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet 
            eu tempor euismod. Interdum cursus imperdiet porta vitae leo sodales. Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus.
          </p>
          <p>
            Porta consequat amet neque egestas tellus diam ultricies. Tempus aliquet turpis tortor sed cum et diam. Euismod morbi bibendum nullam quis nec porta arcu. Ultrices tempus 
            convallis malesuada lectus sagittis. Dignissim feugiat gravida nec id amet. Et lobortis maecenas ornare placerat hendrerit. Ullamcorper cras magna tortor mauris elementum 
            ultrices nec lorem molestie. Dictumst dictum malesuada elementum non amet elementum consectetur. At quisque elit curabitur amet dolor in. Tempor odio ac nec sit volutpat 
            arcu elit gravida parturient. Eros nunc leo tellus neque cursus. Tincidunt viverra massa ultricies consectetur adipiscing tempor.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#449DD1]">Lorem ipsum dolor sit</h2>
          <p className="mb-4">
            Diam imperdiet iaculis nisl felis fringilla cras vitae. Id sapien sit sed maecenas vitae. Lacus mauris cursus feugiat nulla imperdiet. Commodo dictum sollicitudin augue 
            tellus donec et. Sed feugiat nulla arcu enim. Proin donec sit consectetur lobortis sit. Nam etiam posuere id viverra interdum pharetra. Enim sagittis aliquam purus sit 
            amet netus. Fringilla ultrices dolor vitae viverra phasellus pellentesque. Velit purus bibendum dignissim felis purus molestie pellentesque. Risus nulla nunc fringilla 
            accumsan molestie.
          </p>
          <p>
            Vulputate etiam vitae lectus viverra commodo id tellus eleifend. Laoreet odio nunc molestie eleifend elementum a pulvinar. Ornare convallis vestibulum ut magna. Pulvinar 
            sed eu in in tristique tristique semper ultrices proin. Purus quisque fermentum arcu lectus tincidunt at tortor donec. Pharetra ac eget rhoncus semper nibh consectetur 
            viverra ac leo. Vitae sit faucibus molestie porttitor mattis. A est nunc pharetra nulla. Vitae ut ultricies vulputate iaculis orci convallis convallis tristique. Arcu 
            malesuada neque donec in commodo tellus pellentesque at. Sed tortor morbi lorem tortor enim aenean. Id velit in pellentesque pulvinar lectus ut. Proin nisl purus turpis 
            posuere elit dolor.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page