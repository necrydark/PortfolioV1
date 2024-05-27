import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import en from '../public/locales/en/home.json';
import ja from '../public/locales/ja/home.json';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : ja;

    // const { systemTheme, theme, setTheme } = useTheme();

    // const renderThemeChanger = () => {
    //     const currentTheme = theme === 'system' ? systemTheme : theme;

    //     if (currentTheme === 'dark') {
    //         return (
    //                     <SunIcon onClick={() => setTheme('light')} aria-label='Light Theme Toggle' className=' px-0 w-7 h-7 text-white focus:text-white hover:text-white' role='button' />

    //         )
    //     } else {
    //         return (
    //                 <MoonIcon onClick={() => setTheme('dark')} aria-label='Dark Theme Toggle' className=' px-0 w-7 h-7 text-white focus:text-white hover:text-white' role='button' />

    //         )
    //     }
    // }

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale: locale });

        router.events.on('routeChangeComplete', () => {
            window.location.reload()
        });
    };

    // const [navigation, setNavigation] = useState([
    //     { name: `${t.home}`, href: '#home', current: true, },
    //     { name: t.about, href: '#about', current: false, },
    //     { name: t.projects, href: '#projects', current: false, },
    //     { name: t.contact, href: '#contact', current: false, },
    // ])

    // function toggleActive(active) {
    //     const index = navigation.findIndex(x => x.name === active);
    //     setNavigation(navigation.map((item, i) => {
    //         if (i === index) {
    //             return { ...item, current: true }
    //         } else {

    //             return { ...item, current: false }
    //         }
    //     }))

    // }

    const [scroll, setScroll] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset >= 150) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (

        <header >
            <Disclosure as="nav" id='scrollNav' className="cyberpunk-nav dark:bg-[#0f0f0f] bg-[#ee3453] fixed z-50 w-full transition-all ease-in duration-300 shadow-md border-b-2 dark:border-[#fae800] border-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 !leading-[0px] ">
                            <div className={scroll ? "relative flex items-center justify-between h-12 !leading-[0px] transition-all duration-300" : " transition-all duration-300 relative flex items-center justify-between h-20 !leading-[0px]"} >
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#ee3453] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                        ) : (
                                            // <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                            <div className="space-y-2" aria-hidden="true" >
                                                {/* <span className="block w-8 h-0.5 bg-white"></span>
                                                <span className="block w-8 h-0.5 bg-white"></span>
                                                <span className="block w-5 h-0.5 bg-white"></span> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24" stroke="white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                                                </svg>
                                            </div>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex-shrink-0 flex items-center text-center text-white text-xl font-bold hover:bg=[#ee3453]">
                                        {/* <li className='transitions-colors duration-700 hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base'> */}
                                        <li className={`${locale === 'en' ? 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base dark:hover:text-black' : 'text-white dark:hover:text-black font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base text-[10px]'}`}>
                                            <Link href='#home' >{t.name}</Link>
                                        </li>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6 ">
                                        <div className="flex font-bold  space-x-4 ">
                                            {/* <li className="text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base"> */}
                                            <li className={`${locale === 'en' ? 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] !dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base' : 'text-white font-bold transition-colors dark:hover:text-black duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base text-[11px]'}`}>
                                                <Link href='/'>{t.home}</Link>
                                            </li>
                                            <li className={`${locale === 'en' ? 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base dark:hover:text-black' : 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] dark:hover:text-black hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base text-[11px]'}`}>

                                                <Link href='#about'>{t.about}</Link>
                                            </li>
                                            <li className={`${locale === 'en' ? 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base dark:hover:text-black' : 'text-white font-bold transition-colors duration-700 dark:hover:text-black dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base text-[11px]'}`}>

                                                <Link href='#projects'>{t.projects}</Link>
                                            </li>
                                            <li className={`${locale === 'en' ? 'text-white font-bold transition-colors duration-700 dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base dark:hover:text-black' : 'text-white font-bold transition-colors duration-700 dark:hover:text-black dark:hover:bg-[#fae800] hover:bg-[#0f0f0f] hover:text-white block px-3 py-2 rounded-md text-base text-[11px]'}`}>

                                                <Link href='#contact'>{t.contact}</Link>
                                            </li>
                                            <select
                                                onChange={changeLanguage}
                                                defaultValue={locale}
                                                className='block py-2.5 px-0 w-18 text-sm text-white bg-transparent dark:text-white  focus:outline-none focus:ring-0 peer'
                                            // className="text-white text-shadow-sm text-lg bg-transparent tracking-wide md:px-0 px-3 bg-[#9867C5]"
                                            >
                                                <option className="text-white bg-[#ee3453] dark:bg-[#0f0f0f] hover:dark:bg-[#ee3453] hover:bg-[#0f0f0f]" value="en">English</option>
                                                <option className="text-white bg-[#ee3453] dark:bg-[#0f0f0f] hover:dark:bg-[#ee3453] hover:bg-[#0f0f0f]" value="ja">日本語</option>
                                            </select>

                                            <ThemeSwitcher />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="sm:hidden transition-all">
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1 ">
                                    <li className="text-white font-bold transition-colors duration-700 hover:bg-[#0f0f0f] dark:hover:bg-[#fae800] hover:text-white block px-3 py-2 rounded-md text-base">
                                        <Link href='/'>{t.home}</Link>
                                    </li>
                                    <li className="text-white font-bold transition-colors duration-700 hover:bg-[#0f0f0f] dark:hover:bg-[#fae800] hover:text-white block px-3 py-2 rounded-md text-base">
                                        <Link href='#about'>{t.about}</Link>
                                    </li>
                                    <li className="text-white font-bold transition-colors duration-700 hover:bg-[#0f0f0f] dark:hover:bg-[#fae800] hover:text-white block px-3 py-2 rounded-md text-base">
                                        <Link href='#projects'>{t.projects}</Link>
                                    </li>
                                    <li className="text-white font-bold transition-colors duration-700 hover:bg-[#0f0f0f] dark:hover:bg-[#fae800] hover:text-white block px-3 py-2 rounded-md text-base">
                                        <Link href='#contact'>{t.contact}</Link>
                                    </li>
                                    <select
                                        onChange={changeLanguage}
                                        defaultValue={locale}
                                        className='block py-2.5 px-0 w-18 ml-2 text-sm text-white bg-transparent dark:text-white focus:outline-none focus:ring-0  peer'
                                    >
                                        <option className="text-white bg-[#ee3453] hover:dark:bg-[#ee3453] hover:bg-[#0f0f0f]" value="en">English</option>
                                        <option className="text-white bg-[#ee3453] hover:dark:bg-[#ee3453] hover:bg-[#0f0f0f]" value="ja">日本語</option>
                                    </select>
                                    <ThemeSwitcher />
                                </div>
                            </Transition>
                        </Disclosure.Panel>


                    </>
                )
                }
            </Disclosure >
        </header >
    )
}
