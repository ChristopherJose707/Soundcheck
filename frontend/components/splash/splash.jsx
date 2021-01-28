import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from '../../../app/assets/images/cloud.png';
class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="splash">
                <div className="splash-upper-orange"></div>
                <div className="splash-banner">
                    <nav className="splash-navbar">
                        <div className="splash-banner-right">
                            <button className="splash-login" 
                                onClick={() => this.props.openModal("login")}>
                                Sign In
                            </button>
                            <br/>
                            <button className="splash-signup" 
                                onClick={() => this.props.openModal("signup")}>
                                Create account
                            </button>
                            <img className="cloud" src={window.logo}/>
                        </div>
                        {/* <div className="splash-banner-left">
                            <img className="cloud" src={window.logo}/>
                        </div> */}
                    </nav>
                    <div className="splash-banner-center">
                        <h2 className="splash-banner-header">Discover more with SoundCheck Go+</h2>
                        <p className="splash-banner-header-p">SoundCloud Go+ 
                        lets you listen offline, ad-free, with over 150 million 
                        tracks — and growing.</p>
                        <div className="creator-free">
                            <a className="creator" href="https://github.com/ChristopherJose707">
                                Meet the creator!</a>
                            <button className="try-free" 
                                onClick={() => this.props.openModal("signup")}>
                                    Try it for free
                            </button>
                        </div>
                    </div>
                </div>
                <div className="splash-middle-mobile">
                    <div className="mobile-pic"></div>
                    <div className="mobile-right">
                        <h1>Never Stop Listening</h1>
                        <div className="mobile-right-border"></div>
                        <span>SoundCheck is not available on iOS, Android, Sonos, Chromecast, and Xbox One. Only on Web.</span>
                    </div>
                </div>
                <div className="calling-creators">
                    <div className="creators-wrapper">
                        <h1>Calling all creators</h1>
                        <p>Get on SoundCheck to connect with fans, share your sounds, 
                            and grow your audience. What are you waiting for?</p>
                        <div className="find-out-wrapper">
                            <button className="creators-signup" 
                                        onClick={() => this.props.openModal("signup")}>
                                        Find Out More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="splash-bottom">
                    <h1>Thanks for listening. Now join in.</h1>
                    <h2>Save tracks, follow artists, and build playlists. All for free.</h2>
                    <div className="splash-bottom-wrapper">
                        <button className="splash-signup-bottom" 
                                    onClick={() => this.props.openModal("signup")}>
                                    Create account
                        </button>
                        <div className="splash-bottom-login-wrapper">
                            <p>Already have an account?
                            <button className="splash-login-bottom" 
                                        onClick={() => this.props.openModal("login")}>
                                        Sign In
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="splash-footer">
                    <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/ChristopherJose707" target="_blank">⁃    Github</a>
                </div>
            </div>
        );
    }
};

export default Splash;