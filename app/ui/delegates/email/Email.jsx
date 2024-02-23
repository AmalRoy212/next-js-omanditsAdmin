import React from 'react'

function Email({setEmail, handleFinalSubmit}) {
    

    return (
        <div className='w-full h-full absolute top-0 left-0 bg-[#0000009e] flex justify-center items-center'>
            <div className="w-[90%] h-[50%] md:w-[40%] rounded-lg border border-[#0000003c] shadow-2xl backdrop-filter backdrop-blur bg-cover bg-center flex flex-col gap-10 justify-center items-center">
                <h1 className='px-10 text-center font-bold font-mono'>PLEASE ENTER YOUR COMPANY EMAIL ADDRESS TO COMPLETE THE VERIFICATION</h1>
                 <input onChange={(e) => setEmail(e.target.value)} className='w-[80%]  h-[40px] px-2 rounded-xl bg-white text-black' type="email" name="email" id="email" placeholder='Please enter your company mail Id' required />
                 <button onClick={handleFinalSubmit} className='flex items-center gap-2 text-[18px] bg-blue-700 py-2 px-10  rounded-2xl hover:border hover:bg-blue-900' >Submit</button>

            </div>
        </div>
      )
}

export default Email