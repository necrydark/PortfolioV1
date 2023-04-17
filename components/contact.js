import React from 'react'
import { useForm, ValidationError } from "@formspree/react"
import Link from 'next/link'


function Contact() {
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
        return <p className='text-center text-white text-2xl'>Thank you for the message!</p>;
    }

    return (
        <div className='container'>
            <h1 className='text-center text-white text-4xl'>Contact me!</h1>
            <h2 className='text-center text-white text-xl p-3'>Use it for enquiries / questions or to just say hi!</h2>
            <form onSubmit={handleSubmit} className='flex flex-col container p-6'>
                <label htmlFor="email" className='text-white'>Email Address</label>
                <input id="email" className='p-3 my-3 bg-[#9867C5] rounded-md text-white' type="email" name="email" placeholder='janedoe@mail.com' required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="email" className=' text-white'>Message</label>

                <textarea id="message" name="message" className='p-3 my-3 max-h-48 resize-y rounded-md bg-[#9867C5] min-h-[64px]  text-white ' placeholder='Leave a message....' required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button type='submit' disabled={state.submitting} className="bg-[#BE93D4] hover:bg-purple-600 transition-colors duration-300 border border-purple-600 text-white w-52 font-bold py-2 text-center px-4 rounded mx-auto items-center">
                    Submit
                </button>
                <ValidationError errors={state.errors} className='text-red-700 font-bold text-lg' />
                <div className='text-white flex flex-row items-center'>Or email me at
                    <Link href="mailto:dark@necrydark.dev"><p className="hover:text-purple-900 ml-1 transition-colors duration-300 cursor-pointer b leading-6" >dark@necrydark.dev</p>
                    </Link>
                </div >
            </form >
        </div>
    )
}

export default Contact