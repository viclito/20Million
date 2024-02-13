import React from 'react';
import Styles from './Sublanding.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const SubLanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.SubLanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.captive.main.title}</h1>
                        <h2>{copy.captive.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubLanding;
