import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative object-cover">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10  object-cover "
        src={bannerImg}
        alt="bannerImg" 
        style={{ borderRadius: '0 0 50% 50%' }}
      />
            {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]     bg-yellow-500   bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"  style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div> */}

      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]     bg-yellow-500 shadow-shadowOne flex justify-center items-center "   style={{ borderRadius: '30% 70% 45% 55% / 30% 30% 70% 70% ' }}></div>
   
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-yellow-500 shadow-shadowOne flex justify-center items-center"></div> */}
      {/* <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-yellow-500 rounded-full shadow-shadowOne flex justify-center items-center"></div> */}

      {/* <div  className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-yellow-500 shadow-shadowOne flex justify-center items-center"  style={{ borderRadius: '30% 70% 70% 30% / 48% 35% 65% 52%  ' }}></div> */}


      {/* <div className="absolute bottom-0 w-[300px] h-[260px] lgl:w-[400px] lgl:h-[346px] bg-yellow-500 shadow-shadowOne flex justify-center items-center"  style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}> */}
  {/* Hexagonal content here */}
{/* </div> */}


    </div>

    
  );
}

export default RightBanner