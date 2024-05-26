import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const MainPrices = () => {
  return (
    <section className="w-full min-h-screen py-10 flex justify-center items-center">
      <div className="sm:w-[80%] w-[90%] h-[80%] rounded-2xl grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col h-max shadow-md shadow-gray-400 rounded-lg p-[1px]">
          <div className="flex justify-between items-center p-2 rounded-t-lg bg-darkestBlue">
            <span className="font-semibold">EUR/USD</span>
            <span className="tracking-widest text-[#f65144] text-2xl">+0.41% <IoMdArrowDropdown className="inline-block" color="#f65144" /></span>
          </div>

          <div className="flex justify-between item-center gap-6 pb-4 px-6 pt-10 nums-gradient">
            <div>
              <p className="text-gray-400">Bid</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
            <hr className="rotate-90 origin-top-left translate-x-[50%] w-16 border-gray-400" />
            <div>
              <p className="text-gray-400">Ask</p>
              <span className="text-[#f65144] tracking-wider text-xl nums-down">1.082</span>
              <span className="text-[#f65144] tracking-wider text-4xl ml-1 nums-down">30</span>
            </div>
          </div>

          <div className="bg-black w-full flex justify-between items-center py-2 px-4 rounded-b-lg">
            <div className="flex gap-6 rounded-full bg-[rgba(255,255,255,0.08)]  px-3">
              <span className="font-semibold text-[rgba(255,255,255,0.4)]">Spread</span>
              <span className="font-semibold text-[rgba(255,255,255,0.8)]">10 pips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-lightBlue">BUY</span>
              <span className="font-semibold bg-[rgba(255,255,255,0.2)] px-2 rounded-full text-[#f65144]">SELL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// #f65144
export default MainPrices