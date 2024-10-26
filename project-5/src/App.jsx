import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from 'react-icons/ai';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri'
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen= ()=>{
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false);
  }


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(contactLists);
        setContacts(contactLists);
      } catch (error) {

      }


    };

    getContacts();
  }, []);
  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar />
        <div className='flex gap-2'>
          <div className='flex relative items-center flex-grow'>
            <FaSearch className='text-white ml-1 text-3xl absolute' />
            <div className='flex'>
              <input type="text" className='flex-grow text-white pl-9 border bg-transparent border-white h-10 my-2 rounded-lg'
              />
            </div>

            <AiFillPlusCircle onClick={ onOpen } className='text-5xl text-white cursor-pointer' />

          </div>
        </div>

        <div className='mt-4 flex gap-3  flex-col'>
          {
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          Hi manish
        </Modal>
    </>
  )
}

export default App