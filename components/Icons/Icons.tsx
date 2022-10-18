import styles from '../../styles/Layout.module.css';

import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Icons = () => {
    return (
        <div >
            <a href="https://www.linkedin.com/in/josue-rojas-9816a5251" 
            className={styles.icons}>
                <LinkedInIcon />
            </a>
            <a 
            className={styles.icons}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aalex.red1@gmail.com"  >
                <EmailIcon />
            </a>
            <a className={styles.icons}
            href="https://github.com/aalred">
                <GitHubIcon />
            </a>
            {/*<a href="">
                <InstagramIcon />
            </a> */}
        </div>
    )
}

export default Icons;