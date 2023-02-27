import React, { useState } from 'react';
import Title from './Title';
import config from '../../config';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
        }

        if (name.length > 0 && email.length > 0 && email.includes('@') && message.length > 0) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            };

            fetch(`https://getform.io/f/${config.GETFORM_SLUG}`, requestOptions);
            
            setError(false);
        }

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    {error && name.length <= 0 ? <label className="text-red-600">Please enter your name.</label> : ""}
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="mt-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    {error && email.length <= 0 ? <label className="text-red-600">Please enter your email.</label> : ""}
                    {email.length > 0 && !email.includes('@') ? <label className="text-red-600">Please enter a valid email address.</label> : ""}
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="mt-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />
                    {error && message.length <= 0 ? <label className="text-red-600">Please enter a message.</label> : ""}
                    <button
                        type="submit"
                        className="text-center inline-block mt-4 px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md hover:stroke-white"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;