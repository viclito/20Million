import React from 'react';
import Styles from './Qalanding.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const QaLanding = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={Styles.Qalanding}>
                <div className={Styles.image}></div>
                <div className={Styles.inner}>
                    <div className={Styles.title}>
                        <h1>{copy.qaservice.main.title}</h1>
                        <h2>{copy.qaservice.main.subtitle}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QaLanding;
