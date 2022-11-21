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
import documentsAnimation from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data';
import automationAnimation from '../../animations/automationAnimation/data';
import uedAnimation from '../../animations/uxAnimation/data';
import roots from '../../assets/root.svg';

function CustomSoftware() {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const uedOptions = {
        loop: true,
        autoplay: true,
        animationData: uedAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container direction={'row'} justifyContent={'space-between'}>
                <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to={'/services'}>
                        <img src={backArrow} alt="Back to Services Page"/>
                    </IconButton>
                </Grid>
                {matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to={'/mobile-apps'}>
                        <img src={forwardArrow} alt="Forward to Mobile App Development"/>
                    </IconButton>
                </Grid>}
                <Grid item container direction={'column'} className={styles.widthContainer}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Whether we're replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, and ultimately controls the way you work.
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
                {!matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to={'/mobile-apps'}>
                        <img src={forwardArrow} alt="Forward to Mobile App Development"/>
                    </IconButton>
                </Grid>}
            </Grid>
            <Grid item container direction={'row'} className={styles.rowContainer} justifyContent={'center'}>
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
            <Grid item container direction={'row'} justifyContent={'space-between'}  className={styles.rowContainer}>
                <Grid item container alignItems={'center'}>
                    <Grid item container direction={'column'} className={styles.widthContainer} md>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 325, maxWidth: 275, minHeight: 275}}/>
                    </Grid>
                </Grid>
                <Grid item container alignItems={'center'} className={styles.animationRowContainer}>
                    {!matchesMdDevice && <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}}/>
                    </Grid>}
                    <Grid item container direction={'column'} className={styles.widthContainer} md>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                Whether you're a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                    {matchesMdDevice && <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}}/>
                    </Grid>}
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={styles.rootCauseContainer}>
                <Grid item container direction={'column'}>
                    <Grid item>
                        <img src={roots} alt="tree with roots extending out" height={'450em'} width={'450em'} className={styles.rootImg}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4} gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant={'body1'} className={styles.body1} paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant={'body1'} className={styles.body1} paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} justifyContent={'space-between'} className={styles.rowContainer}>
                <Grid item container alignItems={'center'}>
                    <Grid item container direction={'column'} className={styles.widthContainer} md>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                Why waste time when you don't have to?
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                We can help you identify processes with time or event based actions which can now easily be automated.
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{maxHeight: 290, maxWidth: 280}}/>
                    </Grid>
                </Grid>
                <Grid item container alignItems={'center'} className={`${styles.animationRowContainer} ${styles.automationRowContainer}`}>
                    {!matchesMdDevice && <Grid item md>
                        <Lottie options={uedOptions} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>}
                    <Grid item container direction={'column'} className={styles.widthContainer} md>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                A good design that isn't usable isn't a good design.
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography variant={'body1'} paragraph className={styles.body1}>
                                By prioritizing users and the real ways they interact with technology we're able to develop unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                    {matchesMdDevice && <Grid item md>
                        <Lottie options={uedOptions} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
