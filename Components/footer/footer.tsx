import React, { useState } from 'react';
import Image from 'next/image';
import flag from '../../public/image/india.png';
import location from '../../public/image/location.png';
import styles from './footer.module.scss';
// import data from "./footeraddress.json";
import arrow from '../../public/image/down.png';

// Define the data type for items from footeraddress.json
interface AddressItem {
    address: string;
    address2: string;
    country: string;
}

const data: AddressItem[] = require('./footeraddress.json') as AddressItem[];

// Import the data with an explicit type assertion

const Footer: React.FC = () => {
    const [company, setCompany] = useState<boolean>(true);
    const [domain, setDomain] = useState<boolean>(true);
    const [technology, setTechnology] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean>(true);
    const [resourse, setResourse] = useState<boolean>(true);

    const companyActive = () => {
        setCompany(!company);
    };
    const domainActive = () => {
        setDomain(!domain);
    };
    const technologyActive = () => {
        setTechnology(!technology);
    };
    const aboutActive = () => {
        setAbout(!about);
    };
    const resourseActive = () => {
        setResourse(!resourse);
    };

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.inner}>
                    {/* <div className={styles.divide}>
                        <div className={`${styles.one} ${styles.common}`}>
                            <div
                                className={styles.title}
                                onClick={companyActive}
                            >
                                <h3>Company</h3>
                                <Image src={arrow} alt='' />
                            </div>
                            <h4>Company</h4>
                            <div className={styles.innerone}>
                                <p>Home</p>
                                <p>Engineering</p>
                                <p>Ventures</p>
                                <p>Incubation</p>
                                <p>Intellectual Property</p>
                            </div>
                            <div
                                className={
                                    company
                                        ? `${styles.innerones}`
                                        : `${styles.innerones} ${styles.active}`
                                }
                            >
                                <p>Home</p>
                                <p>Engineering</p>
                                <p>Ventures</p>
                                <p>Incubation</p>
                                <p>Intellectual Property</p>
                            </div>
                        </div>
                        <div className={`${styles.two} ${styles.common}`}>
                            <div
                                className={styles.title}
                                onClick={domainActive}
                            >
                                <h3>Domains</h3>
                                <Image src={arrow} alt='' />
                            </div>
                            <h4>Domains</h4>
                            <div className={styles.innerone}>
                                <p>New Economy</p>
                                <p>Supply Chain</p>
                                <p>FinTech</p>
                                <p>HealthTech</p>
                                <p>IoT</p>
                            </div>
                            <div
                                className={
                                    domain
                                        ? `${styles.innerones}`
                                        : `${styles.innerones} ${styles.active}`
                                }
                            >
                                <p>New Economy</p>
                                <p>Supply Chain</p>
                                <p>FinTech</p>
                                <p>HealthTech</p>
                                <p>IoT</p>
                            </div>
                        </div>
                        <div className={`${styles.three} ${styles.common}`}>
                            <h4>Technologies</h4>
                            <div
                                className={styles.title}
                                onClick={technologyActive}
                            >
                                <h3>Technologies</h3>
                                <Image src={arrow} alt='' />
                            </div>
                            <div className={styles.innerone}>
                                <p>Technology Consulting</p>
                                <p>Ruby on Rails</p>
                                <p>Python</p>
                                <p>React JS</p>
                                <p>Java</p>
                            </div>
                            <div
                                className={
                                    technology
                                        ? `${styles.innerones}`
                                        : `${styles.innerones} ${styles.active}`
                                }
                            >
                                <p>Technology Consulting</p>
                                <p>Ruby on Rails</p>
                                <p>Python</p>
                                <p>React JS</p>
                                <p>Java</p>
                            </div>
                        </div>
                        <div className={`${styles.four} ${styles.common}`}>
                            <h4>About Us</h4>
                            <div className={styles.title} onClick={aboutActive}>
                                <h3>About Us</h3>
                                <Image src={arrow} alt='' />
                            </div>
                            <div className={styles.innerone}>
                                <p>Leadership</p>
                                <p>Team</p>
                                <p>20Million Diamond</p>
                                <p>Methodologies</p>
                                <p>Career</p>
                            </div>
                            <div
                                className={
                                    about
                                        ? `${styles.innerones}`
                                        : `${styles.innerones} ${styles.active}`
                                }
                            >
                                <p>Leadership</p>
                                <p>Team</p>
                                <p>20Million Diamond</p>
                                <p>Methodologies</p>
                                <p>Career</p>
                            </div>
                        </div>
                        <div className={`${styles.five} ${styles.common}`}>
                            <h4>Resources</h4>
                            <div
                                className={styles.title}
                                onClick={resourseActive}
                            >
                                <h3>Resources</h3>
                                <Image src={arrow} alt='' />
                            </div>
                            <div className={styles.innerone}>
                                <p>News</p>
                                <p>Blogs</p>
                                <p>Case Studies</p>
                                <p>Podcasts</p>
                                <p>Whitepapers</p>
                            </div>
                            <div
                                className={
                                    resourse
                                        ? `${styles.innerones}`
                                        : `${styles.innerones} ${styles.active}`
                                }
                            >
                                <p>News</p>
                                <p>Blogs</p>
                                <p>Case Studies</p>
                                <p>Podcasts</p>
                                <p>Whitepapers</p>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.location}>
                        Location: <Image src={flag} alt='India flag' />
                    </div> 

                    <div className={styles.addresslist}>
                        {data.map((item, i) => (
                            <div className={styles.inneraddress} key={i}>
                                <Image src={location} alt='Location icon' />
                                <div className={styles.area}>
                                    <p>{item.address}</p>
                                    <p>{item.address2}</p>
                                    <h4>{item.country}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
