import React from 'react'
import Lottie from 'react-lottie';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import animationData from '../../animations/landinganimation/data'
import styles from './Home.module.css'
import ButtonArrow from '../../components/ui/ButtonArrow/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CallToAction from '../../components/ui/CallToAction/CallToAction';
import {Link} from 'react-router-dom';

function Home({setSelectedTab}) {

    const theme = useTheme();
    const matchesSmDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXsDevice = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    function handleNavigation(value) {
        setSelectedTab(value);
    }

    return (
            <Grid container direction={'column'} className={styles.mainContainer}>
                {/**
                 * Hero Block
                 **/}
                <Grid item>
                    <Grid container direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                        <Grid sm item className={styles.heroTextContainer}>
                            <Typography variant={'h2'} align={'center'} className={styles.heading2}>
                                Bringing West Coast Technology<br/>to the Midwest
                            </Typography>
                            <Grid container justifyContent={'center'} className={styles.btnContainer}>
                                <Grid item>
                                    <Button variant={'contained'} color={'secondary'} className={styles.estimateBtn} component={Link} to='/estimate' onClick={handleNavigation.bind(this, false)}>Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={'outlined'} className={`${styles.learnBtn} ${styles.learnBtnHeader}`} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={'#0B72B9'}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={styles.animation}>
                            <Lottie options={defaultOptions}
                                    height={'100%'}
                                    width={'100%'}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/**
                 * Custom Software Development
                 **/}
                 <Grid item>
                     <Grid container direction={'row'} className={styles.serviceContainer} justifyContent={matchesSmDevice ? 'center' : undefined}>
                         <Grid item className={styles.leftServiceTextContainer}>
                             <Typography variant={'h4'} className={styles.heading4}>
                                 Custom Software Development
                             </Typography>
                             <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                 Save Energy. Save Time. Save Money.
                             </Typography>
                             <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                 Complete digital solutions, from investigation to <span className={styles.orangeText}>celebration.</span>
                             </Typography>
                             <Button variant={'outlined'} className={styles.learnBtn} component={Link} to='/custom-software' onClick={handleNavigation.bind(this, 1)}>
                                 <span style={{marginRight: 10}}>Learn More</span>
                                 <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                             </Button>
                         </Grid>
                         <Grid item>
                             <img src={customSoftwareIcon} alt="custom software icon" className={styles.rightServiceIcon}/>
                         </Grid>
                     </Grid>
                 </Grid>
                {/**
                 * Mobile Development
                 **/}
                <Grid item>
                    <Grid container direction={'row'} className={styles.serviceContainer} justifyContent={matchesSmDevice ? 'center' : 'flex-end'}>
                        <Grid item className={styles.rightServiceTextContainer}>
                            <Typography variant={'h4'} className={styles.heading4}>
                                Mobile App Development
                            </Typography>
                            <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                Extend Functionality. Extend Access. Increase Engagement.
                            </Typography>
                            <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                Integrate your web experience or create a standalone app {!matchesSmDevice && <br/>}with either mobile platform.
                            </Typography>
                            <Button variant={'outlined'} className={styles.learnBtn} component={Link} to='/mobile-apps' onClick={handleNavigation.bind(this, 1)}>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <img src={mobileAppsIcon} alt="mobile phone icon" className={styles.leftServiceIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/**
                 * Website Development
                 **/}
                <Grid item>
                    <Grid container direction={'row'} className={styles.serviceContainer} justifyContent={matchesSmDevice ? 'center' : undefined}>
                        <Grid item className={styles.leftServiceTextContainer}>
                            <Typography variant={'h4'} className={styles.heading4}>
                                Website Development
                            </Typography>
                            <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                Optimized for Search Engines, built for speed.
                            </Typography>
                            <Button variant={'outlined'} className={styles.learnBtn} component={Link} to='/websites' onClick={handleNavigation.bind(this, 1)}>
                                <span style={{marginRight: 10}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                            </Button>
                        </Grid>
                        <Grid item>
                            <img src={websiteIcon} alt="website icon" className={styles.rightServiceIcon}/>
                        </Grid>
                    </Grid>
                </Grid>
                {/**
                 * Revolution Section
                 **/}
                <Grid item>
                    <Grid container alignItems={'center'} justifyContent={'center'} style={{height: '50em'}} className={styles.serviceContainer}>
                        <Card className={styles.revolutionCard}>
                            <CardContent>
                                <Grid container direction={'column'} style={{textAlign: 'center'}}>
                                    <Grid item>
                                        <Typography variant={'h3'} className={styles.heading3} gutterBottom>The Revolution</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'subtitle1'} gutterBottom>
                                            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                        </Typography>
                                        <Button variant={'outlined'} className={`${styles.learnBtn} ${styles.learnBtnHeader}`} component={Link} to='/revolution' onClick={handleNavigation.bind(this, 2)}>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={15} height={15} fill={'#0B72B9'}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={styles.revolutionBackground}/>
                    </Grid>
                </Grid>
                {/**
                 * Information Section
                 **/}
                <Grid item>
                    <Grid container direction={'row'} style={{height: '50em'}} alignItems={'center'}>
                        <Grid item container style={{position: 'absolute', textAlign: matchesSmDevice ? 'center' : 'inherit'}} direction={matchesSmDevice ? 'column' : 'row'} spacing={matchesSmDevice ? 10 : 0}>
                            <Grid item sm style={{marginLeft: `${matchesSmDevice ? '0' : '5em'}`}}>
                                <Grid container direction={'column'}>
                                    <Typography variant={'h2'} style={{color: 'white'}} className={styles.heading2}>About Us</Typography>
                                    <Typography variant={'subtitle2'} className={styles.subtitle2}>Let's get personal.</Typography>
                                    <Grid item>
                                        <Button variant={'outlined'} className={styles.learnBtn} style={{color: 'white', borderColor: 'white'}} component={Link} to='/about' onClick={handleNavigation.bind(this, 3)}>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={10} height={10} fill={'white'}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm style={{marginRight: `${matchesSmDevice ? '0' : '5em'}`, textAlign: matchesSmDevice ? 'center' : 'right'}}>
                                <Grid container direction={'column'}>
                                    <Typography variant={'h2'} style={{color: 'white'}} className={styles.heading2}>Contact Us</Typography>
                                    <Typography variant={'subtitle2'} className={styles.subtitle2}>Say hello! </Typography>
                                    <Grid item>
                                        <Button variant={'outlined'} className={styles.learnBtn} style={{color: 'white', borderColor: 'white'}} component={Link} to='/contact' onClick={handleNavigation.bind(this, 4)}>
                                            <span style={{marginRight: 10}}>Learn More</span>
                                            <ButtonArrow width={10} height={10} fill={'white'}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={styles.infoBackground}/>
                    </Grid>
                </Grid>
                <CallToAction/>
            </Grid>
    )
}

export default Home
