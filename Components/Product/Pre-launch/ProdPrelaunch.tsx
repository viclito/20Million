import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './prelaunch.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const ProdPrelaunch = () => {
    const copy = useCopy().content;

    const data = Object.values(copy.productDev.prelaunch.step);

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
            <div className={styles.prelaunch}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.productDev.prelaunch.title}
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
                                            copy.productDev.prelaunch.step[1]
                                                .title
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
                                            copy.productDev.prelaunch.step[2]
                                                .title
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
                                            copy.productDev.prelaunch.step[3]
                                                .title
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
                                        {
                                            copy.productDev.prelaunch.step[4]
                                                .title
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

export default ProdPrelaunch;
