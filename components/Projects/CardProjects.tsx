import styles from '../../styles/CardsProjects.module.css';

import Button from '@mui/material/Button';

import React from 'react';

import { iProject } from '../../Interfaces';
import DialogAlert from './Dialog';
import Image from 'next/image';

const CardProjects = (props: iProject) => {

    return (
        <div className={styles.card}>
            <div className={styles['card__image-div']}>
                <Image
                className={styles['card__image-img']}
                    src={props.image}
                    alt={props.title}
                    width='350px'
                    height={'200px'}
                />
                <p>{props.title}</p>
            </div>
            <div className={styles['card__btn-div']} >
                <Button variant='contained' href={props.url}>Visit</Button>
                <DialogAlert id={props.id} title={props.title} summary={props.summary} technologies={props.technologies} infoAditional={props.infoAditional} image={''} />
            </div>
        </div>
    )
}

export default CardProjects;