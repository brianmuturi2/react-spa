import React, {useState} from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import Grid from '@mui/material/Grid';
import styles from './Estimate.module.css';

import software from '../../assets/Custom Software Icon.svg';
import mobile from '../../assets/mobileIcon.svg';
import website from '../../assets/websiteIcon.svg';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';

const allQuestions = [
    {
        id: 1,
        title: 'Which service are you interested in?',
        active: true,
        subtitle: null,
        options: [
            {
                id: 1,
                title: 'Custom Software Development',
                subtitle: null,
                icon: software,
                iconAlt: 'three floating screens',
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: 'iOS/Android App Development',
                subtitle: null,
                icon: mobile,
                iconAlt: 'outlines of phones and tablet',
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: 'Website Development',
                subtitle: null,
                icon: website,
                iconAlt: 'computer outline',
                selected: false,
                cost: 0
            }
        ]
    },
    {
        id: 2,
        title: 'Which type of website are you wanting?',
        active: true,
        subtitle: 'Select one.',
        options: [
            {
                id: 1,
                title: 'Basic',
                subtitle: '(Informational)',
                icon: 'info',
                iconAlt: 'information icon',
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: 'Interactive',
                subtitle: "(Users, API'S, Messaging)",
                icon: 'mobile',
                iconAlt: 'switch outlines',
                selected: false,
                cost: 20
            },
            {
                id: 3,
                title: 'E-Commerce',
                subtitle: '(Sales)',
                icon: 'globe',
                iconAlt: 'world outline',
                selected: false,
                cost: 30
            }
        ]
    }
]

const question = allQuestions.shift()

function Estimate() {

    const [dialogOpen, setDialogOpen] = useState(false);

    function changeService() {

    }

    function handleSubmit() {
        setDialogOpen(!dialogOpen);
    }

    function closeDialog() {
        setDialogOpen(!dialogOpen);
    }

    return (
        <>
            <Grid container direction={'row'} className={styles.mainContainer}>
                <Grid item container direction={'column'} justifyContent={'space-between'} lg>
                    <Grid item>
                        <Typography variant={'h4'} className={styles.heading4}>Estimate</Typography>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
                <Grid item container direction={'column'} justifyContent={'space-between'} lg alignItems={'center'} key={question.id}>
                    <Grid item>
                        <Typography variant={'h4'} className={`${styles.heading4} ${styles.heading4_light}`}>{question.title}</Typography>
                        {question.subtitle && <Typography variant={'body1'} className={styles.subtitle1}>{question.subtitle}</Typography>}
                    </Grid>
                    <Grid item container>
                        {question.options.map(option => (
                            <Grid item container direction={'column'} alignItems={'center'} md key={option.id}>
                                <Grid item>
                                    <Typography variant={'h6'} className={styles.heading6}>{option.title}</Typography>
                                    {option.subtitle && <Typography variant={'body1'} className={styles.subtitle1}>{option.subtitle}</Typography>}
                                </Grid>
                                <Grid item>
                                    <img src={option.icon} alt={option.iconAlt} className={styles.serviceIcon}/>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item container justifyContent={'space-around'}>
                        <Grid item className={styles.arrowContainer}>
                            <IconButton onClick={changeService}>
                                <img src={backArrow} alt="Back to Previous Service"/>
                            </IconButton>
                        </Grid>
                        <Grid item className={styles.arrowContainer}>
                            <IconButton onClick={changeService}>
                                <img src={forwardArrow} alt="Forward to Next Service"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            className={styles.submitBtn}
                            onClick={handleSubmit}>Get Estimate</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={dialogOpen}
                onClose={closeDialog}
            >
                <DialogContent>
                    <ContactForm closeDialog={closeDialog}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Estimate

export function ContactForm({closeDialog}) {

    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const requestUrl = 'https://us-central1-material-ui-project-5fc65.cloudfunctions.net/sendMail';

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
        setIsLoading(!isLoading);

        axios.get(requestUrl, {params: {
                name,
                phone,
                email,
                message
            }})
            .then(() => {
                setIsLoading(!isLoading);
                closeDialog();
            }).catch(() => {
            setIsLoading(!isLoading);
        });
    }

    return (
        <Grid item container direction={'column'} alignItems={'center'}>
            <Grid item>
                <Typography variant={'h4'} className={styles.heading4}>Estimate</Typography>
            </Grid>
            <Grid item container className={styles.contactFormContainer}>
                <Grid item container direction={'column'} md>
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
                <Grid item container direction={'column'} alignItems={'center'} justifyContent={'space-between'} md className={styles.dialogPointsContainer}>
                    <Grid item container direction={'column'} alignItems={'flex-start'}>
                        <Grid item>
                            <Typography variant={'body1'} className={styles.body1}>You want an iOS & Android App</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} className={styles.body1}>for more than 500 users</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body1'} className={styles.body1}>using camera, GPS, and a backend API.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            className={styles.submitBtn}
                            onClick={handleSubmit}>Place Request</Button>
                    </Grid>
                    { isLoading && <CircularProgress/>}
                </Grid>
            </Grid>
        </Grid>
    )
}
