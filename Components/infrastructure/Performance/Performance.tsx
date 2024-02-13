import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React from 'react';
import styles from './performance.module.scss';

const Performance = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={styles.performance}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.infraManagement.performance.title}
                    </div>

                    <div className={styles.divide}>
                        <div className={styles.top}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {
                                        copy.infraManagement.performance
                                            .point[1].title
                                    }{' '}
                                </div>
                            </div>

                            <div className={styles.content}>
                                {
                                    copy.infraManagement.performance.point[1]
                                        .description
                                }
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.hexogen}>
                                <div className={styles.shape}>
                                    {
                                        copy.infraManagement.performance
                                            .point[2].title
                                    }
                                </div>
                            </div>

                            <div className={styles.content}>
                                {
                                    copy.infraManagement.performance.point[2]
                                        .description
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Performance;
