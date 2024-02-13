import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React from 'react';
import styles from './postlaunch.module.scss';

const PostLaunch = () => {
    const copy = useCopy().content;
    return (
        <>
            <div className={styles.postlaunch}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.productDev.postlaunch.title}
                    </div>
                    <div className={styles.subtitle}>
                        {copy.productDev.postlaunch.description}
                    </div>
                    <div className={styles.divide}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                {copy.productDev.postlaunch.step[1].title}
                            </div>
                            <div className={styles.para}>
                                {copy.productDev.postlaunch.step[1].description}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                {copy.productDev.postlaunch.step[2].title}
                            </div>
                            <div className={styles.para}>
                                {copy.productDev.postlaunch.step[2].description}
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        {copy.productDev.conclusion}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostLaunch;
