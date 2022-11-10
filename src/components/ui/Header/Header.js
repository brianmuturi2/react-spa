import React, {useEffect, useState} from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const menuOpen = Boolean(menuAnchorEl);
    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
        setValue(1)
    };
    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    useEffect(() => {
       if (window.location.pathname === '/' && tabValue !== 0) {
           setValue(0)
       } else if (
           (window.location.pathname === '/services' || window.location.pathname === '/custom-software' || window.location.pathname === '/mobile-apps' || window.location.pathname === '/websites') && tabValue !== 1) {
           setValue(1)
       } else if (window.location.pathname === '/revolution' && tabValue !== 2) {
           setValue(2)
       } else if (window.location.pathname === '/about' && tabValue !== 3) {
           setValue(3)
       } else if (window.location.pathname === '/contact' && tabValue !== 4) {
           setValue(4)
       }
    }, []);

    return (
        <ElevationScroll>
            <AppBar position={'fixed'} color={'primary'}>
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={styles.logo}/>
                    <Tabs aria-label="navigation tabs" value={tabValue} onChange={handleTabChange} textColor="secondary" indicatorColor="primary" className={styles.tabContainer}>
                        <Tab label="Home" {...a11yProps(0)} className={styles.tab} component={Link} to={'/'}/>
                        <Tab label="Services" {...a11yProps(1)} className={styles.tab}
                             id="services-button"
                             aria-controls={menuOpen ? 'services-menu' : undefined}
                             aria-haspopup="true"
                             aria-expanded={menuOpen ? 'true' : undefined}
                             onMouseOver={handleMenuClick}/>
                        <Tab label="The Revolution" {...a11yProps(2)} className={styles.tab} component={Link} to={'revolution'}/>
                        <Tab label="About Us" {...a11yProps(3)} className={styles.tab} component={Link} to={'about'} />
                        <Tab label="Contact Us" {...a11yProps(4)} className={styles.tab} component={Link} to={'contact'}/>
                    </Tabs>
                    <Button variant="contained" color={'secondary'} className={styles.estimate} component={Link} to={'estimate'}>Free Estimate</Button>
                    <Menu
                        id="services-menu"
                        anchorEl={menuAnchorEl}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'services-button',
                            onMouseLeave: handleMenuClose
                        }}
                    >
                        <MenuItem onClick={handleMenuClose} component={Link} to={'/services'}>Services</MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to={'/custom-software'}>Custom Software Development</MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to={'/mobile-apps'}>Mobile App Development</MenuItem>
                        <MenuItem onClick={handleMenuClose} component={Link} to={'/websites'}>Website Development</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header;
