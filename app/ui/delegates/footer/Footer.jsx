import React from 'react'

function Footer() {
  return (
    <div className="z-20 w-full min-h-[120px] flex justify-center items-center px-5 py-3 absolute bottom-0 left-0">
      <div
        className="flex gap-10 justify-center relative items-center md:flex-row flex-col w-full h-[120px] rounded-xl bg-[#e9f2ff]"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      >
        <h3 className='text-black font-bold'>ORGANIZED BY</h3>
        <img className="w-[90px] " src="https://genfinityglobal.com/images/logos/GG_Logo%20BLACK.png" alt="" />
        <p className='text-slate-500 text-[12px] font-normal md:absolute bottom-0'>Copyright © 2024 All rights reserved | GENFINITY GLOBAL</p>
      </div>
    </div>
  )
}

export default Footer