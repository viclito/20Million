import React from 'react'
import styles from './Choose.module.scss'
import { useCopy } from '@/provider/CopyProvider/CopyProvider'

const ChooseUs = () => {
    const copy = useCopy().content
  return (
    <div>
        <div className={styles.chooseus}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    {copy.home.whyChooseUs.title}
                </div>

                <div className={styles.divide}>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h2>{copy.home.whyChooseUs[1].title}</h2>
                            <h4>{copy.home.whyChooseUs[1].subtitle}</h4>
                        </div>
                        <div className={styles.box}>
                            <h2>{copy.home.whyChooseUs[2].title}</h2>
                            <h4>{copy.home.whyChooseUs[2].subtitle}</h4>
                        </div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h2>{copy.home.whyChooseUs[3].title}</h2>
                            <h4>{copy.home.whyChooseUs[3].subtitle}</h4>
                        </div>
                        <div className={styles.box}>
                            <h2>{copy.home.whyChooseUs[4].title}</h2>
                            <h4>{copy.home.whyChooseUs[4].subtitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs