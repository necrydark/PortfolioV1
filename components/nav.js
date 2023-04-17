import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



function Nav() {
    const [navigation, setNavigation] = useState([
        { name: 'C:\ Home', href: '#home', current: true },
        { name: 'D:\ About', href: '#about', current: false },
        { name: 'F:\ Projects', href: '#projects', current: false },
        { name: 'E:\ Contact', href: '#contact', current: false },
    ])





    function toggleActive(active) {
        const index = navigation.findIndex(x => x.name === active);
        setNavigation(navigation.map((item, i) => {
            if (i === index) {
                return { ...item, current: true }
            } else {

                return { ...item, current: false }
            }
        }))

    }


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
            <Disclosure as="nav" id='scrollNav' className={scroll ? "bg-[#BE93D4] fixed z-50 w-full transition-all duration-300 shadow-md" : "bg-[#BE93D4] fixed z-50 w-full transition-all duration-300 "}>
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 leading-[80px]">
                            <div className={scroll ? "relative flex items-center justify-between h-12 leading-[40px] transition-all duration-300" : " transition-all duration-300 relative flex items-center justify-between h-20 leading-[80px]"} >
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex-shrink-0 flex items-center text-center text-white   text-xl">
                                        <Link href='#home'>Michael C</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex font-bold  space-x-4 ">
                                            {navigation.map((item) => (
                                                <a
                                                    onClick={() => toggleActive(item.name)}
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? ' text-white hover:bg-[#9867C5] hover:text-white font-bold transition-colors duration-300ms' : ' font-bold text-white transition-colors duration-300ms hover:bg-[#9867C5] hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'section' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
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
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            onClick={() => toggleActive(item.name)}
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-white hover:bg-[#9867C5] hover:text-white font-bold transition-colors duration-700' : 'text-white font-bold transition-colors duration-700 hover:bg-[#9867C5] hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'section' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
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

export default Nav