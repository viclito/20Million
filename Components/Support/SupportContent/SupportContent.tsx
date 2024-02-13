import React from 'react';
import styles from './SupportContent.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const SupportContent = () => {
    const copy = useCopy().content;
    return (
        <div>
            <div className={styles.supportcontent}>
                <div className={styles.inner}>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            {copy.itops.remote.title}
                        </div>
                        <div className={styles.right}>
                            {copy.itops.remote.subtitle}
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            {copy.itops.inclusive.title}
                        </div>
                        <div className={styles.right}>
                            {copy.itops.inclusive.subtitle}
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            {copy.itops.costEffective.title}
                        </div>
                        <div className={styles.right}>
                            {copy.itops.costEffective.subtitle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportContent;
