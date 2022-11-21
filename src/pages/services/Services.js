import {Link} from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './Services.module.css'
import ButtonArrow from '../../components/ui/ButtonArrow/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import React from 'react';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Services({setSelectedTab}) {

    const theme = useTheme();
    const matchesSmDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXsDevice = useMediaQuery(theme.breakpoints.down('xs'));

    function handleNavigation(value) {
        setSelectedTab(value);
    }

    return (
        <Grid container direction={'column'} className={styles.servicesContainer}>
            {/**
             * Custom Software Development
             **/}
            <Grid item>
                <Grid container direction={'row'} justifyContent={matchesSmDevice ? 'center' : 'flex-end'}>
                    <Grid item className={styles.rightServiceTextContainer}>
                        <Typography variant={'h4'} className={styles.heading4}>
                            Custom Software Development
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Complete digital solutions, from investigation to <span className={styles.orangeText}>celebration.</span>
                        </Typography>
                        <Button variant={'outlined'} className={styles.learnBtn} component={Link} to={'custom-software'} onClick={handleNavigation.bind(this, 1)}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={customSoftwareIcon} alt="custom software icon" className={styles.leftServiceIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            {/**
             * Mobile Development
             **/}
            <Grid item>
                <Grid container direction={'row'} className={styles.serviceContainer} justifyContent={matchesSmDevice ? 'center' : undefined}>
                    <Grid item className={styles.leftServiceTextContainer}>
                        <Typography variant={'h4'} className={styles.heading4}>
                            Mobile App Development
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Integrate your web experience or create a standalone app {!matchesSmDevice && <br/>}with either mobile platform.
                        </Typography>
                        <Button variant={'outlined'} className={styles.learnBtn} component={Link} to={'mobile-apps'} onClick={handleNavigation.bind(this, 1)}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={mobileAppsIcon} alt="mobile phone icon" className={styles.rightServiceIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            {/**
             * Website Development
             **/}
            <Grid item>
                <Grid container direction={'row'} className={styles.serviceContainer} justifyContent={matchesSmDevice ? 'center' : 'flex-end'}>
                    <Grid item className={styles.rightServiceTextContainer}>
                        <Typography variant={'h4'} className={styles.heading4}>
                            Website Development
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant={'subtitle1'} className={styles.subtitle1}>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant={'outlined'} className={styles.learnBtn} component={Link} to={'websites'} onClick={handleNavigation.bind(this, 1)}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={websiteIcon} alt="website icon" className={styles.leftServiceIcon}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services
