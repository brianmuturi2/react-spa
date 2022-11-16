import React from 'react'
import Lottie from 'react-lottie';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import animationData from '../../animations/landinganimation/data'
import styles from './Home.module.css'
import ButtonArrow from '../../components/ui/ButtonArrow/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'

function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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
                                    <Button variant={'contained'} color={'secondary'} className={styles.estimateBtn}>Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={'outlined'} className={`${styles.learnBtn} ${styles.learnBtnHeader}`}>
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
                 * Services Block
                 **/}
                 <Grid item>
                     <Grid container direction={'row'} className={styles.serviceContainer}>
                         <Grid item className={styles.serviceTextContainer}>
                             <Typography variant={'h4'} className={styles.heading4}>
                                 Custom Software Development
                             </Typography>
                             <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                 Save Energy. Save Time. Save Money.
                             </Typography>
                             <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                 Complete digital solutions, from investigation to <span className={styles.orangeText}>celebration.</span>
                             </Typography>
                             <Button variant={'outlined'} className={styles.learnBtn}>
                                 <span style={{marginRight: 10}}>Learn More</span>
                                 <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                             </Button>
                         </Grid>
                         <Grid item>
                             <img src={customSoftwareIcon} alt="custom software icon" className={styles.serviceIcon}/>
                         </Grid>
                     </Grid>
                 </Grid>
            </Grid>
    )
}

export default Home
