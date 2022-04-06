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
            <Disclosure as="nav" id='scrollNav' className="bg-[#BE93D4] fixed z-50 w-full transition-all duration-300 shadow-md">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 leading-[80px]">
                            <div className={scroll ? "relative flex items-center justify-between h-12 leading-[40px] transition-all duration-300 " : " transition-all duration-300 relative flex items-center justify-between h-20 leading-[80px]"} >
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
                                    <div className="flex-shrink-0 flex items-center text-center text-white font-bold text-xl">
                                        <Link href='/'>Michael C</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex font-bold  space-x-4 ">
                                            {navigation.map((item) => (
                                                <a
                                                    onClick={() => toggleActive(item.name)}
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? ' text-white hover:bg-[#9867C5] hover:text-white font-bold' : ' font-bold text-white hover:bg-[#9867C5] hover:text-white',
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


                        <Disclosure.Panel className="sm:hidden">
                            <Transition

                                show={open}
                                enter=" transition-all duration-150 ease-out"
                                enterFrom="transform opacity-0  h-0"
                                enterTo="transform opacity-100 h-44"
                                leave="duration-100 transition-all ease-in"
                                leaveFrom="opacity-100 transform  h-44"
                                leaveTo=" transform  h-0"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1 ">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            onClick={() => toggleActive(item.name)}
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-white hover:bg-[#9867C5] hover:text-white font-bold' : 'text-white font-bold hover:bg-[#9867C5] hover:text-white',
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