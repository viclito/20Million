import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/image/logo.png';
import arrow from '../../public/image/down-arrow.png';
import styles from './navBar.module.scss';
import hamburger from '../../public/image/hamburger.png';
import close from '../../public/image/close.png';

const Navbar: React.FC = () => {
    const [active, setActive] = useState<boolean>(true);
    const [development, setDevelopment] = useState<boolean>(false);
    const [support, setSupport] = useState<boolean>(false);
    const [resource, setResource] = useState<boolean>(false);

    const activeHamburger = () => {
        setActive(!active);
    };
    const activeDevelopment = () => {
        setDevelopment(true);
    };
    const deactiveDevelopment = () => {
        setDevelopment(false);
    };
    const activeSupport = () => {
        setSupport(true);
    };
    const deactiveSupport = () => {
        setSupport(false);
    };

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='' fill={true} />
                    </div>
                    <div className={styles.hamburger} onClick={activeHamburger}>
                        <Image src={active ? hamburger : close} alt='' />
                    </div>
                    <div
                        className={
                            active
                                ? `${styles.navlinks}`
                                : `${styles.navlinks} ${styles.active}`
                        }
                    >
                        <ul>
                            <li>
                                <Link href='/' passHref>
                                    <div className={styles.anchor}>Home</div>
                                </Link>
                            </li>
                            <li
                                onMouseOver={activeDevelopment}
                                onMouseLeave={deactiveDevelopment}
                            >
                                <div className={styles.anchor}>
                                    Development Services
                                    <Image
                                        src={arrow}
                                        alt=''
                                        height={14}
                                        width={14}
                                    />
                                </div>
                                <div
                                    className={
                                        !development
                                            ? `${styles.enginer}`
                                            : `${styles.enginer} ${styles.active}`
                                    }
                                >
                                    <Link href='/product'>
                                        <h3 className={styles.anchor}>
                                            Product Development
                                        </h3>
                                    </Link>
                                    <Link href='/qaprojects'>
                                        <h3 className={styles.anchor}>
                                            QA Services
                                        </h3>
                                    </Link>

                                    <Link href='/infrastructure'>
                                        <h3 className={styles.anchor}>
                                            DevOps/Infrastructure Engineering
                                        </h3>
                                    </Link>
                                </div>
                            </li>
                            <li
                                onMouseOver={activeSupport}
                                onMouseLeave={deactiveSupport}
                            >
                                <div className={styles.anchor}>
                                    Support Services
                                    <Image
                                        src={arrow}
                                        alt=''
                                        height={14}
                                        width={14}
                                    />
                                </div>
                                <div
                                    className={
                                        !support
                                            ? `${styles.support}`
                                            : `${styles.support} ${styles.active}`
                                    }
                                >
                                    <Link href='/subsidiary'>
                                        <h3 className={styles.anchor}>
                                            Captive Subsidiary Establishment
                                        </h3>
                                    </Link>

                                    <Link href='/application'>
                                        <h3 className={styles.anchor}>
                                            Application Support
                                        </h3>
                                    </Link>
                                    <Link href='/support'>
                                        <h3 className={styles.anchor}>
                                            IT Operations Support
                                        </h3>
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <Link href='/contact'>
                                    <div className={styles.anchor}>
                                        <button>Contact</button>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
