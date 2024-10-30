import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (name === '') {
            alert('Please enter your name');
            return; // Exit the function if validation fails
        }
        if (email === '') {
            alert('Please enter your email address');
            return; // Exit the function if validation fails
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return; // Exit the function if validation fails
        }

        if (message === '') {
            alert('Please enter a message');
            return; // Exit the function if validation fails
        }

        // If all validations pass, you can proceed with form submission logic here
        alert('Form submitted successfully!'); // Placeholder for successful submission
    };

    return (
        <section id="contact">
            <h2>Contact Information</h2>
            <p>
                For more information, please fill out the information below:
            </p>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email Address</label>
                <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Message</label>
                <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Submit</button> {/* Specify button type */}
            </form>

            <p>
                Find me on GitHub at 
                <a href="https://github.com/Jessica-Lee1424" target="_blank" rel="noopener noreferrer">
                    Jessica-Lee1424's GitHub
                </a>
            </p>
            <p>
                or connect with me on LinkedIn 
                <a href="https://www.linkedin.com/in/jessica-gonnella-35a29262" target="_blank" rel="noopener noreferrer">
                    <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.481 0 1.08 0h13.84C15.519 0 16 .513 16 1.146v13.708C16 15.487 15.519 16 14.92 16H1.08C.481 16 0 15.487 0 14.854V1.146zM4.5 13.5V8.5H3v5h1.5zm-1.5-6h1.5V6H3v1.5zm9.5 6V10c0-1.086-.23-1.5-1.5-1.5-1.086 0-1.5.414-1.5 1.5v3h-1.5V8.5h1.5v.5c.5-.5 1.5-1 2.5-1 1.5 0 2 1 2 2.5v3h-1.5z"/>
                    </svg>
                </a>
            </p>
            <p>
                or check out my Stack Overflow 
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                    <svg className="stack-overflow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <path d="m 9.3049611,36.847632 4.4013079,0.04316 -0.153442,19.598393 29.291259,0 0,-19.527506 4.637782,0 0,24.287331 -38.2006795,0 0.023777,-24.401371 z" />
                    </svg>
                </a>
            </p>
        </section>
    );
};

export default Contact;