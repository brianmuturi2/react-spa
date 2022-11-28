import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './Websites.module.css';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import analytics from '../../assets/analytics.svg';
import seo from '../../assets/seo.svg';
import outreach from '../../assets/outreach.svg';
import ecommerce from '../../assets/ecommerce.svg';

function Websites({setSelectedMenu}) {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    function setServiceMenu(i) {
        setSelectedMenu(i);
    }

    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container direction={'row'} justifyContent={'space-between'}>
                <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/mobile-apps'>
                        <img src={backArrow} alt="Back to Mobile Development Page"/>
                    </IconButton>
                </Grid>
                {matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/services' onClick={setServiceMenu.bind(this, 0)}>
                        <img src={forwardArrow} alt="Forward All Services"/>
                    </IconButton>
                </Grid>}
                <Grid item container direction={'column'} className={styles.widthContainer}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Having a website is a necessity in today's business world. They give you one central, public location to let people know who you are, what you do, and why you're the best at it.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drivers growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                {!matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/services' onClick={setServiceMenu.bind(this, 0)}>
                        <img src={forwardArrow} alt="Forward to All Services"/>
                    </IconButton>
                </Grid>}
            </Grid>
            <Grid item container direction={'row'} className={`${styles.rowContainer}`} alignItems={'center'} justifyContent={matchesMdDevice ? 'center' : 'flex-start'}>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} alt="graph with magnifying glass revealing 1's and 0's" className={styles.iconImgs}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={`${styles.rowContainer}`} alignItems={'center'} justifyContent={matchesMdDevice ? 'center' : 'flex-end'}>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="world outline made of dollar signs" className={styles.iconImgs}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        It's no secret that people like to shop online.
                    </Typography>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={`${styles.rowContainer}`} alignItems={'center'} justifyContent={matchesMdDevice ? 'center' : 'flex-start'}>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="megaphone" className={styles.iconImgs}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={`${styles.rowContainer} ${styles.lastRowContainer}`} alignItems={'center'} justifyContent={matchesMdDevice ? 'center' : 'flex-end'}>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'}>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>
                                Search Engine <br/>Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="website standing on winner's podium" className={styles.iconImgs}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        It's no secret that people like to shop online.
                    </Typography>
                    <Typography variant={'body1'} paragraph className={`${styles.body1} ${styles.rowTextBody}`}>
                        In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Websites
