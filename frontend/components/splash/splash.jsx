import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-banner">
                    <nav className="splash-navbar">
                        <div className="splash-banner-right">
                            <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign In</button>
                            <br/>
                            <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
                        </div>
                        <div className="splash-banner-left">
                            
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
};

export default Splash;