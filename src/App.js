import React, {Component} from "react";
import './App.css';
import Main from './components/Main';
import Dday from './components/Dday';
import Connect from "./components/Connect";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import ScrollButton from "./components/ScrollButton";
import ozoBanner from "./assets/images/banner_ozo.png";
import doreBanner from "./assets/images/banner_dore.png";
import invitationImg from "./assets/images/invitation.png";

class App extends Component {
    state = {
        copyComplete: false,
    }

    render() {
        return (
            <div className='container'>
                <ScrollButton />
                <Main />
                <Dday />
                <img className='bg' src={invitationImg} alt='invitation' />
                {/*<div className='section section-invitation' />*/}
                <img className='banner' src={doreBanner}  alt='도레' />
                <div className='section--margin'>
                    <Connect />
                </div>
                <img className='banner' src={ozoBanner}  alt='오조' />
                <div className='section--margin'>
                    <div className='section-title'>갤러리</div>
                    <div className='section-subtitle'>GALLERY</div>
                    <Gallery />
                    <div className='section-title'>오시는 길</div>
                    <div className='section-subtitle'>LOCATION</div>
                    <Location />
                </div>
                <div className='footer'>
                    Copyright 2021.<br/>
                    @kingbbode @yonee<br/>
                    All rights reserved.
                </div>
            </div>
        );
    }
}

export default App;
