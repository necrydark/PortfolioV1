import { FormspreeProvider } from '@formspree/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Card from '../components/card'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Wave from '../components/wave'
import en from '../public/locales/en/home.json'
import ja from '../public/locales/ja/home.json'


const Home = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ja;

  const skills = ['HTML5', 'CSS3', 'TailwindCSS', 'NextJS', "Typescript", "Prisma", "Supabase", 'NodeJS', 'JavaScript', 'Java', 'React', 'MongoDB', 'SQL', 'C#', 'Adobe XD', 'Git', 'C++']


  return (
    <div className='scroll-smooth bg-[#ee3453] dark:bg-[#0f0f0f] transition-colors duration-300 ease-in selection:text-[#fae800] selection:bg-[#0f0f0f] dark:selection:text-white dark:selection:bg-[#ee3453] '>
      <Head>
        <title>Michael C \ Portfolio</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link> */}
      </Head>

      <Navbar />

      <div className='left-bar'>
        <ul className='flex items-center flex-col m-0 p-0 list-none box after:bg-[#fff] dark:after:bg-[#fae800] transition-all duration-500 ease-in'>
          <li>
            <a href="https://github.com/necrydark" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fae800] transition-colors ease-in duration-300 p-[5px] inline-block">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/necrydark/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fae800] transition-colors duration-300 ease-in p-[5px]  inline-block">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mikeykconnor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fae800] transition-colors duration-300 ease-in p-[5px]  inline-block">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mikey.connor.71/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fae800] transition-colors duration-300 ease-in p-[5px]  inline-block">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
            </a>
          </li>
        </ul>
      </div>

      <section id="home" className='min-h-fit  z-0 md:!pt-40 md:!pb-0 sm:py-44 py-56 transition-all duration-300 ease-in'>
        <div className="container max-w-7xl flex justify-center h-[50vh] items-center flex-col !overflow-hidden">
          <div className='md:flex-row flex'>
            <p className='flex md:text-3xl md:!leading-[5rem] m-0 text-xl leading-10 text-white'>{t.welcome_msg}</p>
            <h1 className='text-white pl-2 md:text-6xl text-3xl'>{t.name}</h1>
          </div>
          <p className='m-0 text-white md:text-xl text-lg text-center '>
            {t.about_msg}
          </p>
          {/* <a href="CV.docx" download={"CV.docx"} className="bg-[#ee3453] hover:bg-purple-600 transition-colors duration-300 text-white font-bold py-2 px-4 w- rounded inline-flex mt-4 items-center">
            <span>{t.download_btn}</span>
            <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>

          </a> */}
          <div>
            <button className={`${locale === "en" ? 'cybr-btn m-10 z-20 text-center dark:after:bg-[#fae800] ' : 'cybr-btn m-10 z-20 min-w-[400px] text-center dark:after:bg-[#fae800]'}`}>
              <a href="CV.docx" download={"CV.docx"}>
                {t.download_btn}<span aria-hidden>_<svg className="fill-current w-6 h-6 m-0 inline-block !ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                </span>
                <span aria-hidden className="cybr-btn__glitch">{t.download_btn}_ </span>
                <span aria-hidden className={`${locale === "en" ? 'cybr-btn__tag' : 'cybr-btn__tag w-[40px]'}`}>R25</span>
              </a>
            </button>

          </div>
        </div>
        {/* <div className='scroll-down'>
          <div className='mouse'>
            <div className='scroller'></div>
          </div>
        </div> */}
      </section>


      {/* <Wave fill={"BE93D4"} bg={"9867C5"} /> */}
      <section id="about" className='diagonal after:bg-[#ba213b] dark:after:bg-black section-block pt-32' >
        <div className='container mx-auto px-4 w-3/4'>
          <h1 className='text-5xl text-white p-2 text-center underline underline-offset-8 decoration-4 dark:decoration-[#fae800] decoration-white'>About Me</h1>
          <p className='text-white p-2'>Hello, I&apos;m Michael Connor. I&apos;m a full time university student studying Software Engineering and also study web development on the side. I have a strong passion for both software and website development, and currently have experience creating both software and websites using JavaScript / NextJs / Reactjs / Java and some other frameworks</p>
          <h1 className='text-white p-2 text-5xl'>Technologies I&apos;ve worked with:</h1>
          <ul className='flex flex-wrap gap-4 my-3 p-2 text-white'>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <h1 className='text-white p-2 text-5xl'>Certificates</h1>
          <h2 className='text-white pl-2 text-lg'> LinkedIn Learning</h2>
          <ul className='flex flex-col gap-2 pl-2 mt-1 list-disc text-white'>
            <li className='ml-10'>Efficient Time Management</li>
            <li className='ml-10'>Project Management Simplified</li>
          </ul>
          <h2 className='text-white pl-2 mt-6 text-lg'>Languages</h2>
          <ul className='flex flex-col gap-2 pl-2 mt-1 list-disc text-white'>
            <li className='ml-10'>English - Fluent (Native) </li>
            <li className='ml-10'>Japanese - A1</li>
          </ul>
        </div>
      </section >
      {/* <Wave fill={"9867C5"} bg={"BE93D4"} /> */}

      <Card />
      <Wave fill={"ee3453"} bg={"ee3453"} darkbg={"0f0f0f"} darkfill={"ee3453"} className="transition-all duration-500 ease-in" />
      <section id="contact" className='h-[80vh] bg-[#ba213b] dark:bg-black pb-20 transition-all duration-500 ease-in'>
        <FormspreeProvider project="1914443541589786412">
          <Contact />
        </FormspreeProvider>

      </section>
      <Footer />
    </div >

  )
}


export default Home;


