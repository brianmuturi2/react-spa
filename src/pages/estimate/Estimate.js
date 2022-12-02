import React, {useState} from 'react';
import axios from 'axios';
import Lottie from 'react-lottie'
import {cloneDeep} from 'lodash';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './Estimate.module.css';

import software from '../../assets/Custom Software Icon.svg';
import mobile from '../../assets/mobileIcon.svg';
import website from '../../assets/websiteIcon.svg';
import check from '../../assets/check.svg';
import send from '../../assets/send.svg';
import camera from '../../assets/camera.svg';
import upload from '../../assets/upload.svg';
import person from '../../assets/person.svg';
import persons from '../../assets/persons.svg';
import people from '../../assets/people.svg';
import info from '../../assets/info.svg';
import bell from '../../assets/bell.svg';
import users from '../../assets/users.svg';
import iphone from '../../assets/iphone.svg';
import gps from '../../assets/gps.svg';
import customized from '../../assets/customized.svg';
import data from '../../assets/data.svg';
import android from '../../assets/android.svg';
import globe from '../../assets/globe.svg';
import biometrics from '../../assets/biometrics.svg';

import backArrowDisabled from '../../assets/backArrowDisabled.svg';
import forwardArrowDisabled from '../../assets/forwardArrowDisabled.svg';
import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';

import estimateAnimation from '../../animations/estimateAnimation/data.json';

const defaultQuestions = [
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
    }
]

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iphone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: users,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];

const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];

function Estimate() {

    const [dialogOpen, setDialogOpen] = useState(false);

    const [questions, setQuestions] = useState(defaultQuestions);

    const [totalCost, setTotalCost] = useState(0);

    const [service, setService] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeature, setCustomFeature] = useState('');
    const [category, setCategory] = useState('');
    const [userGroup, setUsers] = useState('');

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    function handleSubmit() {
        setDialogOpen(!dialogOpen);
        getTotal();
        getPlatforms();
        getFeatures();
        getCustomFeature();
        getCategory();
    }

    function closeDialog() {
        setDialogOpen(!dialogOpen);
    }

    function nextQuestion() {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};
        setQuestions(newQuestions);
    }

    function previousQuestion() {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const previousIndex = activeIndex - 1;

        newQuestions[activeIndex] = {...currentlyActive[0], active: false};
        newQuestions[previousIndex] = {...newQuestions[previousIndex], active: true};
        setQuestions(newQuestions);
    }

    function navigationPreviousDisable() {
        const currentlyActive = questions.filter(question => question.active);
        return currentlyActive[0].id === 1;
    }

    function navigationNextDisable() {
        const currentlyActive = questions.filter(question => question.active);
        return currentlyActive[0].id === questions[questions.length - 1].id;
    }

    function handleSelect(id) {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0]['options'].filter(option => option.selected)

        switch (currentlyActive[0].subtitle) {
            case 'Select one.':
                if (previousSelected.length > 0) {
                    previousSelected.forEach(option => option.selected = !option.selected)
                }
                newSelected.selected = !newSelected.selected;
                break;
            default:
                newSelected.selected = !newSelected.selected;
        }

        switch (newSelected.title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                resetSelections();
                break;
            case 'iOS/Android App Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                resetSelections();
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                setService(newSelected.title);
                resetSelections();
                break;
            default:
                setQuestions(newQuestions);
        }
    }

    function resetSelections() {
        setPlatforms([]);
        setFeatures([]);
        setCustomFeature('');
        setUsers('');
        setCategory('');
    }

    function getTotal() {
        let cost = 0;

        const selections = questions.map(question => question.options.filter(option => option.selected));

        selections.forEach(selection => selection.forEach(option => cost += option.cost));

        if (questions.length > 2) {
            const userCost = questions.filter(
                question => question.title === 'How many users do you expect?').map(
                question => question.options.filter(option => option.selected)
            )[0][0];

            setUsers(userCost.title);

            cost -= userCost.cost;
            cost *= userCost.cost;
        }

        setTotalCost(cost);
    }

    function getPlatforms() {
        let newPlatforms = [];

        if (questions.length > 2) {
            questions.filter(
                question => question.title === 'Which platforms do you need supported?').map(
                    question => question.options.filter(option => option.selected))[0].forEach(
                        option => newPlatforms.push(option.title));
        }
        setPlatforms(newPlatforms);
    }

    function getFeatures() {
        let newFeatures = [];

        if (questions.length > 2) {
            questions.filter(
                question => question.title === 'Which features do you expect to use?').map(
                question => question.options.filter(option => option.selected)).forEach(
                option => option.forEach(
                    newFeature => newFeatures.push(newFeature.title)
                ));
        }
        setFeatures(newFeatures);
    }

    function getCustomFeature() {
        let customFeature = '';

        if (questions.length > 2) {
            customFeature = questions.filter(
                question => question.title === 'What type of custom features do you expect to need?').map(
                question => question.options.filter(option => option.selected))[0][0].title;
        }
        setCustomFeature(customFeature);
    }

    function getCategory() {
        if (questions.length === 2) {
            const newCategory = questions.filter(
                question => question.title === 'Which type of website are you wanting?')[0].options.filter(
                    option => option.selected)[0].title;

            setCategory(newCategory);
        }
    }

    return (
        <>
            <Grid container direction={'row'} className={styles.mainContainer} style={{textAlign: matchesMdDevice ? 'center' : 'inherit'}} alignItems={matchesMdDevice ? 'center' : 'inherit'}>
                <Grid item container direction={'column'} justifyContent={'space-between'} lg alignItems={matchesMdDevice ? 'center' : 'inherit'}>
                    <Grid item>
                        <Typography variant={'h2'} className={styles.heading2}>Estimate</Typography>
                    </Grid>
                    <Grid item style={{maxWidth: '50em', marginRight: matchesMdDevice ? '' : '10em'}}>
                        <Lottie options={documentsOptions} height='100%' width='100%'/>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} justifyContent={'space-between'} lg alignItems={'center'}>
                    {
                        questions.filter(question => question.active).map((question, i) => (
                                <React.Fragment key={i}>
                                    <Grid item container direction={'column'} alignItems={'center'} >
                                        <Grid item>
                                            <Typography variant={'h2'} className={`${styles.heading2} ${styles.heading2_light}`} gutterBottom>{question.title}</Typography>
                                        </Grid>
                                        <Grid item>
                                            {question.subtitle && <Typography variant={'body1'} className={styles.subtitle1} gutterBottom>{question.subtitle}</Typography>}
                                        </Grid>
                                    </Grid>
                                    <Grid item container>
                                        {question.options.map(option => (
                                            <Grid item container
                                                  direction={'column'}
                                                  alignItems={'center'}
                                                  md
                                                  key={option.id}
                                                  component={Button}
                                                  onClick={handleSelect.bind(this, option.id)} style={{backgroundColor: option.selected ? '#FFBA60' : '', borderRadius: 0}}>
                                                <Grid item style={{textAlign: 'center'}}>
                                                    <Typography variant={'h6'} className={styles.heading6}>{option.title}</Typography>
                                                    {option.subtitle && <Typography variant={'body1'} className={styles.subtitle1}>{option.subtitle}</Typography>}
                                                </Grid>
                                                <Grid item>
                                                    <img src={option.icon} alt={option.iconAlt} className={styles.serviceIcon}/>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </React.Fragment>
                            ))
                    }
                    <Grid item container justifyContent={'space-around'}>
                        <Grid item className={styles.arrowContainer}>
                            <IconButton disabled={navigationPreviousDisable()} onClick={previousQuestion}>
                                <img src={navigationPreviousDisable() ? backArrowDisabled : backArrow} alt="Back to Previous Service"/>
                            </IconButton>
                        </Grid>
                        <Grid item className={styles.arrowContainer}>
                            <IconButton disabled={navigationNextDisable()} onClick={nextQuestion}>
                                <img src={navigationNextDisable() ? forwardArrowDisabled : forwardArrow} alt="Forward to Next Service"/>
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
                    <ContactForm
                        closeDialog={closeDialog}
                        cost={totalCost}
                        service={service}
                        platforms={platforms}
                        features={features}
                        customFeature={customFeature}
                        userGroup={userGroup}
                        category={category}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Estimate

export function ContactForm({closeDialog, cost, service, platforms, features, customFeature, userGroup, category}) {

    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const theme = useTheme();
    const matchesMdDevice = useMediaQuery(theme.breakpoints.down('md'));

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

    const softwareSelection = (
        <Grid item container direction={'column'} alignItems={'flex-start'}>
        <Grid item container alignItems={'center'}>
            {!matchesMdDevice && (<Grid item className={styles.checkMark} md={1.5}>
                <img src={check} alt="checkmark"/>
            </Grid>)}
            <Grid item md={10}>
                <Typography variant={'body1'} className={styles.body1}>
                    You want {service}
                    {platforms.length > 0 ? ` for ${
                        //if only web application is selected...
                        platforms.indexOf("Web Application") > -1 &&
                        platforms.length === 1
                            ? //then finish sentence here
                            "a Web Application."
                            : //otherwise, if web application and another platform is selected...
                            platforms.indexOf("Web Application") > -1 &&
                            platforms.length === 2
                                ? //then finish the sentence here
                                `a Web Application and an ${platforms[1]}.`
                                : //otherwise, if only one platform is selected which isn't web application...
                                platforms.length === 1
                                    ? //then finish the sentence here
                                    `an ${platforms[0]}`
                                    : //otherwise, if other two options are selected...
                                    platforms.length === 2
                                        ? //then finish the sentence here
                                        "an iOS Application and an Android Application."
                                        : //otherwise if all three are selected...
                                        platforms.length === 3
                                            ? //then finish the sentence here
                                            "a Web Application, an iOS Application, and an Android Application."
                                            : null
                    }` : ''}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container alignItems={'center'} className={styles.formInput}>
            {!matchesMdDevice && (<Grid item className={styles.checkMark} md={1.5}>
                <img src={check} alt="checkmark"/>
            </Grid>)}
            <Grid item md={10}>
                <Typography variant={'body1'} className={styles.body1}>
                    {"with "}
                    {/* if we have features... */}
                    {features.length > 0
                        ? //...and there's only 1...
                        features.length === 1
                            ? //then end the sentence here
                            `${features[0]}.`
                            : //otherwise, if there are two features...
                            features.length === 2
                                ? //...then end the sentence here
                                `${features[0]} and ${features[1]}.`
                                : //otherwise, if there are three or more features...
                                features
                                    //filter out the very last feature...
                                    .filter(
                                        (feature, index) =>
                                            index !== features.length - 1
                                    )
                                    //and for those features return their name...
                                    .map((feature, index) => (
                                        <span key={index}>{`${feature}, `}</span>
                                    ))
                        : null}
                    {features.length > 0 &&
                    features.length !== 1 &&
                    features.length !== 2
                        ? //...and then finally add the last feature with 'and' in front of it
                        ` and ${features[features.length - 1]}.`
                        : null}
                </Typography>
            </Grid>
        </Grid>
        <Grid item container alignItems={'center'} className={styles.formInput}>
            {!matchesMdDevice && (<Grid item className={styles.checkMark} md={1.5}>
                <img src={check} alt="checkmark"/>
            </Grid>)}
            <Grid item md={10}>
                <Typography variant={'body1'} className={styles.body1}>
                    The custom features will be of {customFeature.toLowerCase()}
                    {`, and the project will be used by about ${userGroup} users.`}
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    );

    const websiteSelection = (<Grid item container direction={'column'} alignItems={'flex-start'}>
        <Grid item container alignItems={'center'}>
            {!matchesMdDevice && (<Grid item className={styles.checkMark} md={1.5}>
                <img src={check} alt="checkmark"/>
            </Grid>)}
            <Grid item md={10}>
                <Typography variant={'body1'} className={styles.body1}>
                    You want {category === 'Basic' ? ' a Basic website' : category === 'Interactive' ? ' an interactive website' : ' an E-Commerce'}
                </Typography>
            </Grid>
        </Grid>
    </Grid>)

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
                    <Grid item className={styles.formInput}>
                        <Typography variant={'body1'} className={styles.body2} gutterBottom>
                            We can create this digital solution for an estimated
                            <span className={styles.cost}> ${cost.toFixed(2)}</span>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'body1'} className={styles.body2}>
                            Fill out your name, phone number, and email, place your request, and we'll get back to you with details moving and a final price.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} alignItems={'center'} justifyContent={'space-between'} md className={`${!matchesMdDevice ? styles.dialogPointsContainer : styles.dialogPointsContainerSmall}`}>
                    {category && websiteSelection}
                    {!category && softwareSelection}
                    <Grid item>
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            className={styles.submitBtn}
                            disabled={!name.length || !message.length || !!phoneHelper.length || !!emailHelper.length}
                            onClick={handleSubmit}>Place Request</Button>
                    </Grid>
                    { isLoading && <CircularProgress/>}
                </Grid>
            </Grid>
        </Grid>
    )
}
