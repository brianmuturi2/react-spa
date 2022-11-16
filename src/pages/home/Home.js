import React from 'react'
import Lottie from 'react-lottie';

import animationData from '../../animations/landinganimation/data'

import styles from './Home.module.css'

function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie options={defaultOptions}
                    height={'100%'}
                    width={'100%'}/>
        </div>
    )
}

export default Home
