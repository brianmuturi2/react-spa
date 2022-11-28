import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import CallToAction from '../../components/ui/CallToAction/CallToAction';
import styles from './Contact.module.css';
import Button from '@mui/material/Button';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [formData, setFormData] = useState();

    const [snackBar, setSnackBarState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('lg'));

    function handleDialog(data) {
        setFormData(data);
        setDialogOpen(!dialogOpen);

        if (!data.name.length) {
            setSnackBarState(prevState => ({...prevState, open: true}));
        }
    }

    function closeDialog() {
        setDialogOpen(!dialogOpen);
    }

    function closeSnackBar() {
        setSnackBarState(prevState => ({...prevState, open: false}));
    }

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: snackBar.vertical, horizontal: snackBar.horizontal }}
                open={snackBar.open}
                key={snackBar.vertical + snackBar.horizontal}
                autoHideDuration={6000} onClose={closeSnackBar}
            >
                <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
            <Grid container direction={matchesMdDevice ? 'column' : 'row'} className={styles.contactContainer}>
                <ContactForm onSubmit={handleDialog} title={'Contact Us'} data={formData}/>
                <Grid item md={8}>
                    <CallToAction fixedBackground={true}/>
                </Grid>
            </Grid>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={dialogOpen}
                onClose={closeDialog}
            >
                <DialogContent>
                    <ContactForm onSubmit={handleDialog} title={'Confirm Message'} dialog={true} data={formData}/>
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

    const [isLoading, setIsLoading] = useState(false);

    const requestUrl = 'https://us-central1-material-ui-project-5fc65.cloudfunctions.net/sendMail\n';

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
            setIsLoading(!isLoading);

            axios.get(requestUrl, {params: {
                    name,
                    phone,
                    email,
                    message
                }})
                .then(() => {
                    setIsLoading(!isLoading);
                    onSubmit({
                        name: '',
                        phone: '',
                        email: '',
                        message: ''
                    })
                }).catch(() => {
                    setIsLoading(!isLoading);
                });
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
            <Grid item container justifyContent={'center'}>
                <Grid item>
                    <Button
                        disabled={!name.length || !message.length || !!phoneHelper.length || !!emailHelper.length}
                        variant={'contained'}
                        color={'secondary'}
                        className={styles.submitBtn}
                        onClick={handleSubmit}>Send Message</Button>
                </Grid>
                { dialog && isLoading && <CircularProgress/>}
            </Grid>
        </Grid>
    )
}
