import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from './CallToAction.module.css';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import React from 'react';

function CallToAction() {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container style={{height: '50em'}} alignItems={'center'} justifyContent={matchesMdDevice ? 'center' : 'space-between'} className={styles.background} direction={matchesMdDevice ? 'column' : 'row'}>
            <Grid item style={{marginLeft: matchesMdDevice ? '0' : '5em'}}>
                <Grid container direction={'column'}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>Simple Software. <br/> Revolutionary Results.</Typography>
                        <Typography variant={'subtitle2'} className={styles.subtitle2}>Take advantage of the 21st century.</Typography>
                        <Grid container item>
                            <Button variant={'outlined'} className={styles.learnBtn}>
                                <span style={{marginRight: 5}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={'#0B72B9'}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginRight: matchesMdDevice ? '0' : '5em', marginTop: matchesMdDevice ? '5em' : '0'}}>
                <Button variant={'contained'} className={styles.estimateBtn} color={'secondary'}>Free Estimate</Button>
            </Grid>
        </Grid>
    )
}

export default CallToAction;
