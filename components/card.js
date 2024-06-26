import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { projects } from '../constants/constants';
import en from '../public/locales/en/home.json';
import ja from '../public/locales/ja/home.json';



const Card = () => {
    const router = useRouter();
    const { locale } = router;
    const translate = locale === 'en' ? en : ja;
    const { t } = useTranslation();


    // console.log(Object.values(cardData))

    // const translatedCardData = Object.values(cardData).map((project) => ({
    //     ...project,
    //     content: t(`cardData.${project.id}.content`),
    //     features: project.features && Array.isArray(project.features)
    //         ? project.features.map((feature) =>
    //             t(`projects.cardData.${project.title}.features.${feature}`)
    //         )
    //         : [],
    //     languages: project.languages && Array.isArray(project.languages)
    //         ? project.languages.map((language) =>
    //             t(`projects.cardData.${project.id}.languages.${language}`)
    //         )
    //         : [],
    //     title: t(`cardData.${project.id}.title`),
    // }));

    const initialSlice = 2;
    const length = projects.cardData.length

    console.log(length)
    const [noOfElement, setNoOfElement] = useState(initialSlice);

    const dataSlice = projects.cardData.slice(0, length);

    console.log(dataSlice.length)

    console.log(noOfElement)

    const handleClick = () => {
        if (noOfElement >= dataSlice.length) {
            setNoOfElement(initialSlice);
        } else {
            setNoOfElement(noOfElement + initialSlice);
        }
    };

    return (
        <section className=' py-lg-5 h-fit py-20 transition-all duration-500 ease-in' id="projects">
            <div className='container mx-auto 2xl:w-3/4 lg:w-3/4'>
                <div className='flex justify-center justify-items-center flex-col '>
                    <div className='grid md:grid-cols-2 gap-10 place-content-center w-fit mx-auto'>

                        {dataSlice.map((p) => {
                            return (
                                <div className='w-[300px] md:w-[350px] col-md-6 dark:bg-[#0f0f0f] bg-[#ba213b] mx-0 mb-5 transition-all duration-500 ease-in-out text-white shadow-sm shadow-white dark:shadow-inner dark:shadow-[#fae800]' key={p.title}>
                                    <div className='py-[1.5rem] px-[1.1rem] flex flex-col justify-between items-start h-full relative '>
                                        <div className='flex flex-row !justify-between p-2 mb-2 items-center w-full'>
                                            <div className='text-center text-[18px] text-white   dark:text-[#fae800] underline underline-offset-8 decoration-2 decoration-white '>
                                                {p.title}
                                            </div>
                                            <div className='flex flex-row justify-between items-center gap-5'>
                                                {(p.github &&
                                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className=" hover:text-[#BE93D4] ">
                                                        <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                            {p.github}
                                                        </svg>
                                                    </a>
                                                )}
                                                {(p.links &&
                                                    <a href={p.links} target="_blank" rel="noopener noreferrer" className=" hover:text-[#BE93D4] w-[25px]">
                                                        <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                                                            {p.links}
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex flex-1 flex-col'>
                                            <div className='flex-1 px-2 h-8 text-[13px]'>
                                                {p.content}
                                            </div>

                                            {(p.features && p.features.length > 0 && Array.isArray(p.features) &&
                                                <div className='flex-1 p-2 text-[12px] flex-col'>

                                                    <ul className='flex flex-col'>
                                                        Features:
                                                        {p.features.map((feature) => (
                                                            <li key={feature} className=" text-gray-300 ml-4 text-[14px]">{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            <div className='flex flex-row justify-between p-2 '>
                                                <ul className='text-sm flex items-end flex-wrap grow list-none border-t-2 border-t-white dark:border-t-[#fae800]  pt-2'>
                                                    {p.languages.map((language) => (
                                                        <li className='pl-1 text-gray-400' key={language}>{language}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/*
                    {dataSlice.length !== noOfElement && (
                        <div className='flex justify-center'>
                            <button className={`${locale === "en" ? 'cybr-btn m-10 z-20 text-center dark:after:bg-[#fae800] ' : 'cybr-btn m-10 z-20 min-w-[400px] text-center dark:after:bg-[#fae800] '}`} onClick={() => handleClick()}>
                                {noOfElement >= dataSlice.length ? `${translate.showLess}` : `${translate.loadMore}`}<span aria-hidden>_
                                </span>
                                <span aria-hidden className="cybr-btn__glitch">{noOfElement >= dataSlice.length ? `${translate.showLess}` : `${translate.loadMore}`}_ </span>
                                <span aria-hidden className={`${locale === "en" ? 'cybr-btn__tag' : 'cybr-btn__tag w-[40px]'}`}>R25</span>
                            </button>
                        </div>
                    )} */}
                    {/* <button className='btn bg-purple-600 justify-items-center justify-center mx-auto my-3 p-4 transition ease-in-out hover:bg-purple-400 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none' onClick={() => loadMore()}>
                        Load More
                    </button> */}

                </div>
            </div>
        </section >
    )
};


export default Card