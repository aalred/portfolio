import styles from '../../styles/Layout.module.css';

import React, { ReactNode } from 'react';
import Head from 'next/head';

import Grid from '@mui/material/Grid';

import NavBar from '../NavBar/navbar';
import Footer from './Footer';
import Script from 'next/script';

type props = {
    children?: ReactNode,
}

const Layout = ({ children }: props) => {

    return (
        <div >
            <Head>
                <title>Portfolio JR</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Script src="https://code.jquery.com/jquery-3.6.1.min.js"
                id="my-script"
                integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
                crossOrigin="anonymous">
            </Script>
            <div >
                <Grid container spacing={3}>
                    <Grid item xs={12} className={styles.header}>
                        <header>
                            <NavBar />
                        </header>
                    </Grid>
                    <Grid item xs={12} >
                        {children}
                        <br />
                    </Grid>
                    <Grid item xs={12} >
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Layout;