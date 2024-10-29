import React from 'react'


const Modal = ({children, className, isVisible}) => {
    return (
        <>
        {
            isVisible?
            <div className={`fixed bg-transparent w-full h-[100dvh] top-0 left-0 flex items-center justify-center z-[1000]`}>
                <div className=' w-full h-full relative'>
                    <div className='w-full h-full absolute flex justify-center items-center z-[10]'>
                        <div className={`${className}`}>
                            {children}
                        </div>
                    </div>
                    <div className=' w-full h-full absolute bg-ash top-0 left-0 opacity-60 z-[1]' />
                </div>
            </div> : <></>
        }
        </>
        
    )
}

export default Modal;