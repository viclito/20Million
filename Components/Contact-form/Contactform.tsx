import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './contact.module.scss';

const Contactform: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');

    function validateEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email format validation
        return regex.test(String(email).toLowerCase());
    }

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const name = e.target.value;
        setName(name);

        if (name.trim() !== '') {
            setNameError('');
        }
    };
    const handleEmailChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const email = e.target.value;
        setEmail(email);

        if (validateEmail(email)) {
            setEmailError('');
        } else {
            setEmailError('Enter the Correct Email');
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name) {
            setNameError('Enter your Name');
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('Enter your Email');
        } else {
            setEmailError('');
        }
    };

    return (
        <div>
            <div className={styles.contactbox}>
                <div className={styles.inner}>
                    <div className={styles.para}>
                        <p>
                            Looking to consult with our experts on a project? Or
                            do you want to apply for a job and become a part of
                            the 20Million culture? In any case, we are open to
                            working with you. Leave us a message and our team
                            will get back to you within 24 hours.
                        </p>
                    </div>
                    <div className={styles.form}>
                        <form action='' onSubmit={handleSubmit}>
                            <div className={styles.top}>
                                <div className={styles.input}>
                                    <input
                                        type='text'
                                        placeholder='Enter your Name'
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                    {nameError && (
                                        <span className={styles.error}>
                                            {nameError}
                                        </span>
                                    )}
                                </div>

                                <div className={styles.input}>
                                    <input
                                        type='email'
                                        name=''
                                        id=''
                                        placeholder='Enter your Email'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    {emailError && (
                                        <span className={styles.error}>
                                            {emailError}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className={styles.middle}>
                                <div className={styles.input}>
                                    <input
                                        type='tel'
                                        name=''
                                        id=''
                                        placeholder='Phone Number'
                                    />
                                </div>
                                <div className={styles.input}>
                                    <select name='userType' id='userType'>
                                        <option
                                            value=''
                                            disabled
                                            selected
                                            hidden
                                        >
                                            Select Category
                                        </option>
                                        <option value='professional'>
                                            Professional
                                        </option>
                                        <option value='jobSeeker'>
                                            Job Seeker
                                        </option>
                                        <option value='intern'>Intern</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <textarea
                                    name=''
                                    id=''
                                    rows={4}
                                    placeholder='Message'
                                ></textarea>
                            </div>

                            <div className={styles.btn}>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactform;
