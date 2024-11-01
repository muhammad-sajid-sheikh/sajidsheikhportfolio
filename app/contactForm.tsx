import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactForm: React.FC =()=>{

    // useRef ko HTMLFormElement ke liye type kar rahe hain
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_6iog6hr;', 'template_kv3kxlq;', form.current, {
          publicKey: 'tiUQnIokrPPMnlP_O',
        })
        .then(
          () => {
            console.log('SUCCESS!');

            alert('Your message has been sent successfully!');
            // Form ko reset karne ke liye
            form.current?.reset()
          },
          (error) => {

            alert('Failed to send message, please try again.');
            console.log('FAILED...', error.text);
          }
        );
    }
  };
  



    return(
        <div className="bg-[#030B14] rounded-lg p-4 sm:p-10">
            <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
            Let's work together!
            </h1>
            <p className="text-[#BFA181] mt-3 lg:text-base text-xs md:text-sm">
            Connections made in the workplace, which are helpful for career and business growth.
            </p>
            {/* input field */}
            <form ref={form} onSubmit={sendEmail} className="mt-8 block w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <input type="text" placeholder="First name" required name="first_name" className="flex-1 bg-black text-[#BFA181] placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full" />

                    <input type="text" placeholder="Last name" required name="last_name" className="flex-1 bg-black text-[#BFA181] placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full" />
                </div>
                <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
                    <input type="email" placeholder="Email address" required name="email" className="flex-1 bg-black text-[#BFA181] placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full" />

                    <input type="text" placeholder="Phone Number" required name="phone_no" className="flex-1 bg-black text-[#BFA181] placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full" />
                </div>
                <div>
                    <select name="selector" className="w-full mt-5 bg-black text-[#BFA181] placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
                        <option value="" disabled selected>Select an option</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="fullStack">Full Stack Development</option>
                    </select>
                </div>

                <textarea name="message" className="w-full mt-5 bg-black text-[#BFA181] placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none" rows={7} placeholder="Message"></textarea>

                <div className="mt-4">
                    <button type="submit" value="Send" className="px-8 py-3.5 bg-gradient-to-r from-[#b98694] to-[#5a5053] text-[#030B14] font-bold hover:bg-[#b84a67] transition-all duration-150 rounded-full">Send Message</button>
                </div>
                
            </form>
        </div>
    )
}
