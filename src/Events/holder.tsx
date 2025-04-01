import React from 'react'
import bgimage from './posters/common_bg.png'
import '../App.css'

export default function Holder() {
  return (
    <>
    <div className='bg--300 h-100 p-10'>
      <div className="relative">
        {/* Trapezoid shape at top */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[200px] filter drop-shadow-[0_-13px_29.7px_rgba(0,0,0,0.70)]">
          <div className="h-8 bg-(--minecraft-grey) relative shadow-[inset_0_1px_0_0_#FFF]">
            <div className="absolute top-0 rounded-bl-lg rounded-tl-lg -left-6 h-full w-12 bg-(--minecraft-grey) origin-top-right -skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
            <div className="absolute top-0 rounded-br-lg rounded-tr-lg -right-6 h-full w-12 bg-(--minecraft-grey) origin-top-left skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
          </div>
        </div>
        {/* Main container */}
        <div className='bg-(--minecraft-grey) shadow-[inset_0_1px_0_0_#FFF] min-h-[200px] w-[800px] mx-auto rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
          {/* Your content goes here */}
        </div>
      </div>
      </div>
    </>
  )
}
