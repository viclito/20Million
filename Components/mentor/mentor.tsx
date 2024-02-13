import React, { useState } from 'react';
import Image from 'next/image';
import styles from './mentor.module.scss';
import mentor from '../../public/image/mentor.jpeg'

// interface CardData {
//     function: string;
//     image?: string;
//     person1?: string;
//     person2?: string;
//     person3?: string;
//     person4?: string;
//     person5?: string;
//     person6?: string;
//     person7?: string;
//     person8?: string;
// }

const Mentors: React.FC = () => {
    // const [person1, setPerson1] = useState<boolean>(false);
    // const [person2, setPerson2] = useState<boolean>(false);
    // const [person3, setPerson3] = useState<boolean>(false);
    // const [person4, setPerson4] = useState<boolean>(false);
    // const [person5, setPerson5] = useState<boolean>(false);
    // const [person6, setPerson6] = useState<boolean>(false);
    // const [person7, setPerson7] = useState<boolean>(false);
    // const [person8, setPerson8] = useState<boolean>(false);

    // const data: CardData[] = require('./mentor.json') as CardData[];
    return (
        <>
            <div className={styles.mentors}>
                <div className={styles.inner}>
                    <div className={styles.topics}>
                        <h2>Mentors</h2>
                        <h3>
                            20Million unites accomplished entrepreneurs with
                            seasoned professionals, fostering a collaborative
                            environment of expertise and experience.
                        </h3>
                        <h4>
                            We extend an invitation to join us on this
                            enchanting journey, where the path itself holds as
                            much significance as reaching the destination.
                        </h4>
                    </div>
                    <div className={styles.divide}>
                        <div className={styles.left}>
                            <div className={styles.learnings}>
                                <p>
                                    We learnt the importance of intellectual
                                    property - developing it, protecting it, and
                                    nurturing it.
                                </p>
                                <p>
                                    We learnt it takes an entire ecosystem to
                                    build and successfully scale a venture.
                                </p>
                                <p>
                                    We learnt the importance of being in the
                                    right place at the right time.
                                </p>
                                <p>
                                    We learnt that collaboration is easier said
                                    than done.
                                </p>
                                <p>
                                    Most importantly, we learnt the importance
                                    of exposure and mentorship.
                                </p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                <Image src={mentor} alt=''/>
                            </div>
                            {/* <div className={styles.rightinner}>
                                {data.map((card, i) => (
                                    <div className={styles.card} key={i}>
                                        <div
                                            className={styles.shape}
                                            onMouseEnter={() => {
                                                if (
                                                    card.function ===
                                                    'setPerson1'
                                                ) {
                                                    setPerson1(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson2'
                                                ) {
                                                    setPerson2(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson3'
                                                ) {
                                                    setPerson3(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson4'
                                                ) {
                                                    setPerson4(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson5'
                                                ) {
                                                    setPerson5(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson6'
                                                ) {
                                                    setPerson6(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson7'
                                                ) {
                                                    setPerson7(true);
                                                } else if (
                                                    card.function ===
                                                    'setPerson8'
                                                ) {
                                                    setPerson8(true);
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (
                                                    card.function ===
                                                    'setPerson1'
                                                ) {
                                                    setPerson1(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson2'
                                                ) {
                                                    setPerson2(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson3'
                                                ) {
                                                    setPerson3(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson4'
                                                ) {
                                                    setPerson4(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson5'
                                                ) {
                                                    setPerson5(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson6'
                                                ) {
                                                    setPerson6(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson7'
                                                ) {
                                                    setPerson7(false);
                                                } else if (
                                                    card.function ===
                                                    'setPerson8'
                                                ) {
                                                    setPerson8(false);
                                                }
                                            }}
                                        >
                                            {card.image && (
                                                <div className={styles.img}>
                                                    <Image
                                                        src={card.image}
                                                        alt=''
                                                        fill={true}
                                                    />
                                                </div>
                                            )}
                                            {card.person1 && (
                                                <p
                                                    className={
                                                        person1
                                                            ? styles.activePerson1
                                                            : styles.person1
                                                    }
                                                >
                                                    {card.person1}
                                                </p>
                                            )}
                                            {card.person2 && (
                                                <p
                                                    className={
                                                        person2
                                                            ? styles.activePerson2
                                                            : styles.person2
                                                    }
                                                >
                                                    {card.person2}
                                                </p>
                                            )}
                                            {card.person3 && (
                                                <p
                                                    className={
                                                        person3
                                                            ? styles.activePerson3
                                                            : styles.person3
                                                    }
                                                >
                                                    {card.person3}
                                                </p>
                                            )}
                                            {card.person4 && (
                                                <p
                                                    className={
                                                        person4
                                                            ? styles.activePerson4
                                                            : styles.person4
                                                    }
                                                >
                                                    {card.person4}
                                                </p>
                                            )}
                                            {card.person5 && (
                                                <p
                                                    className={
                                                        person5
                                                            ? styles.activePerson5
                                                            : styles.person5
                                                    }
                                                >
                                                    {card.person5}
                                                </p>
                                            )}
                                            {card.person6 && (
                                                <p
                                                    className={
                                                        person6
                                                            ? styles.activePerson6
                                                            : styles.person6
                                                    }
                                                >
                                                    {card.person6}
                                                </p>
                                            )}
                                            {card.person7 && (
                                                <p
                                                    className={
                                                        person7
                                                            ? styles.activePerson7
                                                            : styles.person7
                                                    }
                                                >
                                                    {card.person7}
                                                </p>
                                            )}
                                            {card.person8 && (
                                                <p
                                                    className={
                                                        person8
                                                            ? styles.activePerson8
                                                            : styles.person8
                                                    }
                                                >
                                                    {card.person8}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mentors;
