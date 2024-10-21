import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
    const onViaCallSubmit=()=>{
        console.log("I am from call");
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAI FORM" icon={<HiMail fontSize="24px" />} />
                <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text Message</label>
                        <textarea name="text" rows="8" id="text" />
                    </div>
                    <div style={{
                        display:'flex',justifyContent:'end'
                    }}><Button text="Submit"  /></div>

                </form>
            </div>
            <div className={styles.cotact_image}>
                <img src='/images/contact.svg' alt='banner'/>
            </div>


        </section>
    )
}

export default ContactForm
