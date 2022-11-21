import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './CustomSoftware.module.css';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import lightBulb from '../../assets/bulb.svg';
import stopWatch from '../../assets/stopwatch.svg';
import cash from '../../assets/cash.svg'

function CustomSoftware() {
    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container direction={'row'}>
                <Grid item className={styles.leftArrowContainer}>
                    <IconButton component={Link} to={'/services'}>
                        <img src={backArrow} alt="Back to Services Page"/>
                    </IconButton>
                </Grid>
                <Grid item container direction={'column'} className={styles.heading}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Whether we're replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, adn ultimately controls the way you work.
                            Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Our custom solutions are designed from the ground up with your needs, wants, and goals at the core.
                            This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            We create exactly what you want, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={styles.rightArrowContainer}>
                    <IconButton component={Link} to={'/mobile-apps'}>
                        <img src={forwardArrow} alt="Forward to Mobile App Development"/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={styles.saveContainer} justifyContent={'center'}>
                <Grid item container direction={'column'} md className={styles.saveItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightBulb} alt="light bulb"/>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} md className={styles.saveItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopWatch} alt="stop watch"/>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} md className={styles.saveItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="money"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
