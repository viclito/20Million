import { useCopy } from '@/provider/CopyProvider/CopyProvider';
import React, { useEffect, useState } from 'react';
import styles from './feature.module.scss';

const KeyFeature = () => {
    const copy = useCopy().content;

    const data = Object.values(copy.appSupport.keyFeatures.feature);

    const [show, setShow] = useState<number>(1);

    useEffect(() => {
        const intervalid = setInterval(() => {
            const nextIndex = (show % data.length) + 1;
            setShow(nextIndex);
        }, 5000);

        return () => {
            clearInterval(intervalid);
        };
    }, [data.length, show]);

    return (
        <>
            <div className={styles.keyFeatures}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.appSupport.main.title}
                    </div>
                    <div className={styles.subtitle}>
                        {copy.appSupport.main.subtitle}
                    </div>
                    <div className={styles.divide}>
                        <div className={styles.left}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    {index + 1 === show && (
                                        <div className={styles.card}>
                                            <div className={styles.atitle}>
                                                {item.title}
                                            </div>
                                            <div className={styles.content}>
                                                {item.description}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className={styles.right}>
                            <div className={styles.container}>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 1
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>
                                        {
                                            copy.appSupport.keyFeatures
                                                .feature[1].title
                                        }
                                    </div>
                                </div>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 2
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>
                                        {
                                            copy.appSupport.keyFeatures
                                                .feature[2].title
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container2}>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 3
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>
                                        {
                                            copy.appSupport.keyFeatures
                                                .feature[3].title
                                        }
                                    </div>
                                </div>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 4
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>
                                        Security <br /> Mangement
                                    </div>
                                </div>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 5
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>
                                        {
                                            copy.appSupport.keyFeatures
                                                .feature[5].title
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KeyFeature;
