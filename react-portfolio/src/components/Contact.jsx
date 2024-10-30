import React from 'react';
import Header from './Header'; // Ensure you have the Header component imported

function Contact() {
    return (
        <section>
            <h2>Contact Information</h2>
            <p>
                I can be reached at 
                <a href="mailto:jgonnella14@gmail.com"> jgonnella14@gmail.com</a> or on LinkedIn at 
                <a href="https://www.linkedin.com/in/jessica-gonnella-35a29262" target="_blank" rel="noopener noreferrer"> my LinkedIn profile</a>.
            </p>
            <div className="badge-base LI-profile-badge" 
                 data-locale="en_US" 
                 data-size="medium" 
                 data-theme="dark" 
                 data-type="VERTICAL" 
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