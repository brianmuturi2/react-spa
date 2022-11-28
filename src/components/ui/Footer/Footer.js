import React from 'react';
import styles from './Footer.module.css'

import footerAdornment from '../../../assets/Footer Adornment.svg'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'

import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom";

function Footer({setSelectedTab, setSelectedMenu}) {

    /**
     * MEDIA QUERIES
     * */

    const theme = useTheme();
    const matchesDeviceMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesDeviceSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesDeviceLg = useMediaQuery(theme.breakpoints.up('lg'));

    function handleNavigation(value) {
        setSelectedTab(value);
    }


    function handleServicesNavigation(value) {
        setSelectedTab(1);
        setSelectedMenu(value);
    }

    return (
        <footer className={styles.footer}>
            {
                matchesDeviceLg && (
                    <Grid container className={styles.gridContainer} justifyContent={'center'} spacing={12}>
                        <Grid item>
                            <Grid container direction={'column'}>
                                <Grid item className={styles.link} component={Link} to='/'  onClick={handleNavigation.bind(this, 0)}>
                                    Home
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item className={styles.link} component={Link} to='/services' onClick={handleServicesNavigation.bind(this, 0)}>
                                    All Services
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/custom-software' onClick={handleServicesNavigation.bind(this, 1)}>
                                    Custom software development
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/mobile-apps' onClick={handleServicesNavigation.bind(this, 2)}>
                                    Mobile App Development
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/websites' onClick={handleServicesNavigation.bind(this, 3)}>
                                    Website Development
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item className={styles.link} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                    The Revolution
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                    Vision
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                    Technology
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                    Process
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item className={styles.link} component={Link} to='/about' onClick={handleNavigation.bind(this, 3)}>
                                    About Us
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/about' onClick={handleNavigation.bind(this, 3)}>
                                    History
                                </Grid>
                                <Grid item className={styles.link} component={Link} to='/about' onClick={handleNavigation.bind(this, 3)}>
                                    Team
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction={'column'}>
                                <Grid item className={styles.link} component={Link} to='/contact' onClick={handleNavigation.bind(this, 4)}>
                                    Contact Us
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }

            <img src={footerAdornment} alt="black decorative slash"
                 className={`${styles.adornment} ${matchesDeviceMd ? styles.adornmentMd : null} ${matchesDeviceSm ? styles.adornmentSm : null}`}/>

             <Grid container className={styles.socialContainer} justifyContent={'flex-end'} spacing={2}>
                 <Grid item component={'a'} href={'https://www.facebook.com'} rel={'noopener noreferrer'} target={'_blank'}>
                     <img src={facebook} alt="facebook logo" className={styles.icon}/>
                 </Grid>
                 <Grid item component={'a'} href={'https://www.twitter.com'} rel={'noopener noreferrer'} target={'_blank'}>
                     <img src={twitter} alt="twitter logo" className={styles.icon}/>
                 </Grid>
                 <Grid item component={'a'} href={'https://www.instagram.com'} rel={'noopener noreferrer'} target={'_blank'}>
                     <img src={instagram} alt="instagram logo" className={styles.icon}/>
                 </Grid>
             </Grid>
        </footer>
    )
}

export default Footer;
