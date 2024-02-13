import React, { useState } from 'react';
import styles from './Subcontent.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

const SubContent = () => {
    const copy = useCopy().content;

    const [expertise, setExpertise] = useState<boolean>(true);
    const [model, setModel] = useState<boolean>(false);
    const [leadership, setLeadership] = useState<boolean>(false);

    const expertiseActive = () => {
        setExpertise(true);
        setModel(false);
        setLeadership(false);
    };
    const modelActive = () => {
        setExpertise(false);
        setModel(true);
        setLeadership(false);
    };
    const leadershipActive = () => {
        setExpertise(false);
        setModel(false);
        setLeadership(true);
    };
    return (
        <>
            <div className={styles.subcontent}>
                <div className={styles.inner}>
                    <div className={styles.boxes}>
                        <div className={styles.divide}>
                            <div
                                className={
                                    expertise
                                        ? `${styles.hexogen} ${styles.active}`
                                        : `${styles.hexogen} `
                                }
                                onClick={expertiseActive}
                            >
                                {copy.captive.expertise.title}
                            </div>
                            <div
                                className={
                                    model
                                        ? `${styles.hexogen} ${styles.active}`
                                        : `${styles.hexogen} `
                                }
                                onClick={modelActive}
                            >
                                {copy.captive.model.title}
                            </div>
                        </div>
                        <div
                            className={
                                leadership
                                    ? `${styles.hexogen} ${styles.active} ${styles.adjust}`
                                    : `${styles.hexogen} ${styles.adjust}`
                            }
                            onClick={leadershipActive}
                        >
                            {copy.captive.leadership.title}
                        </div>
                    </div>

                    <div className={styles.content}>
                        {expertise && <p>{copy.captive.expertise.subtitle}</p>}
                        {model && <p>{copy.captive.model.subtitle}</p>}
                        {leadership && (
                            <p>{copy.captive.leadership.subtitle}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubContent;
