import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {
                isOpen &&

                <>
                    <div className='z-50  m-auto relative min-h-[200px] max-w-[80%]
                     bg-white 
                     p-4'>
                        <div className='flex justify-end'>
                            <AiOutlineClose onClick={onClose} className='text-2xl self-end' />
                        </div>
                        {children}

                    </div>



                    <div onClick={onClose} className='m-a absolute top-0 z-40 backdrop-blur h-screen w-screen' />
                </>
            }

        </>,document.getElementById("modal-root")
    )
}

export default Modal