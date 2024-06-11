import React from 'react'
import Hero from '../components/hero/Hero'
import SurgImg from "../components/assets/images/pexels-pixabay-356040 1.png"
import Image from 'next/image'
function page() {
  return (
    <div >
        <Hero title={'About.'} description={'Lorem ipsum dolor sit amet consectetur. Nec aliquet enim placerat id at. Elementum enim.'}/>
        <div className='flex md:px-32 py-20 h-[50vh]'>
            <Image src={SurgImg} className='w-[100%] h-[100%]' alt='Surgeon looking to a testecope'/>
            <div>
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod. Interdum cursus imperdiet porta vitae leo sodales. Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus. </p>
            </div>
        </div>
    
    </div>
  )
}

export default page