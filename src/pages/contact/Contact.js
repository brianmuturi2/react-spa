import React, {useEffect, useState} from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import CallToAction from '../../components/ui/CallToAction/CallToAction';
import styles from './Contact.module.css';
import Button from '@mui/material/Button';

function Contact() {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [formData, setFormData] = useState();

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('lg'));

    function handleDialog(data) {
        if (data) {
            setFormData(data);
            setDialogOpen(!dialogOpen);
        }
    }

    function submitForm(e) {
        if (e === 'dismiss') {
            setDialogOpen(!dialogOpen);
        } else {
            setDialogOpen(!dialogOpen);
        }
    }

    return (
        <>
            <Grid container direction={matchesMdDevice ? 'column' : 'row'} className={styles.contactContainer}>
                <ContactForm onSubmit={handleDialog} title={'Contact Us'}/>
                <Grid item md={8}>
                    <CallToAction fixedBackground={true}/>
                </Grid>
            </Grid>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={dialogOpen}
                onClose={submitForm}
            >
                <DialogContent>
                    <ContactForm onSubmit={submitForm} title={'Confirm Message'} dialog={true} data={formData}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Contact

export function ContactForm({dialog, title, onSubmit, data}) {

    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (data) {
            setName(data.name);
            setPhone(data.phone);
            setEmail(data.email);
            setMessage(data.message);
        }
    }, [data]);

    function handleInputChange(event) {
        let valid;

        switch (event.target.id) {
            case 'name':
                setName(event.target.value)
                break;
            case 'phone':
                setPhone(event.target.value);

                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                if (!valid) {
                    setPhoneHelper('Please enter valid phone number');
                } else {
                    setPhoneHelper('');
                }
                break;
            case 'email':
                setEmail(event.target.value);

                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if (!valid) {
                    setEmailHelper('Please enter valid email');
                } else {
                    setEmailHelper('');
                }
                break;
            case 'message':
                setMessage(event.target.value);
                break;
            default:
                break;
        }
    }

    const formData = {
        name,
        phone,
        email,
        message
    };

    function handleSubmit() {
        if (!dialog) {
            onSubmit(formData)
        } else {
            onSubmit()
        }
    }

    return (
        <Grid item container direction={'column'} md={dialog ? 12 : 4} className={`${dialog ? '' : styles.contactTextContainer}`}>
            <Grid item>
                <Typography variant={'h4'} className={styles.heading4}>{title}</Typography>
            </Grid>
            {
                !dialog && (
                    <>
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
                    </>
                )
            }
            <Grid item container direction={'column'} className={styles.contactFormContainer}>
                <Grid item>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        value={name}
                        size="small"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item className={styles.formInput}>
                    <TextField
                        required
                        helperText={phoneHelper}
                        error={phoneHelper.length > 0}
                        id="phone"
                        label="Phone Number"
                        value={phone}
                        size="small"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item className={styles.formInput}>
                    <TextField
                        required
                        helperText={emailHelper}
                        error={emailHelper.length > 0}
                        id="email"
                        label="Email"
                        value={email}
                        size="small"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item className={styles.formInput}>
                    <TextField
                        required
                        id="message"
                        label="Message"
                        value={message}
                        size="small"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid item alignSelf={'center'}>
                <Button
                    disabled={!name.length || !message.length || !!phoneHelper.length || !!emailHelper.length}
                    variant={'contained'}
                    color={'secondary'}
                    className={styles.submitBtn}
                    onClick={handleSubmit}>Send Message</Button>
            </Grid>
        </Grid>
    )
}
