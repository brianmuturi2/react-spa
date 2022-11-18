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

function Header({selectedTab, setSelectedTab, selectedMenu, setSelectedMenu}) {

    /**
     * MEDIA QUERIES
     * */

    const theme = useTheme();
    const matchesDevice = useMediaQuery(theme.breakpoints.down('lg'));

    /**
     * TABS
     * */

    const handleTabChange = (newValue) => {
        if (selectedTab === 1) {
            setSelectedMenu(null);
        }
        setSelectedTab(newValue);
    };

    /**
     * SERVICES MENU
     * */

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const menuOpen = Boolean(menuAnchorEl);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
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

    const handleMenuItemClick = (i) => {
        setMenuAnchorEl(null);
        setSelectedMenu(i)
        setSelectedTab(1);
        handleMenuClose();
    }

    /**
     * DRAWER
     * */

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [drawerOpened, setDrawerOpened] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpened(!drawerOpened);
    }

    useEffect(() => {
        if (window.location.pathname === '/' && selectedTab !== 0) {
            setSelectedTab(0)
        } else if (
            (window.location.pathname === '/services' || window.location.pathname === '/custom-software' || window.location.pathname === '/mobile-apps' || window.location.pathname === '/websites') && selectedTab !== 1) {
            setSelectedTab(1)

            switch(window.location.pathname) {
                case '/custom-software':
                    setSelectedMenu(1)
                    break;
                case '/mobile-apps':
                    setSelectedMenu(2)
                    break;
                case '/websites':
                    setSelectedMenu(3)
                    break;
                default:
                    setSelectedMenu(0)
            }

        } else if (window.location.pathname === '/revolution' && selectedTab !== 2) {
            setSelectedTab(2)
        } else if (window.location.pathname === '/about' && selectedTab !== 3) {
            setSelectedTab(3)
        } else if (window.location.pathname === '/contact' && selectedTab !== 4) {
            setSelectedTab(4)
        }
    }, [selectedTab, setSelectedTab, setSelectedMenu]);

    const tabs = (
        <>
            <Tabs aria-label="navigation tabs" value={selectedTab === 'reset' ? false : selectedTab} textColor="secondary" indicatorColor="primary" className={styles.tabContainer}>
                <Tab label="Home" {...a11yProps(0)} className={styles.tab} component={Link} to={'/'} onClick={handleTabChange.bind(this, 0)}/>
                <Tab label="Services" {...a11yProps(1)} className={styles.tab}
                     id="services-button"
                     aria-controls={menuOpen ? 'services-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={menuOpen ? 'true' : undefined}
                     onMouseOver={handleMenuClick}/>
                <Tab label="The Revolution" {...a11yProps(2)} className={styles.tab} component={Link} to={'revolution'} onClick={handleTabChange.bind(this, 2)}/>
                <Tab label="About Us" {...a11yProps(3)} className={styles.tab} component={Link} to={'about'} onClick={handleTabChange.bind(this, 3)}/>
                <Tab label="Contact Us" {...a11yProps(4)} className={styles.tab} component={Link} to={'contact'} onClick={handleTabChange.bind(this, 4)}/>
            </Tabs>
            <Button variant="contained" color={'secondary'} className={styles.estimateBtn} component={Link} to={'estimate'} onClick={handleTabChange.bind(this, false)}>Free Estimate</Button>
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
                                  selected={index === selectedMenu}
                                  key={index}>{menu.label}</MenuItem>))
                }
            </Menu>
        </>
    );

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
