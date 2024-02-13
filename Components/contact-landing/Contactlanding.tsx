import React from 'react';
import Styles from './landing.module.scss';

const Contactlanding = () => {
    return (
        <>
            <div className={Styles.ContactLanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>Get in Touch with Us!</h1>
                        <h2>We’d love to hear from you!</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactlanding;
