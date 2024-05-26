'use client'
import Link from "next/link"
import { MdCandlestickChart } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleMobileMenu = () => {
    setIsOpen(prev => !prev)
  }

  const handleScroll = () => {
    const position = window.scrollY
    setIsScrolled(position > 0)
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return(
      () => {
        window.removeEventListener('scroll', handleScroll)
      }
    )
  }, [])

  return (
    <>
      <nav className={`w-full h-[70px] xl:px-[80px] px-[35px] flex justify-between items-center fixed top-0 left-0 z-20 ${isScrolled ? 'bg-slate-800' : 'bg-transparent'} transition duration-300`}>
        <h1 className="text-2xl tracking-wider">Light Weight trading</h1>
        <div className="xl:flex xl:items-center gap-10 hidden">
          <Link href='/' className="uppercase tracking-wider">charts</Link>
          <Link href='/' className="uppercase tracking-wider">testimonials</Link>
          <Link href='/' className="uppercase tracking-wider">faq</Link>
          <Link href='/' className="uppercase tracking-wider">about us</Link>
          <Link href='/' className="uppercase tracking-wider">contact</Link>
        </div>
        <div className="xl:flex xl:items-center gap-10 hidden">
          <Link href='/register'><button className="py-2 px-4 border border-white rounded-lg text-white bg-transparent hover:bg-lightBlue hover:border-lightBlue transition duration-300 uppercase">Register</button></Link>
          <Link href='/login'><button className="py-2 px-4 border border-lightBlue text-white rounded-lg bg-lightBlue hover:bg-transparent hover:border-white transition duration-300 uppercase">Login</button></Link>
        </div>


        {/* -----------------------MOBILE MENU-------------------- */}
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="xl:hidden block absolute top-0 left-0 z-50 w-full h-screen bg-[rgba(0,0,0,0.8)] text-white text-2xl flex flex-col items-center justify-center gap-6"
      >
        <Link href='/' className="uppercase font-bold tracking-wider">home</Link>
        <Link href='/' className="uppercase font-bold tracking-wider">testimonials</Link>
        <Link href='/' className="uppercase font-bold tracking-wider">faq</Link>
        <Link href='/' className="uppercase font-bold tracking-wider">about us</Link>
        <Link href='/' className="uppercase font-bold tracking-wider">contact</Link>
        <div className="flex justify-center items-center gap-4">
          <Link href='/register'><button className="py-2 px-4 border border-white text-white rounded-lg font-semibold bg-transparent hover:bg-darkerBlue hover:border-darkerBlue transition duration-300 uppercase">Register</button></Link>
          <Link href='/login'><button className="py-2 px-4 border border-darkerBlue text-white font-semibold rounded-lg bg-darkerBlue hover:bg-transparent hover:border-white transition duration-300 uppercase">Login</button></Link>
        </div>

        <button onClick={handleMobileMenu} className="absolute top-8 right-10">
          <IoCloseCircle size={50} />
        </button>
      </motion.nav>

      <button className="xl:hidden block" onClick={handleMobileMenu}>
        <MdCandlestickChart size={50} color="white" />
      </button>
      </nav>

      
    </>
  )
}

export default Navbar