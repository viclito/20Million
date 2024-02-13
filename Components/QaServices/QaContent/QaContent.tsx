import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React from 'react';
import styles from './QaContent.module.scss';

const QaContent = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={styles.qacontent}>
                <div className={styles.inner}>
                    {/* <div className={styles.title}>
                        {copy.infraManagement.performance.title}
                    </div> */}

                    <div className={styles.divide}>
                        <div className={styles.top}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {copy.qaservice.expertise.title}{' '}
                                </div>
                            </div>

                            <div className={styles.content}>
                                {copy.qaservice.expertise.subtitle}
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {copy.qaservice.securityPerformance.title}
                                </div>
                            </div>

                            <div className={styles.content}>
                                {copy.qaservice.securityPerformance.subtitle}
                            </div>
                        </div>
                        <div className={styles.top}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {copy.qaservice.risk.title}{' '}
                                </div>
                            </div>

                            <div className={styles.content}>
                                {copy.qaservice.risk.subtitle}
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {copy.qaservice.planning.title}
                                </div>
                            </div>

                            <div className={styles.content}>
                                {copy.qaservice.planning.subtitle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QaContent;
