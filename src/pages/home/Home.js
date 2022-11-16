import React from 'react'
import Lottie from 'react-lottie';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import animationData from '../../animations/landinganimation/data'
import styles from './Home.module.css'
import ButtonArrow from '../../components/ui/ButtonArrow/ButtonArrow';

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
                <Grid item>
                    <Grid container direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                        <Grid sm item className={styles.heroTextContainer}>
                            <Typography variant={'h2'} align={'center'} className={styles.header}>
                                Bringing West Coast Technology<br/>to the Midwest
                            </Typography>
                            <Grid container justifyContent={'center'} className={styles.btnContainer}>
                                <Grid item>
                                    <Button variant={'contained'} color={'secondary'} className={styles.estimateBtn}>Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={'outlined'} className={styles.learnBtn}>
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
            </Grid>
    )
}

export default Home
