import React from 'react'
import { useForm, ValidationError } from "@formspree/react"
import Link from 'next/link'
import { useRouter } from 'next/router';
import en from '../public/locales/en/home.json';
import ja from '../public/locales/ja/home.json';
 


function Contact() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : ja;    
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
        return <p className='text-center text-white text-2xl'>Thank you for the message!</p>;
    }

    return (
        <div className='container'>
            <h1 className='text-center text-white text-4xl underline underline-offset-8 decoration-4 dark:decoration-[#fae800] decoration-white'>Contact me!</h1>
            <h2 className='text-center text-white text-xl p-3'>Use it for enquiries / questions or to just say hi!</h2>
            <form onSubmit={handleSubmit} className='flex flex-col container p-6'>
                <label htmlFor="email" className='text-white underline underline-offset-[6px] decoration-2 dark:decoration-[#fae800] decoration-white'>Email Address</label>
                <input id="email" className='p-3 my-2 bg-[#ee3453] rounded-md text-white placeholder:text-white dark:bg-[#fae800] dark:text-black dark:placeholder:text-black'  type="email" name="email" placeholder='janedoe@mail.com' required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="email" className='underline underline-offset-[6px] decoration-2 dark:decoration-[#fae800] decoration-white text-white'>Message</label>

                <textarea id="message" name="message" className='p-3 my-2 max-h-32 resize-y rounded-md bg-[#ee3453] dark:bg-[#fae800] min-h-[64px] placeholder:text-white text-white dark:text-black dark:placeholder:text-black' placeholder='Leave a message....' required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <div className='text-white flex flex-row' >
                Or email me at
                    <Link href="mailto:dark@necrydark.dev"><p className="hover:text-[#fae800] ml-1 transition-colors duration-300 ease-in-out cursor-pointer b leading-6" >dark@necrydark.dev</p>
                    </Link>
                </div>
                {/* <button type='submit' disabled={state.submitting} className="bg-[#BE93D4] hover:bg-purple-600 transition-colors duration-300 border border-purple-600 text-white w-52 font-bold py-2 text-center px-4 rounded mx-auto items-center">
                    Submit
                </button> */}
                {/* <div className='flex justify-center'>
                <button type='submit' disabled={state.submitting} className={`${locale === "en" ? 'cybr-btn m-10 z-20 w-[200px] text-center' : 'cybr-btn m-10 z-20 min-w-[400px] text-center '}`} onClick={() => loadMore()}>
                        {t.loadMore}<span aria-hidden>_<svg className="fill-current w-6 h-6 m-0 inline-block !ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        </span>
                        <span aria-hidden className="cybr-btn__glitch">{t.loadMore}_ </span>
                        <span aria-hidden className={`${locale === "en" ? 'cybr-btn__tag' : 'cybr-btn__tag w-[40px]'}`}>R25</span>
                    </button>
                <ValidationError errors={state.errors} className='text-red-700 font-bold text-lg' />
                </div> */}
               
                <div className='text-white flex justify-center h-20 mt-2 items-center'>
               
                <button type='submit' disabled={state.submitting} className="cybr-btn m-10 z-20  text-center dark:after:bg-[#fae800] " onClick={() => loadMore()}>
                        {t.submit}<span aria-hidden>_
                        </span>
                        <span aria-hidden className="cybr-btn__glitch">{t.submit}_ </span>
                        <span aria-hidden className="cybr-btn__tag">R25</span>
                    </button>
                <ValidationError errors={state.errors} className='text-red-700 font-bold text-lg' />
             
                </div >
            </form >
        </div>
    )

}

export default Contact