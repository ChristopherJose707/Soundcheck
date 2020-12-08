import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <nav className="splash-navbar">
                    <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign In</button>
                    <br></br>
                    <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
                    
                </nav>
            </div>
        );
    }
};

export default Splash;