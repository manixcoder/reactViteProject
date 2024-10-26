import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from 'react-icons/ai';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri'
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();




  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          //console.log(contactLists);
          setContacts(contactLists);
          return contactLists;
        })

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

            <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' />

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
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App