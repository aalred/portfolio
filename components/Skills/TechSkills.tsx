import imgBootstrap from '../../img-resources/tech-skills/Bootstrap.svg';
import imgCSS from '../../img-resources/tech-skills/CSS.svg';
import imgExpress from '../../img-resources/tech-skills/Express.svg';
import imgGit from '../../img-resources/tech-skills/Git.svg';
import imgHTML from '../../img-resources/tech-skills/HTML.svg';
import imgJavascript from '../../img-resources/tech-skills/JavaScript.svg';
import imgMaterialUI from '../../img-resources/tech-skills/Material-UI.svg';
import imgMongoDB from '../../img-resources/tech-skills/MongoDB.svg';
import imgMongoose from '../../img-resources/tech-skills/Mongoose2.png';
import imgNodejs from '../../img-resources/tech-skills/NodeJs.svg';
import imgPostresql from '../../img-resources/tech-skills/Postgresql.svg';
import imgReact from '../../img-resources/tech-skills/React.svg';
import imgRedux from '../../img-resources/tech-skills/Redux.svg';
import imgSequelize from '../../img-resources/tech-skills/Sequelize.svg';
import imgTypescript from '../../img-resources/tech-skills/TypeScript.svg';

import styles from '../../styles/Content.module.css';

import React from 'react';
import Image from 'next/image';

import { iSkills } from '../../Interfaces';

interface img extends iSkills {
    image: string;
    level?: string;
};

export default function TechSkills() {
    let size = '20px';

    const images: img[] = [
        { name: 'JavaScript', image: imgJavascript },
        { name: 'Typescript', image: imgTypescript },
        { name: 'HTML', image: imgHTML },
        { name: 'CSS', image: imgCSS },
        { name: 'Bootstrap', image: imgBootstrap },
        { name: 'MaterialUI', image: imgMaterialUI },
        { name: 'MongoDB', image: imgMongoDB },
        { name: 'Mongoose', image: imgMongoose },
        { name: 'Express', image: imgExpress },
        { name: 'React', image: imgReact },
        { name: 'Redux', image: imgRedux },
        { name: 'Nodejs', image: imgNodejs },
        { name: 'Postresql', image: imgPostresql },
        { name: 'Sequelize', image: imgSequelize },
        { name: 'Git', image: imgGit },
    ];

    return (
        <div className={`${styles['content__box']} `} >
            {images?.map((e: img, i: number) => <div key={i}
                className={`${styles['content__box-item']}`}>
                <p>{e.name}</p>
                   <Image
                    width={size}
                    height={size}
                    className={styles['content__Image']}
                    src={e.image} alt={e.name} />
            </div>
            )}
        </div>
    )
};