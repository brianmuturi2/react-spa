import React from 'react';
import styles from './Footer.module.css'

import footerAdornment from '../../../assets/Footer Adornment.svg'
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {

    /**
     * MEDIA QUERIES
     * */

    const theme = useTheme();
    const matchesDeviceMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesDeviceSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <footer className={styles.footer}>
            <img src={footerAdornment} alt="black decorative slash"
                 className={`${styles.adornment} ${matchesDeviceMd ? styles.adornmentMd : null} ${matchesDeviceSm ? styles.adornmentSm : null}`}/>
        </footer>
    )
}

export default Footer;
