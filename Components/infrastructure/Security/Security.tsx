import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React from 'react';
import styles from './security.module.scss';

const Security = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={styles.security}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.infraManagement.security.title}
                    </div>

                    <div className={styles.divide}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                {copy.infraManagement.security.point[1].title}
                            </div>
                            <div className={styles.para}>
                                {
                                    copy.infraManagement.security.point[1]
                                        .description
                                }
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                {copy.infraManagement.security.point[2].title}
                            </div>
                            <div className={styles.para}>
                                {
                                    copy.infraManagement.security.point[2]
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

export default Security;
