import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './contact.module.scss';

interface ContactState {
    show: boolean;
    name: string;
    email: string;
    projectRequirements: string;
    nameError: string;
    emailError: string;
}

const Contact: React.FC = () => {
    const [state, setState] = useState<ContactState>({
        show: false,
        name: '',
        email: '',
        projectRequirements: '',
        nameError: '',
        emailError: '',
    });

    const visible = () => {
        setState((prevState) => ({ ...prevState, show: !prevState.show }));
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));

        if (state.name) {
            setState((prevstate) => ({
                ...prevstate,
                nameError: '',
            }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!state.name) {
            setState((prevState) => ({
                ...prevState,
                nameError: 'Please enter the name',
            }));
        } else {
            setState((prevState) => ({ ...prevState, nameError: '' }));
        }

        if (!state.email) {
            setState((prevState) => ({
                ...prevState,
                emailError: 'Please enter the email',
            }));
        } else {
            setState((prevState) => ({ ...prevState, emailError: '' }));
        }
    };

    return (
        <>
            <div
                className={
                    !state.show
                        ? styles.contact
                        : `${styles.contact} ${styles.active}`
                }
            >
                <div className={styles.outer} onClick={visible}>
                    {' '}
                    Get In Touch
                </div>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {`Let's Discuss Project Ideas`}
                    </div>
                    <form action='' onSubmit={handleSubmit}>
                        <div className={`${styles.name} ${styles.same}`}>
                            <input
                                type='text'
                                name='name'
                                value={state.name}
                                onChange={handleInputChange}
                                placeholder='Full Name *'
                            />
                        </div>
                        {state.nameError && (
                            <p className={styles.error}>{state.nameError}</p>
                        )}
                        <div className={`${styles.email} ${styles.same}`}>
                            <input
                                type='email'
                                name='email'
                                value={state.email}
                                onChange={handleInputChange}
                                placeholder='Email *'
                            />
                        </div>
                        {state.emailError && (
                            <p className={styles.error}>{state.emailError}</p>
                        )}
                        <div className={styles.textarea}>
                            <textarea
                                name='projectRequirements'
                                value={state.projectRequirements}
                                onChange={handleInputChange}
                                cols={30}
                                rows={10}
                                placeholder='Project Requirements *'
                            ></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
