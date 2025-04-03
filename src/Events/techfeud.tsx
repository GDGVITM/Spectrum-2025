import techfeudImage from './posters/techfeud.png'
import techfeudImageog from './posters/techfeudog.png'
import '../App.css'
import { Arrow, Eventtitle, Techfeudprize } from './svg'

export default function Techfeud() {
  return (
    <>
      <div className='min-h-screen w-full p-6'>
        <div className="relative">
          {/* Trapezoid shape at top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[300px] filter drop-shadow-[0_-13px_29.7px_rgba(0,0,0,0.70)]">
            <div className="h-12 bg-(--minecraft-grey) relative shadow-[inset_0_1px_0_0_#D9D9D9]">
              <div className="absolute top-0 rounded-bl-lg rounded-tl-lg -left-6 h-full w-12 bg-(--minecraft-grey) origin-top-right -skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
              <div className="absolute top-0 rounded-br-lg rounded-tr-lg -right-6 h-full w-12 bg-(--minecraft-grey) origin-top-left skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
              <span className='pl-5'> <Eventtitle /> </span>
            </div>
          </div>

          {/* Main container */}
          <div className='bg-(--minecraft-grey) min-h-[calc(100vh-4rem)] w-[90vw] max-w-7xl  mx-auto rounded-2xl'>
            <div className='h-20 shadow-[inset_0_1px_0_0_#FFF] rounded-4xl bg-(--minecraft-grey) w-full'>
              {/* nothing but for blur effect on the image */}
            </div>
            <div className="relative h-[560px] w-full mx-auto overflow-hidden">
              <div
                style={{ backgroundImage: `url(${techfeudImage})` }}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full h-full"
              />
              <div className="relative z-10 h-full w-full p-6 text-white">
                {/* Your content goes here */}
                <h1 className="text-4xl font-bold flex flex-row"> <p>Tech Feud</p> <span className='cursor-pointer'><Arrow width={80} height={80} /></span> </h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente omnis exercitationem ex voluptatum ipsam voluptas mollitia voluptatem! Labore iusto nam pariatur itaque esse mollitia eaque cupiditate doloribus tempore minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore mollitia dicta magnam molestias delectus aspernatur unde ipsum quisquam laudantium?</p>
                <p>DATE 45 AND 21 APRIL '45</p>
                <button type="button"></button>
                <div className='flex flex-row'>
                  <Techfeudprize />
                  {/* <aistart /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}

      <div className='min-h-screen w-full p-6'>
        <div className="relative">
          {/* Trapezoid shape at top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[300px] filter drop-shadow-[0_-13px_29.7px_rgba(0,0,0,0.70)]">
            <div className="h-12 bg-(--minecraft-grey) relative shadow-[inset_0_1px_0_0_#D9D9D9]">
              <div className="absolute top-0 rounded-bl-lg rounded-tl-lg -left-6 h-full w-12 bg-(--minecraft-grey) origin-top-right -skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
              <div className="absolute top-0 rounded-br-lg rounded-tr-lg -right-6 h-full w-12 bg-(--minecraft-grey) origin-top-left skew-x-[20deg] shadow-[inset_0_1px_0_0_#FFF]"></div>
              <span className='pl-5'> <Eventtitle /> </span>
            </div>
          </div>

          {/* Main container */}
          <div className='bg-(--minecraft-grey) min-h-[calc(100vh-4rem)] w-[90vw] max-w-7xl  mx-auto rounded-2xl'>
            <div className='h-20 shadow-[inset_0_1px_0_0_#FFF] rounded-4xl bg-(--minecraft-grey) w-full'>
              {/* nothing but for blur effect on the image */}
            </div>
            <div className="relative h-[560px] w-full mx-auto overflow-hidden">
              <div
                style={{ backgroundImage: `url(${techfeudImageog})` }}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full h-full"
              />
              <div className="relative z-10 h-full w-full p-6 text-white">
                {/* Your content goes here */}
                <h1 className="text-4xl font-bold flex flex-row"> <p>Tech Feud</p> <span className='cursor-pointer'><Arrow width={80} height={80} /></span> </h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente omnis exercitationem ex voluptatum ipsam voluptas mollitia voluptatem! Labore iusto nam pariatur itaque esse mollitia eaque cupiditate doloribus tempore minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempore mollitia dicta magnam molestias delectus aspernatur unde ipsum quisquam laudantium?</p>
                <p>DATE 45 AND 21 APRIL '45</p>
                <button type="button"></button>
                <div className='flex flex-row'>
                  <Techfeudprize />
                  {/* <aistart /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
