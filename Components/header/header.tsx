import React from 'react';
import Image from 'next/image';
import logo from '../../public/image/logo.png';

import logos from './company.json';
// import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import { sliderSettings } from './common';
import styles from './header.module.scss';
import { useCopy } from '@/provider/CopyProvider/CopyProvider';

// Define an interface for logos' shape in company.json
interface LogoType {
    number: string;
    // Add other properties here, if any
}

// You can define any other types you might need for props or state

const Header: React.FC = () => {
    const copy = useCopy().content;

    return (
        <>
            <div className={styles.landingpage}>
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <Image src={logo} alt='' fill={true} />
                    </div>
                    <div className={styles.title}>
                        <h2>{copy.home.hero.title}</h2>
                        <h3>{copy.home.hero.subtitle}</h3>
                    </div>

                    {/* Uncomment the below section if you need it */}
                    {/*
                    <div className="scroll">
                        <Swiper {...sliderSettings}>
                            {logos.map((card: LogoType, i: number) => (
                                <SwiperSlide key={i}>
                                    <div className="card">
                                        <div className='num'>{card.number}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    */}
                </div>
            </div>
        </>
    );
};

export default Header;
