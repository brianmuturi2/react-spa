import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

import CallToAction from '../../components/ui/CallToAction/CallToAction';
import styles from './Contact.module.css';
import Button from '@mui/material/Button';

function Contact() {

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('lg'));

    function sendMessage() {

    }

    return (
        <Grid container direction={matchesMdDevice ? 'column' : 'row'} className={styles.contactContainer}>
            <Grid item container direction={'column'} md={4} className={styles.contactTextContainer}>
                <Grid item>
                    <Typography variant={'h4'} className={styles.heading4}>Contact Us</Typography>
                </Grid>
                <Grid item>
                    <Typography variant={'body1'} className={styles.subtitle1}>We're waiting</Typography>
                </Grid>
                <Grid item container direction={'row'}>
                    <Grid item>
                        <CallIcon color={'primary'}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} className={styles.contactText}>+254 726 635 116</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={'row'}>
                    <Grid item>
                        <EmailIcon color={'primary'}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} className={styles.contactText}>brianmuturi2@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} className={styles.contactFormContainer}>
                    <Grid item>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue="John Doe"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item className={styles.formInput}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            defaultValue="0726635116"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item className={styles.formInput}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue="brianmuturi2@gmail.com"
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid item className={styles.formInput}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Message"
                            defaultValue=""
                            size="small"
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
                <Grid item alignSelf={'center'}>
                    <Button variant={'contained'} color={'secondary'} className={styles.submitBtn} onClick={sendMessage}>Send Message</Button>
                </Grid>
            </Grid>
            <Grid item md={8}>
                <CallToAction fixedBackground={true}/>
            </Grid>
        </Grid>
    )
}

export default Contact
