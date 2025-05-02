'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import { RiSendPlaneFill } from "react-icons/ri";

const Contacts = () => {
  const [buttonText, setButtonText] = useState('Send Me');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setButtonText('Sending...');

    if (!form.current) {

      setButtonText('Send Us');
      return;
    }

    const formData = new FormData(form.current);
    const userEmail = formData.get('email') as string;
    const userName = formData.get('name') as string;
    const userMessage = formData.get('message') as string;

    const templateParams = {
      from_name: 'Portfolio Contact',
      from_email: userEmail,
      name: userName,
      message: userMessage,
    };

    emailjs
      .send('service_o8upbpr', 'template_xafqw9e', templateParams, 'ZF5npbVhSWZvkYdcx')
      .then(
        () => {
          setButtonText('Sent');
          setTimeout(() => {
            setButtonText('Send Me');
            // setLoading(false);
            form.current?.reset();
          }, 1000);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setButtonText('Send Me');
        //   setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="h-[500px] font-josefin-sans my-20">
             <h2 className="text-3xl font-bold text-gray-900 mb-5 text-center">Contacts</h2>

      <div className="h-full bg-orange-100 flex">
        {/* Contacts */}
        <div className="h-full w-[30%] bg-black text-white lg:flex flex-col hidden">
          {/* Phone and Address */}
          <div className="ml-10">
            <div className="flex gap-5 items-center mt-16">
              <FaLocationDot className="text-3xl" />
              <div data-aos="fade-right">
                <p>Dhaka</p>
                <p>Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <FaPhoneAlt className="text-2xl" />
              <div data-aos="fade-right">
                <p>+880 1734797889</p>
                <p>+880 1905889771</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <IoMdMail className="text-2xl" />
              <div>
                <p data-aos="fade-right">hrsajib001@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div data-aos="zoom-in" className="flex gap-7 mt-20 ml-10">
            <Link href="https://www.facebook.com/HR.Sajib001" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-3xl text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hr-sajib" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-4xl text-white" />
            </Link>
          </div>
        </div>
        {/* Let's Talk */}
        {/* data-aos="fade-right" */}
        <div className="w-full h-full relative bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.postimg.cc/TYcPDWJV/banner-CSE.jpg')" }}>
          <div  className="flex justify-end lg:mr-5 lg:px-0 px-5">
            <form onSubmit={sendEmail} ref={form} className="lg:w-3/4 w-full mt-20">
              <div className="flex flex-col lg:flex-row gap-5 mb-5">
                <input required type="text" name="name" placeholder="Your Name" className="rounded-md pl-5 h-16 w-3/5 bg-white" />
                <input required type="email" name="email" placeholder="Your Email" className="rounded-md pl-5 h-16 w-full bg-white" />
              </div>
              <textarea required name="message" placeholder="Write your message here ..." className="bg-white h-36 w-full rounded-md p-5" />
              <div className=" mt-5 p-1 flex">

                  <input
                    // data-aos="fade-right"
                    type="submit"
                    value={buttonText}
                    className="hover:bg-orange-200 rounded-md h-12 w-34 pr-9 hover:text-orange-900 p-3 text-xl bg-gray-100 text-black transition-color duration-500 ease-in-out border-0 border-orange-900 hover:border"
                  />
                  <RiSendPlaneFill className='text-black text-2xl relative top-3.5 -left-9'/>

              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Contacts */}
      <div className="h-full w-full bg-black text-white lg:hidden flex-col flex">
          {/* Phone and Address */}
          <div className="ml-10">
            <div className="flex gap-5 items-center mt-16">
              <FaLocationDot className="text-3xl" />
              <div data-aos="fade-right">
                <p>Dhaka</p>
                <p>Bangladesh</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <FaPhoneAlt className="text-2xl" />
              <div data-aos="fade-right">
                <p>+880 1734797889</p>
                <p>+880 1905889771</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <IoMdMail className="text-2xl" />
              <div>
                <p data-aos="fade-right">hrsajib001@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div data-aos="zoom-in" className="flex gap-7 mt-20 ml-10">
            <Link href="https://www.facebook.com/HR.Sajib001" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-3xl text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hr-sajib" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-4xl text-white" />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Contacts;