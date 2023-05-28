import style from './banner.module.css';
import React from 'react';
import Image from 'next/image';
import sadekin from '../public/sadekin.jpg'
const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.first_container}>
                <Image className='' src={sadekin} />
            </div>

        </div>
    );
};

export default Banner;