import React from 'react';
// const validator = require("email-validator");


function ContactForm() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validator.validate(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }

    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }


    return (
        <section>
            <h2 className="title-styling">Contact/Follow Me</h2>
            <div className="contact-container">
            <form className="contact-form">
                <div className="contact-info">
                    <div className="contact-links-container">
                        <h3><i className="far fa-envelope"></i> Email</h3>
                        <a className="contact-links" href="mailto:chriswein12@yahoo.com">chriswein12@yahoo.com</a>
                    </div>
                    <div className="contact-links-container">
                        <h3><i className="fab fa-linkedin"></i> LinkedIn</h3>
                        <a className="contact-links" href="https://github.com/chriswein12" target="_blank" rel="noreferrer">linkedin.com/in/chriswein/</a>
                    </div>
                    <div className="contact-links-container">
                        <h3><i className="fab fa-github"></i> GitHub</h3>
                        <a className="contact-links" href="https://github.com/chriswein12" target="_blank" rel="noreferrer">github.com/chriswein12</a>
                    </div>
                </div>
            </form>
            {/* <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" onBlur={handleChange} defaultValue={name} name="name" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" onBlur={handleChange} defaultValue={email} name="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5" />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form> */}
            </div>
        </section>
    )
}

export default ContactForm;