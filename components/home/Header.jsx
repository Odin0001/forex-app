import Image from "next/image"
import header from '../../public/header.jpg'

const Header = () => {
  return (
    <header className="relative w-full min-h-screen">
      <Image src={header} fill objectFit="cover" />
      <div className="absolute z-10 top-[30%] lg:left-[25px] lg:px-0 px-[10px] left-0 lg:w-[40vw] w-full lg:text-left text-center">
        <h1 className="font-bold xl:text-[70px] text-[55px] leading-tight tracking-wide">WHAT ARE YOU WAITING FOR ...</h1>
        <h2 className="text-3xl mt-10">Start investing now!</h2>
        <button className="py-2 px-4 mt-10 font-bold border-2 text-2xl border-darkerBlue text-white rounded-lg bg-[#101921] hover:bg-transparent hover:border-white hover:text-white transition duration-300 uppercase">get started</button>
      </div>
    </header>
  )
}

export default Header