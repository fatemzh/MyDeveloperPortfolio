import React from 'react'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactInfoCard
                    iconUrl={"../../assets/images/icons8-email-50.png"}
                    text="abidfatem@gmail.com"
                />
                <ContactInfoCard
                    iconUrl={"../../assets/images/icons8-github.svg"}
                    text="https://github.com/fatemzh"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Contact
