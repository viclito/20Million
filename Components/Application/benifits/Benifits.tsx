import React, { useState } from 'react';
import Image from 'next/image';
import styles from './benifits.module.scss';
import minus from '../../../public/image/minus.png';
import plus from '../../../public/image/plus.png';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const Benifits = () => {
    const copy = useCopy().content;

    const [what, setWhat] = useState<boolean>(true);
    const [why, setWhy] = useState<boolean>(false);
    const [how, setHow] = useState<boolean>(false);

    const activeWhat = () => {
        setWhat(true);
        setHow(false);
        setWhy(false);
    };
    const activeWhy = () => {
        setWhat(false);
        setHow(false);
        setWhy(true);
    };
    const activeHow = () => {
        setWhat(false);
        setHow(true);
        setWhy(false);
    };
    return (
        <>
            <div className={styles.benifits}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        {copy.appSupport.benefits.title}
                    </div>

                    <div className={styles.accordion}>
                        <div
                            className={
                                what
                                    ? `${styles.title}`
                                    : `${styles.negative} ${styles.title}`
                            }
                            onClick={activeWhat}
                        >
                            {copy.appSupport.benefits.benefit[1].title}
                            <div className='lines'>
                                {what && (
                                    <Image
                                        src={minus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                                {!what && (
                                    <Image
                                        src={plus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                            </div>
                        </div>
                        {what && (
                            <div className={styles.content}>
                                <p>
                                    {
                                        copy.appSupport.benefits.benefit[1]
                                            .description
                                    }
                                </p>
                            </div>
                        )}
                        <div
                            className={
                                why
                                    ? `${styles.title}`
                                    : `${styles.negative} ${styles.title}`
                            }
                            onClick={activeWhy}
                        >
                            {copy.appSupport.benefits.benefit[2].title}
                            <div className='lines'>
                                {why && (
                                    <Image
                                        src={minus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                                {!why && (
                                    <Image
                                        src={plus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                            </div>
                        </div>
                        {why && (
                            <div className={styles.content}>
                                <p>
                                    {
                                        copy.appSupport.benefits.benefit[2]
                                            .description
                                    }
                                </p>
                            </div>
                        )}
                        <div
                            className={
                                how
                                    ? `${styles.title}`
                                    : `${styles.negative} ${styles.title}`
                            }
                            onClick={activeHow}
                        >
                            {copy.appSupport.benefits.benefit[3].title}
                            <div className='lines'>
                                {how && (
                                    <Image
                                        src={minus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                                {!how && (
                                    <Image
                                        src={plus}
                                        alt=''
                                        width={12}
                                        height={12}
                                    />
                                )}
                            </div>
                        </div>
                        {how && (
                            <div className={styles.content}>
                                <p>
                                    {
                                        copy.appSupport.benefits.benefit[3]
                                            .description
                                    }
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benifits;
