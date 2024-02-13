import Image from 'next/image'
import React from 'react'
import styles from './partner.module.scss'
import mentor from '../../../public/image/mentor.jpeg'
import { useCopy } from '@/provider/CopyProvider/CopyProvider'

const Partner = () => {

    const copy = useCopy().content
  return (
    <div>
        <div className={styles.partner}>
            <div className={styles.inner}>
                <div className={styles.withus}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            {copy.home.partnerWithUs.title}
                        </div>
                        <div className={styles.subtitle}>
                            {copy.home.partnerWithUs.subtitle}
                        </div>
                    </div>
                    <div className={styles.right}>          
                        <Image src={mentor} alt=''/>
                    </div>
                </div>
                <div className={styles.letsbuild}>
                    <div className={styles.title}>{copy.home.letsBuild.title}</div>
                    <div className={styles.sub}>{copy.home.letsBuild.subtitle}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner