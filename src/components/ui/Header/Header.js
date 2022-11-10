import React, {useState} from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import styles from './Header.module.css';
import logo from '../../../assets/logo.svg'
import {Link} from 'react-router-dom';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function a11yProps(index) {
    return {
        id: `navigation-tab-${index}`,
        'aria-controls': `navigation-tabpanel-${index}`,
    };
}

function Header(props) {

    const [tabValue, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ElevationScroll>
            <AppBar position={'fixed'} color={'primary'}>
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={styles.logo}/>
                    <Tabs aria-label="navigation tabs" value={tabValue} onChange={handleChange} textColor="secondary" indicatorColor="primary" className={styles.tabContainer}>
                        <Tab label="Home" {...a11yProps(0)} className={styles.tab} component={Link} to={'/'}/>
                        <Tab label="Services" {...a11yProps(1)} className={styles.tab} component={Link} to={'services'}/>
                        <Tab label="The Revolution" {...a11yProps(2)} className={styles.tab} component={Link} to={'revolution'}/>
                        <Tab label="About Us" {...a11yProps(3)} className={styles.tab} component={Link} to={'about'} />
                        <Tab label="Contact Us" {...a11yProps(4)} className={styles.tab} component={Link} to={'contact'}/>
                    </Tabs>
                    <Button variant="contained" color={'secondary'} className={styles.estimate} component={Link} to={'estimate'}>Free Estimate</Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header;
