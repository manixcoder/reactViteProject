import React from 'react'
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from 'react-icons/ai'

const App = () => {
  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <FaSearch className='text-white ml-1 text-3xl absolute' />
          <div className='flex'>
            <input type="text" className='flex-grow text-white pl-9 border bg-transparent border-white h-10 my-2 rounded-lg'
            />
          </div>
        
            <AiFillPlusCircle className='text-5xl text-white cursor-pointer'/>
          
        </div>
      </div>

    </div>
  )
}

export default App