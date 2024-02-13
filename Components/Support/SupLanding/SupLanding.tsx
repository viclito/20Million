import React from 'react';
import Styles from './Supportland.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const SupLanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.supLanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.itops.main.title}</h1>
                        <h2>{copy.itops.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupLanding;
