import Project from './project';
import style from './projects.module.css'
import React from 'react';
import image1 from '../public/p1.jpg'
import image2 from '../public/p2.jpg'

const Projects = () => {
    return (
        <div className={style.container}>
            <Project
                imageUrl={image1}
                imageAlt={"project1"}
                key={Math.random()}
                heading='E-comerce website'
                text='Best E-Comerce website for your project. Create a beautiful website for your client'
            />
            <Project
                imageUrl={image2}
                imageAlt={"project1"}
                key={Math.random()}
                heading='E-comerce website'
                text='Best E-Comerce website for your project. Create a beautiful website for your client'
            />
            <Project
                imageUrl={image1}
                imageAlt={"project1"}
                key={Math.random()}
                heading='E-comerce website'
                text='Best E-Comerce website for your project. Create a beautiful website for your client'
            />
        </div>
    );
};

export default Projects;