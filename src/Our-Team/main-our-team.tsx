// Integrate the navbar abd footer and create the main body for page
import bg from '../assets/Union.png'

export default function Our_Team(){
    return(
        <div className='  h-screen w-screen bg-black overflow-hidden flex'>
            <div style={{ backgroundImage: `url(${bg})` }}
            className='bg-cover w-full h-full relative shrink'>
                <div className="absolute top-32 left-0 right-0 flex flex-col items-center text-center px-4">
                    <p className="text-[#A1E9A5] mb-2 text-6xl">07 // ABOUT TEAM</p>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
                        MEET THE TEAM THAT MAKES THE MAGIC HAPPEN
                    </h1>
                    <p className="text-white max-w-2xl">Our talented team brings together expertise from diverse backgrounds to create exceptional experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}