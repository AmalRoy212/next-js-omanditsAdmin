import React from "react";

function Navbar() {
  return (
    <div className="z-20 w-full h-[80px] flex justify-center items-center px-5 py-3 absolute top-0 left-0">
      <div
        className="flex gap-10 justify-center relative items-center md:flex-row flex-col w-full h-full rounded-xl bg-[#e6e6e6]"
        style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }}
      >
        <img className="w-[60px] absolute left-2" src="https://genfinityglobal.com/images/logos/GG_Logo%20BLACK.png" alt="" />
        <div className="flex justify-center items-center gap-2 md:gap-5 h-full px-5 w-auto text-black text-[13px] font-light">
            <a href="https://omandits.com/">Home</a>
            <a href="https://omandits.com/delegateEnquiry.html">Delegates</a>
            <a href="https://omandits.com/sponsorshipEnquiry.html">Sponsors</a>
            <a href="https://omandits.com/speakersForm.html">Speakers</a>
        </div>
        <img className="w-[45px] absolute right-3 bg-slate-700 rounded-full" src="https://omandits.com/assets/images/dits.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
