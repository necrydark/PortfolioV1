import Head from 'next/head'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import Wave from '../components/wave'
import Footer from '../components/footer'
import Contact from '../components/contact'
import { FormspreeProvider } from '@formspree/react'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import en from '../public/locales/en/home.json';
import ja from '../public/locales/ja/home.json';
import Navbar from '../components/navbar';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

export default function Home() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : ja;

  const skills = ['HTML5', 'CSS3', 'TailwindCSS', 'NextJs', 'NodeJS', 'JavaScript', 'Java', 'ReactJS', 'MongoDB', 'SQL',]


  return (
    <div className='scroll-smooth bg-[#ee3453] dark:bg-[#0f0f0f] transition-colors duration-300 ease-in '>
      <Head>
        <title>Michael C \ Portfolio</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link> */}
      </Head>

      <Navbar />

      <section id="home" className='min-h-fit  z-0 md:!pt-40 md:!pb-0 sm:py-44 py-56 '>
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
            <a href="CV.docx" download={"CV.docx"} className={`${locale === "en" ? 'cybr-btn m-10 z-20 text-center' : 'cybr-btn m-10 z-20 min-w-[400px] text-center '}`}>
              {t.download_btn}<span aria-hidden>_<svg className="fill-current w-6 h-6 m-0 inline-block !ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              </span>
              <span aria-hidden className="cybr-btn__glitch">{t.download_btn}_ <svg className="fill-current w-6 h-6 m-0 inline-block !ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg></span>
              <span aria-hidden className={`${locale === "en" ? 'cybr-btn__tag' : 'cybr-btn__tag w-[40px]'}`}>R25</span>
            </a>
          </div>
        </div>
        {/* <div className='scroll-down'>
          <div className='mouse'>
            <div className='scroller'></div>
          </div>
        </div> */}
      </section>


      {/* <Wave fill={"BE93D4"} bg={"9867C5"} /> */}
      <section id="about" className='diagonal section-block pt-32' >
        <div className='container'>
          <h1 className='text-5xl text-white p-2 text-center underline underline-offset-8 decoration-4 decoration-[#fae800]'>About Me</h1>
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
      <Wave fill={"BE93D4"} bg={"9867C5"} />
      <section id="contact" className='h-[80vh] bg-[#BE93D4] py-20'>
        <FormspreeProvider project="1914443541589786412">
          <Contact />
        </FormspreeProvider>

      </section>
      <Footer />
    </div >

  )
}
