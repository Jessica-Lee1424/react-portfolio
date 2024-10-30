import { useState } from "react";
function Contact() {
    const [name, setName]= useState ('')
    const [email, setEmail]= useState ('')
    const [message, setMessage]= useState ('')
    const handleSubmit= () => {
        if (name==='') {
            alert ('Please enter your name')
        }
        if (email==='') {
            alert ('Please enter email address')
        }
        if (message==='') {
            alert ('Please enter a message')
        }
    }
    return (
        <section id="contact">

            <h2>Contact Information</h2>
            <p>
                For more information, please fill out the information below:
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input name='name' value={name} onChange={(e)=> setName(e.value)}></input>
                    <label>Email Address</label>
                    <input name='email' value={email} onChange={(e) => setEmail(e.value)}></input>
                    <label>Message</label>
                    <textarea name='message' value={message} onChange={(e) => setMessage(e.value)}></textarea>
                    <button>Submit</button>

                </form>
                <a href="mailto:jgonnella14@gmail.com"> jgonnella14@gmail.com</a> or </p>
            <div className="badge-base LI-profile-badge" 
                 data-locale="en_US" 
                 data-size="medium" 
                 data-theme="light" 
                 data-type="HORIZONTAL" 
                 data-vanity="jessica-gonnella-35a29262" 
                 data-version="v1">
                <a className="badge-base__link LI-simple-link" 
                   href="https://www.linkedin.com/in/jessica-gonnella-35a29262" 
                   target="_blank" 
                   rel="noopener noreferrer">View my LinkedIn profile</a>
            </div>
        </section>
    );
};

export default Contact;