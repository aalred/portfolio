import styles from '../../styles/NavBar.module.css';

import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Links from './Links';
import Icons from '../Icons/Icons';

const MenuMobile = () => {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(true);
    };

    function handleChange(){
        setOpen(false);
    };

    return (
        <Box >
            <IconButton
                onClick={() => handleClick()}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={styles['menu-drawer']}>
                    <List className={styles['menu-drawer__list']} >
                        <div>
                            <ListItem >
                                <Links onChange={handleChange}/>
                            </ListItem>
                        </div>
                        <div className={styles['menu-drawer__icons']}>
                            <ListItem >
                                <Icons />
                            </ListItem>
                        </div>
                    </List>
                </div>
            </Drawer>
        </Box>
    )
}

export default MenuMobile;