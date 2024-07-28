import React from 'react'

export default function IntroC() {
  return (
    <div className=' grid lg:grid-cols-2  bg-slate-200'>
    <div  className="   lg:flex lg:flex-row flex-col  lg:gap-48 gap-5 "  > 
    <div className=" lg:h-[400px] h-200 my-5 border px-9 flex flex-col  justify-center ">
    <h1 className=" font-mono  font-semibold text-4xl  tracking-wider "> Welcome in books library</h1>
    <p className='font-mono my-2  lg:text-xm  lg:w-[400px] justify-start font-thin '> Pick up your favorite book—whether its fantasy, self-help, drama, romance, or any genre you love—and dive into its pages.</p>
    <button className="rounded-sm font-mono w-40 m-4 p-2 text-white bg-blue-600 hover:bg-blue-900 hover:bottom-2 hover: border-bl text-[18px]  tracking-widest">See all </button>
    </div>
    </div>
    <div className="  border items-center  flex flex-col lg:flex-row">
         <img className='my-3 ' src='books3.png'></img>
    </div>
  

    
    
    </div>
  )
}
