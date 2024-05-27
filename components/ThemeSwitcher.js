import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from 'framer-motion'

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;



    return (
        <AnimatePresence initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <li className='text-white font-bold transition-colors duration-700 dark:hover:bg-[#ee3453] hover:bg-[#0f0f0f] hover:text-white px-3 py-2 rounded-md text-base h-9 block md:w-auto w-11 '>
                    {currentTheme === 'dark' ? (
                        <button onClick={() => setTheme('light')}>
                            <SunIcon className="w-5 h-5 text-white" />
                        </button>
                    ) : (
                        <button onClick={() => setTheme('dark')}>
                            <MoonIcon className="w-5 h-5 text-white" />
                        </button>
                    )}
                </li>
            </motion.div>

        </AnimatePresence >

    )
}

export default ThemeSwitcher