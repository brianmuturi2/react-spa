import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import styles from './Header.module.css';
import logo from '../../../assets/logo.svg'

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

function Header(props) {
    return (
        <ElevationScroll>
            <AppBar position={'fixed'} color={'primary'}>
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={styles.logo}/>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}

export default Header;
