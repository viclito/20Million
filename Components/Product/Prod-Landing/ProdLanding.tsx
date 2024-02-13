import React from 'react';
import Styles from './landing.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const ProdLanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.methLanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.productDev.main.title}</h1>
                        <h2>{copy.productDev.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProdLanding;
