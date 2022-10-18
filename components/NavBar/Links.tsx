import styles from '../../styles/NavBar.module.css';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { isPathname } from '../../Interfaces';

interface props {
    onChange?: () => void;
}

const Links = (props: props) => {
    const [validatePath, setValidatePath] = useState(isPathname);

    useEffect(() => {
        const validate = location.pathname === '/' ?
            'index' : location.pathname.replace('/', '');
        setValidatePath({ ...isPathname, [validate]: false });
    }, []);
    
    function handleClick() {
        const element = window.document.querySelector('footer');
        element?.scrollIntoView();
        setTimeout(() => {
            props.onChange && props.onChange();
        }, 800);
    };

    return (
        <Box className={styles['navbar__links']}>
            <Link href={"/"} >
                <Button color="inherit" disabled={!validatePath.index}
                    className={styles['navbar__links--hover'] + '  ' + styles['navbar__links-link']}
                >Home</Button>
            </Link >
            <Link href={"/about"}>
                <Button color="inherit" disabled={!validatePath.about} className={`${styles['navbar__links--hover']} ${styles['navbar__links-link']}`}>About</Button>
            </Link >
            <Button onClick={() => handleClick()} color="inherit" disabled={!validatePath.contact} className={`${styles['navbar__links--hover']} ${styles['navbar__links-link']}`}>Contact</Button>
        </Box>
    )
}

export default Links;