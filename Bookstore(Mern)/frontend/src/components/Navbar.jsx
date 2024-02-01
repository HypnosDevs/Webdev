import logo_white from '../assets/icons/book-black.png'
import logo_black from '../assets/icons/book-white.png'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';


export default function Navbar({ theme, setTheme }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const { user } = useContext(AuthContext);
    console.log(user);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // navigation items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]


    const handleTheme = () => {
        theme == 'white' ? setTheme('black') : setTheme('white');
        // console.log("change theme");
    };

    const isThemeWhite = theme === 'white';


    return (
        <header className='w-full bg-cyan-100 fixed top-0 left-0 right-0 transition-all ease-in duration-40'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-teal-700 text-white" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>

                    <Link to="/" className='text-2xl font-bold flex item-center gap-2'><img src={isSticky ? logo_black : logo_white} alt="logo" className=' h-10 w-10' />Supajit</Link>
                    < ul className='md:flex space-x-12 hidden' >
                        {
                            navItems.map(({ link, path }) => {
                                return <Link key={path} to={path} className={`block font-bold uppercase ${isSticky ? "text-white" : "text-black"} text-base cursor-pointerk`}>{link}</Link>
                            })
                        }
                    </ul >

                    {/* btn for large devicec (responsive)*/}
                    < div className='space-x-12 hidden lg:flex items-center' >
                        {/* <button><FaBars className='w-5 hover:text-green-700' />

                        </button>{ */}
                        {
                            user ? user.email : (<><Link to="/login" className={`block uppercase ${isSticky ? "text-white" : "text-black"} cursor-pointer font-bold text-base hover:underline`}>login</Link><span className='font-bold'>OR</span><Link to="/signup" className={`block uppercase ${isSticky ? "text-white" : "text-black"} cursor-pointer font-bold text-base hover:underline`}>signup</Link></>)
                        }

                    </div >


                    {/*  btn for the mobile devices*/}
                    < div className='md:hidden' >
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>{isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBars className='h-5 w-5 text-black' />}</button>

                    </div >

                </div >

                {/*small device*/}
                < div className={`space-y-4 px-4 mt-16 py-7 ${isSticky ? "bg-teal-500" : "bg-cyan-500"} ${isMenuOpen ? "block fixed top-2 right-0" : "hidden"}`
                }>
                    {user ? <div className='block text-white text-base cursor-pointer'>
                        {user.email}
                    </div> : <><div className='block text-white text-base cursor-pointer'>
                        <Link to="/login" className={`block uppercase ${isSticky ? "text-white" : "text-black"} cursor-pointer font-bold text-base hover:underline`}>login</Link>
                    </div><div className='block text-white text-base cursor-pointer'>
                            <Link to="/signup" className={`block uppercase ${isSticky ? "text-white" : "text-black"} cursor-pointer font-bold text-base hover:underline`}>signup</Link>
                        </div></>}
                    {
                        navItems.map(({ link, path }) => {
                            return <Link key={path} to={path} className='block uppercase text-white text-base cursor-pointer'>{link}</Link>
                        })
                    }
                </div >
            </nav >
        </header >

    );
}