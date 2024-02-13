import { useCopy } from '@/provider/CopyProvider/CopyProvider'
import React from 'react'
import styles from './expertise.module.scss'

const Expertise = () => {

    const copy = useCopy().content
  return (
    <div>
        <div className={styles.homeexpertise}>
            <div className={styles.inner}>
                <div className={styles.title}>{copy.home.expertise.title}</div>

                <div className={styles.bars}>
                    <div className={styles.bar}>
                        <h2>{copy.home.expertise[1].title}</h2>
                        <h4>{copy.home.expertise[1].subtitle}</h4>
                    </div>
                    <div className={styles.bar}>
                        <h2>{copy.home.expertise[2].title}</h2>
                        <h4>{copy.home.expertise[2].subtitle}</h4>
                    </div>
                    <div className={styles.bar}>
                        <h2>{copy.home.expertise[3].title}</h2>
                        <h4>{copy.home.expertise[3].subtitle}</h4>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Expertise