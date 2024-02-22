"use client";
import React, { useState, useEffect } from "react";
import Register from "../ui/delegates/register/Register";
import Verify from "../ui/delegates/verify/Verify";
import emailjs from "@emailjs/browser";
import Loader from "../ui/loader/Loader";
import Navbar from "../ui/delegates/navbar/Navbar";
import Footer from "../ui/delegates/footer/Footer";

function Page() {
  const [error, setError] = useState(null);
  const [register, setRegister] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    (function () {
      emailjs.init({
        publicKey: "iMBmW4ddMSG0gl5yp",
      });
    })();

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="h-auto min-h-[100vh] relative">
      <img
        src="https://images.squarespace-cdn.com/content/v1/61ca8648a4e8bf04995cf3d7/9c0bc974-8659-4702-a76a-49cb4d5c68ff/Gradient+2.png"
        className="hidden md:flex absolute top-0 w-full h-full object-cover overflow-hidden"
        alt=""
      />
      <img
        src="https://cfcdn.apowersoft.info/astro/picwish/_astro/hero-background@750w.d5552c26.jpeg"
        className="md:hidden flex absolute top-0 w-full h-full object-cover overflow-hidden"
        alt=""
      />
      {/* https://images.vexels.com/media/users/3/145258/raw/34c0da699da0478a4086d0760f376b2c-minimalist-wavy-white-background.jpg */}
      <Navbar />
      <div className="w-full h-[120vh]">
        {register ? (
          <Register
            error={error}
            setError={setError}
            setRegister={setRegister}
          />
        ) : (
          <Verify
            error={error}
            setError={setError}
            setRegister={setRegister}
            setPopUp={setPopUp}
            popUp={popUp}
          />
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
      {/* {<Loader/>} */}
    </div>
  );
}

export default Page;
