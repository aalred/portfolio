import styles from '../../styles/NavBar.module.css';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { isPathname } from '../../Interfaces';
import ContactDialog from '../contact/ContactDialog';

interface props {
    onChange?: () => void;
}

const Links = (props: props) => {
    const [validatePath, setValidatePath] = useState(isPathname);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const validate = location.pathname === '/' ?
            'index' : location.pathname.replace('/', '');
        setValidatePath({ ...isPathname, [validate]: false });
    }, []);

    function handleClick(): void {
        setOpen(!open);
    }

    return (
        <Box className={styles['navbar__links']}>
            <Link href={"/"} >
                <Button color="inherit" disabled={!validatePath.index} >
                    <div className={styles['navbar__link'] + '  ' + styles['navbar__links']}>
                        Home
                    </div>
                </Button>
            </Link >
            <Link href={"/about"}>
                <Button color="inherit" disabled={!validatePath.about}>
                    <div className={styles['navbar__link'] + '  ' + styles['navbar__links']}>
                        About
                    </div>
                </Button>
            </Link >
            <div>
                <Button color="inherit" onClick={handleClick} >
                    <div className={styles['navbar__link'] + '  ' + styles['navbar__links']}>
                        Contact
                    </div>
                </Button>
                {open && <ContactDialog open={open} onChange={handleClick} />}
            </div>
        </Box>
    )
}

export default Links;