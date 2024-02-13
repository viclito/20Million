import React from 'react';
import Styles from './landing.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const Applanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.Applanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.appSupport.main.title}</h1>
                        <h2>{copy.appSupport.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Applanding;
