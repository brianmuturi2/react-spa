import React, {useEffect, useState} from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

    /**
     * MEDIA QUERIES
     * */

    const theme = useTheme();
    const matchesDevice = useMediaQuery(theme.breakpoints.down('lg'));

    /**
     * TABS
     * */

    const [tabValue, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    /**
     * SERVICES MENU
     * */

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const menuOpen = Boolean(menuAnchorEl);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
        setValue(1)
    };
    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const menuOptions = [
        {
            link: 'services',
            label: 'All Services'
        },
        {
            link: 'custom-software',
            label: 'Custom Software Development'
        },
        {
            link: 'mobile-apps',
            label: 'Mobile App Development'
        },
        {
            link: 'websites',
            label: 'Website Development'
        }
    ]

    /**
     * MENU ITEMS
     * */

    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)

    const handleMenuItemClick = (i) => {
        console.log('Setting index', i);
        setMenuAnchorEl(null);
        setSelectedMenuIndex(i)
        handleMenuClose();
    }

    /**
     * UPDATE SELECTED TAB & MENU ITEM ON PAGE REFRESH
     * */

    useEffect(() => {
       if (window.location.pathname === '/' && tabValue !== 0) {
           setValue(0)
       } else if (
           (window.location.pathname === '/services' || window.location.pathname === '/custom-software' || window.location.pathname === '/mobile-apps' || window.location.pathname === '/websites') && tabValue !== 1) {
           setValue(1)

           switch(window.location.pathname) {
               case '/custom-software':
                   setSelectedMenuIndex(1)
                   break;
               case '/mobile-apps':
                   setSelectedMenuIndex(2)
                   break;
               case '/websites':
                   setSelectedMenuIndex(3)
                   break;
               default:
                   setSelectedMenuIndex(0)
           }

       } else if (window.location.pathname === '/revolution' && tabValue !== 2) {
           setValue(2)
       } else if (window.location.pathname === '/about' && tabValue !== 3) {
           setValue(3)
       } else if (window.location.pathname === '/contact' && tabValue !== 4) {
           setValue(4)
       }
    }, []);

    const tabs = (
        <>
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
                classes={{paper: styles.menu}}
                MenuListProps={{
                    'aria-labelledby': 'services-button',
                    onMouseLeave: handleMenuClose
                }}
            >
                {
                    menuOptions.map((menu,index) => (
                        <MenuItem onClick={handleMenuItemClick.bind(this, index)}
                                  component={Link} to={`/${menu.link}`}
                                  classes={{root: styles.menuItem, selected: styles.menuItemSelected}}
                                  selected={index === selectedMenuIndex}
                                  key={index}>{menu.label}</MenuItem>))
                }
            </Menu>
        </>
    );

    /**
     * DRAWER
     * */

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [drawerOpened, setDrawerOpened] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpened(!drawerOpened);
    }

    const drawer = (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
                sx={{ ...(drawerOpened && { display: 'none' }) }}
                className={styles.drawerIcon}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor={'right'}
                open={drawerOpened}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}>

                <List>
                    <ListItem divider button component={Link} to={'/'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to={'services'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to={'revolution'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to={'about'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to={'contact'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>Contact Us</ListItemText>
                    </ListItem>
                    <ListItem divider button component={Link} to={'estimate'} onClick={toggleDrawer}>
                        <ListItemText disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>

            </SwipeableDrawer>
        </>
    )

    return (
        <ElevationScroll>
            <AppBar position={'fixed'} color={'primary'}>
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={!matchesDevice ? styles.logo : styles.logoSmall}/>
                    {
                        !matchesDevice ? tabs : drawer
                    }
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header;
