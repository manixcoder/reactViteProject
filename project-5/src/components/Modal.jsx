import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ onClose, isOpen, children }) => {
    return (
        <>
            {
                isOpen &&

                <>
                    <div className='z-50 m-auto relative min-h-[200px] max-w-[80%] bg-white p-4'>
                        <div className='flex justify-end'>
                            <AiOutlineClose onClick={onClose} className='text-2xl self-end' />
                        </div>

                    </div>



                    <div onClick={onClose} className='m-a absolute top-0 z-40 backdrop-blur h-screen w-screen' />
                </>
            }

        </>
    )
}

export default Modal