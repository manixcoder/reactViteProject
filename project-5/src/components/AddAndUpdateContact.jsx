import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addDoc, collection, updateDoc ,doc} from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup';


const contactSchemavalidation =Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().email("Invalide Email").required("Email is required"),
    phone:Yup.string().required("Phone is required"),
})

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, 'contacts');
            await addDoc(contactRef, contact);

            onClose();
            toast.success("🦄 Contact added succefully");
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contact, id) => {
        console.log(id)
        try {
            const contactRef = doc(db, 'contacts', id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Contact updated successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik 
                validationSchema={contactSchemavalidation}
                initialValues={
                    isUpdate ? {
                        name: contact.name,
                        email: contact.email,
                        phone: contact.phone
                    }
                    :
                    {
                        name: '',
                        email: '',
                        phone: ''
                    }
                }
                    onSubmit={(values) => {
                        console.log(values);
                        isUpdate ? updateContact(values,contact.id) : addContact(values)
                    }}
                >
                    <Form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name'>Name</label>
                            <Field type="text" name="name" className='h-10 border' />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name="name"/>

                            </div>

                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='email'>Email</label>
                            <Field type="email" name="email" className='h-10 border' />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name="email"/>

                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='phone'>Phone</label>
                            <Field type="phone" name="phone" className='h-10 border' />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name="phone"/>

                            </div>
                        </div>

                        <button type="submit" className='bg-orange px-3py-1.5 border self-end'>
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact