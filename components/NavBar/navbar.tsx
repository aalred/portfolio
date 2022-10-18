import styles from '../../styles/NavBar.module.css';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';

import logo from '../../img-resources/logo.png'
import Links from './Links';
import MenuMobile from './MenuMobile';

const NavBar: NextPage = () => {
  const router = useRouter();

  const match = useMediaQuery('(min-width: 450px)');
  return (
    <Box >
      <AppBar className={styles.navbar}>
        <Toolbar className={styles['navbar__toolbar']}>
          <div className={styles['navbar__logoContainer']}>
            <Image
              src={logo}
              alt="logo"
              onClick={() => router.push('/')}
            />
          </div>
          <div className={styles['navbar__links']}>
            {match ? <Links /> : <MenuMobile />}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;