import style from './banner.module.css';
import React from 'react';
import Image from 'next/image';
import sadekin from '../public/sadekin.jpg'
import nextLogo from '../public/next.png'
import jstLogo from '../public/js.png'
import reactLogo from '../public/react.png'


const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.first_container}>
                <Image className='' src={sadekin} />
            </div>
            <div className={style.second_container}>
                <h1>Front-End Developer</h1>
                <div className={style.img_container}>
                    <Image src={nextLogo} alt='nextLogo' />
                    <Image style={{
                        marginTop: "-10px"
                    }} className={style.jslogo} src={jstLogo} alt='jsLogo' />
                    <Image src={reactLogo} alt='reactLogo' />
                </div>
                <div className={style.txt_container}>
                    Frontend Creation Is An art. People call me Artist. I don't know why the call me like that but I have very good knowledge of JAVASCRIPT,REATJS,NEXTJS,CSS.
                </div>
            </div>
        </div>
    );
};

export default Banner;