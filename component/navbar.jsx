import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'
import github from '../public/github.png'
import fb from '../public/fb.png'
import instagram from '../public/insta.png'
import Link from 'next/link';
import style from './navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <div className={style.first_container}>
                    <ul>
                        <li>Project</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={style.second_container}>
                    <Link href='/'> <Image src={logo} alt='navlogo' /></Link>
                </div>
                <div className={style.third_container}>
                    <Link href="https://google.com"> <Image className={style.social} src={github} alt='navlogo' /></Link>

                    <Link href="https://google.com"> <Image className={style.social} src={fb} alt='navlogo' /></Link>

                    <Link href="https://google.com"> <Image className={style.social} src={instagram} alt='navlogo' /></Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;