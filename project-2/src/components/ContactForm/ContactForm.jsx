import { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    
    const onSubmit = (event) => {
        event.preventDefault(); // Prevents page refresh
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        //console.log("Name",event.target[0].value);
        // console.log("Email",event.target[1].value);
        // console.log("Text Area",event.target[2].value);
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAI FORM" icon={<HiMail fontSize="24px" />} />
                <form onSubmit={onSubmit}>
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
                    <div style={{ display: 'flex', justifyContent: 'end' }}><Button text="Submit" /></div>
                    <div>{name + " " + email + " " + text}</div>

                </form>
            </div>
            <div className={styles.cotact_image}>
                <img src='/images/contact.svg' alt='banner' />
            </div>


        </section>
    )
}

export default ContactForm
