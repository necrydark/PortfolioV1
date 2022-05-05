import React from 'react'
import { useForm, ValidationError } from "@formspree/react"
import Link from 'next/link'


function Contact() {
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
        return <p className='text-center text-white text-2xl'>Thank you for the message!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col container p-6'>
            <label htmlFor="email" className='text-white'>Email Address</label>       
            <input id="email" required className='my-3 bg-[#9867C5] rounded-md text-white border-2 border-purple-300 block w-full p-2.5 ring-0 text-sm outline-none focus:border-purple-700 focus:ring-purple-700' type="email" name="email" placeholder='janedoe@mail.com' />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="email" className=' text-white'>Message</label>
            <textarea id="message" required name="message" className='p-3 my-3 max-h-48 resize-y rounded-md outline-none bg-[#9867C5] min-h-[64px] focus:border-purple-700 border-purple-300 border-2 focus:ring-purple-700  text-white ' placeholder='Leave a message....' />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type='submit' disabled={state.submitting} className="bg-[#BE93D4] hover:bg-purple-600 transition-colors duration-300 border border-purple-600 text-white w-52 font-bold py-2 text-center px-4 rounded mx-auto items-center">
                Submit
            </button>
            <ValidationError errors={state.errors} className="font-bold text-white text-2xl"/>
            <div className='text-white flex flex-row items-center mt-7'>Or email me at
                <Link href="mailto:michaelkconnor.02@gmail.com"><p className="hover:text-purple-900 ml-2 transition-colors duration-300 cursor-pointer font-bold" >michaelkconnor.02@gmail.com</p>
                </Link>
            </div >
        </form >

    )
}

export default Contact