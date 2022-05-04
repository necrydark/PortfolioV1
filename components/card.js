import React, { useState, useEffect } from 'react'
import { projects } from '../constants/constants'



const Card = () => (

    
    <div div className='container flex flex-col' >
        <div className='grid md:grid-cols-2 gap-4 '>
            {
                projects.cardData.map((p, i) => {
                    return (
                        <div className='w-[300px] md:w-[350px] bg-purple-600 mx-auto mb-5 text-white' key={i}>
                            <div className='py-[1.5rem] px-[1.1rem] flex flex-col justify-between items-start h-full relative '>


                                <div className='flex flex-row !justify-between p-2 mb-2 items-center w-full'>
                                    <div className='text-center text-lg '>
                                        {p.title}
                                    </div>
                                    <a href={p.links} target="_blank" rel="noopener noreferrer" className=" hover:text-[#BE93D4] ">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            {p.links}
                                        </svg>
                                    </a>
                                </div>

                                <div className='flex flex-1 flex-col'>
                                    <div className='flex-1 p-2 text-[14px]'>
                                        {p.content}
                                    </div>

                                    {(p.features && 
                                            <div  className='flex-1 p-2 text-[14px] flex-col'>
                                                <ul className='flex flex-col'>
                                                    Features
                                                    {p.features.map((t, i) => (
                                                        <li key={i} className=" text-gray-300">{t}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                       )}
                                       
                                    <div className='flex flex-row justify-between p-2 '>
                                        <ul className='text-sm flex items-end flex-wrap grow list-none'>
                                            {p.languages.map((t, i) => (
                                                <li className='pl-1 text-gray-300' key={i}>{t}</li>
                                            ))}
                                        </ul>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    </div >

);

export default Card