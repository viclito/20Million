import React, { useEffect, useState, FC } from 'react';
import Image from 'next/image';
import map from '../../public/image/dotmap.png';
import court from '../../public/image/court.png';
import heart from '../../public/image/heartbeat.png';
import cloud from '../../public/image/cloud-service.png';
import chain from '../../public/image/supply-chain.png';
import cardImg from '../../public/image/credit-card.png'; // Renamed to cardImg to avoid conflict with data
import styles from './about.module.scss';

interface AboutWorkData {
    id: number;
    title: string;
    content: string;
    content2?: string;
}

const data: AboutWorkData[] = require('./aboutwork.json') as AboutWorkData[];

const About: FC = () => {
    const [show, setShow] = useState<number>(1);

    useEffect(() => {
        const intervalid = setInterval(() => {
            const nextIndex = (show % data.length) + 1;
            setShow(nextIndex);
        }, 5000);

        return () => {
            clearInterval(intervalid);
        };
    }, [show]);

    return (
        <>
            <div className={styles.aboutwork}>
                <div className={styles.inner}>
                    <div className={styles.title}>What we Do?</div>
                    <div className={styles.divide}>
                        <div className={styles.left}>
                            {data.map((item, i) => (
                                <div key={i}>
                                    {item.id === show && (
                                        <div className={styles.card}>
                                            <div className={styles.atitle}>
                                                {item.title}
                                            </div>
                                            <div className={styles.content}>
                                                {item.content}
                                            </div>
                                            <div className={styles.content2}>
                                                {item.content2}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className={styles.right}>
                            <div className={styles.img}>
                                <Image src={map} alt='' fill={true} />
                            </div>
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
                                        Engineering
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
                                    <div className={styles.text}>Incubator</div>
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
                                    <div className={styles.text}>Academy</div>
                                </div>
                                <div className={styles.hexagon}>
                                    <div
                                        className={
                                            show === 4
                                                ? `${styles.active} ${styles.shape}`
                                                : `${styles.shape}`
                                        }
                                    ></div>
                                    <div className={styles.text}>Ventures</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.innerboxes}>
                            <div className={styles.box}>
                                <div className={styles.innerbox}>
                                    <div className={styles.image}>
                                        <Image src={court} alt='' fill={true} />
                                    </div>
                                </div>
                                <p>FinTech</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.innerbox}>
                                    <div className={styles.image}>
                                        <Image src={heart} alt='' fill={true} />
                                    </div>
                                </div>
                                <p>HealthTech</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.innerbox}>
                                    <div className={styles.image}>
                                        <Image src={cloud} alt='' fill={true} />
                                    </div>
                                </div>
                                <p>IOT</p>
                            </div>
                        </div>
                        <div className={styles.innerboxes}>
                            <div className={styles.box}>
                                <div className={styles.innerbox}>
                                    <div className={styles.image}>
                                        <Image src={chain} alt='' fill={true} />
                                    </div>
                                </div>
                                <p>Supply Chain</p>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.innerbox}>
                                    <div className={styles.image}>
                                        <Image
                                            src={cardImg}
                                            alt=''
                                            fill={true}
                                        />
                                    </div>
                                </div>
                                <p>New Economy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
