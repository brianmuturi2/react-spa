import React from 'react';
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './MobileApps.module.css';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';

import integrationAnimation from '../../animations/integrationAnimation/data';

function MobileApps({setSelectedMenu}) {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    function setServiceMenu(i) {
        setSelectedMenu(i);
    }

    return (
        <Grid container direction={'column'} className={styles.mainContainer}>
            <Grid item container direction={'row'} justifyContent={'space-between'} className={styles.rowContainer}>
                <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/custom-software' onClick={setServiceMenu.bind(this, 1)}>
                        <img src={backArrow} alt="Back to Custom Software Development Page"/>
                    </IconButton>
                </Grid>
                {matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/websites' onClick={setServiceMenu.bind(this, 3)}>
                        <img src={forwardArrow} alt="Forward to Website Development"/>
                    </IconButton>
                </Grid>}
                <Grid item container direction={'column'} className={styles.widthContainer}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>iOS/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Whether you want an app for your customers, employees or yourself, we can build cross-platform native solutions for any part of your business process. This opens you uo to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                {!matchesMdDevice && <Grid item className={styles.arrowContainer}>
                    <IconButton component={Link} to='/websites' onClick={setServiceMenu.bind(this, 3)}>
                        <img src={forwardArrow} alt="Forward to Website Development"/>
                    </IconButton>
                </Grid>}
            </Grid>
            <Grid item container direction={matchesMdDevice ? 'column' : 'row'} alignItems={'start'} justifyContent={'space-between'} alignContent={matchesMdDevice ? 'center' : 'inherit'} className={styles.rowContainer}>
                <Grid item container direction={'column'} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth: '20em'}}/>
                </Grid>
                <Grid item container direction={'column'} md>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time.
                        </Typography>
                        <Typography variant={'body1'} paragraph className={styles.body1}>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={`${styles.rowContainer} ${styles.textIconContainer}`} justifyContent={'center'}>
                <Grid item container direction={'column'} md className={styles.iconTextItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" className={styles.imgIcons}/>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} md className={styles.iconTextItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Extend Access</Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign" className={styles.imgIcons}/>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} md className={styles.iconTextItem} alignItems={'center'}>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification" className={styles.imgIcons}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileApps
