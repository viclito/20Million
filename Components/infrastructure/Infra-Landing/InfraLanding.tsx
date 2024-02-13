import React from 'react';
import Styles from './landing.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const InfraLanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.InfraLanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.infraManagement.main.title}</h1>
                        <h2>{copy.infraManagement.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfraLanding;
