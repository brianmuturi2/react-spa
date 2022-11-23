import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './About.module.css';

import history from '../../assets/history.svg';

function About() {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container alignItems={matchesMdDevice ? 'inherit' : 'center'}>
                <Grid item container direction={'column'} className={styles.widthContainer} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4} gutterBottom>About Us</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={styles.rowContainer} alignItems={matchesMdDevice ? 'inherit' : 'center'}>
                <Grid item container direction={'column'} className={styles.widthContainer} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4} gutterBottom>History</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            We're the new kid on the block.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Founded in 2019, we're ready to get our hands on the world's business problems.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            It all started with one question: why aren't all businesses using available technology? <br/>There are many different answers to that question: economic barriers, social barriers, education barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                           We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            All this change can be a lot to keep up with, and that's where we come in.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <img src={history} alt="quill pen sitting on top of book" className={styles.bookIcon} style={{marginLeft: matchesMdDevice ? 0 : '5em'}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About
