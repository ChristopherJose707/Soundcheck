import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-upper-orange">
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
                        </div>
                        <div className="splash-banner-left">
                            
                        </div>
                    </nav>
                    <div className="splash-banner-center">
                        <h2 className="splash-banner-header">Discover more with SoundCheck Go+</h2>
                        <a href="https://github.com/ChristopherJose707">
                            Meet the creator!</a>
                        <button className="Try it for free" 
                            onClick={() => this.props.openModal("signup")}>
                                Try it for free
                        </button>
                        <p className="splash-banner-header-p">SoundCloud Go+ 
                        lets you listen offline, ad-free, with over 150 million 
                        tracks — and growing.</p>
                    </div>
                </div>

                </div>
            </div>
        );
    }
};

export default Splash;