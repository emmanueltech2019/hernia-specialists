// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
    <div
      className=" text-white p-8 relative bg-cover bg-center center h-fit"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/wise-solution-inc/image/upload/v1718121485/footer-design_gexz65.png)' }}
    >
      <div className=" bg-opacity-75 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#449DD1]">Have Questions?</h2>
              <p className="mb-6">
                Our team is dedicated to providing you with the information and support you need.
              </p>
              <button className="border-solid border-white border-2 text-white px-4 py-2 rounded-full ">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
          <div className="mt-8 text-left md:px-20 px-10 py-10 md:text-left">
            <p className="text-sm">
              <strong>Disclaimer:</strong> We are a medical marketing entity. We are not considered a medical practice, institution or hospital. Please know that email communication via our website may not be done through a secure platform. Although it is unlikely, there is a possibility that information you include in your submission can be intercepted and read by parties other than the intended recipient. To protect your confidential information, please do not include personal identifying information such as your birth date or personal medical information in any emails or website submissions you send to us.
            </p>
            <div className='md:flex  justify-between text-center md:text-left'>
            <p className="text-sm mt-4">© 2024 XHS All rights reserved.</p>
            <div className="flex justify-around md:justify-between space-x-4 mt-2">
              <a href="#" className="text-sm">| Privacy Policy</a>
              {/* <span>|</span> */}
              <a href="#" className="text-sm">| Terms of Service</a>
            </div>

            </div>
          </div>
    </>
  );
};

export default Footer;
