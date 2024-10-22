import React from 'react'

const WaitingSpinner = () => {
  
    const [isWaiting, setWaiting] = React.useState(false);

    const Spinner= () => {
        return (
           <div className={`${isWaiting? 'block' : 'hidden'} w-screen top-0 left-0 h-[100dvh] z-[100] flex items-center justify-center fixed`}>
               <div className=' relative w-full h-full flex items-center justify-center'>
                   <div className='px-10 py-5 flex flex-col gap-3 items-center justify-start z-10 rounded-xl'>
                        <svg width="75" height="75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
                            <path fill='#6750A4' d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
                                <animateTransform attributeName="transform" type="rotate" dur="0.85s" values="0 12 12;360 12 12" repeatCount="indefinite"/>
                            </path>
                        </svg>
                   </div>
                   <div className=' absolute w-full h-full bg-white opacity-50 z-0'></div>
               </div>
           </div>
       )
    }

    return {Spinner, setWaiting}

}

export default WaitingSpinner;