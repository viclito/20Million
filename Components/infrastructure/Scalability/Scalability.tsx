import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React from 'react';
import styles from './scalability.module.scss';

const Scalability = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={styles.scalability}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.infraManagement.scalability.title}
                    </div>

                    <div className={styles.divide}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                {
                                    copy.infraManagement.scalability.point[1]
                                        .title
                                }
                            </div>
                            <div className={styles.para}>
                                {
                                    copy.infraManagement.scalability.point[1]
                                        .description
                                }
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                {
                                    copy.infraManagement.scalability.point[2]
                                        .title
                                }
                            </div>
                            <div className={styles.para}>
                                {
                                    copy.infraManagement.scalability.point[2]
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

export default Scalability;
