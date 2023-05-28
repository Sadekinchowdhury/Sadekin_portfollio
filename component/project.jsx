import style from './project.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Project = ({ imageUrl, imagAlt, heading, text }) => {
    return (
        <div>

            <div className={style.container}>
                <div className={style.img_container}>
                    <Image width={500} height={250} src={imageUrl} alt={imagAlt} />
                </div>
                <div className={style.txt_container}>
                    <h2>{heading}</h2>
                    <p>{text}</p>
                    <Link href='/'><button className={style.btn}>Source code</button></Link>
                    <Link href='/   '><button className={style.btn}>View</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;