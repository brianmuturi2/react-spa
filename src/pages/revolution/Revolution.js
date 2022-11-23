import React from 'react';
import Lottie from 'react-lottie';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './Revolution.module.css';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Revolution() {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container>
                <Grid item>
                    <Typography variant={'h2'} className={styles.headingMain}>The Revolution</Typography>
                </Grid>
            </Grid>
            <Grid item container className={styles.rowContainer}>
                <Grid item md>
                    <img src={''} alt="Binoculars viewing mountain"/>
                </Grid>
                <Grid item container direction={'column'} className={styles.widthContainer} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Vision</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            We want to help businesses capitalize on the latest and greatest technology. The best way to predict the world into this next chapter of technological expansion, exploration, and innovation.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life's obstacles. Each project is a step towards that goal.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={styles.rowContainer}>
                <Grid item container direction={'column'} className={styles.widthContainer} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Technology</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Instead of changing together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Two years later they shocked the world by releasing a similar system, React Native for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! THis was a huge leap forward.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            This puts personalization in your pocket - faster, better, and more affordable than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <img src={''} alt="Hammer"/>
                </Grid>
            </Grid>
            <Grid item container className={styles.rowContainer} direction={'column'}>
                <Grid item alignSelf={matchesMdDevice ? 'center' : 'inherit'} className={styles.consultationBackground}>
                    <Typography variant={'h4'} className={styles.heading4}>Process</Typography>
                </Grid>
                <Grid item container alignItems={'center'}>
                    <Grid item container direction={'column'} className={styles.widthContainer} md>
                        <Grid item>
                            <Typography variant={'h4'} className={styles.heading4}>Consultation</Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'body1'} paragraph className={styles.body1}>
                                    Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                                </Typography>
                                <Typography variant={'body1'} paragraph className={styles.body1}>
                                    Detailed notes will be taken on your requirements and constraints, while taking cate to identify areas for consideration.
                                </Typography>
                                <Typography variant={'body1'} paragraph className={styles.body1}>
                                    Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and solution will help usher you into this new future of possibilities.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <img src={''} alt="Hammer"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Revolution
