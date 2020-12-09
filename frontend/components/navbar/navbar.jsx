import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {

        if (this.props.currentUser) {
            return (
                null
            )
            
        } else {  // no currentuser, render login, signup links
            return (
                <div className="navbar">
                    <Link className="navbar-logo" to="/discover"></Link>
                    <Link className="navbar-home" to="/discover"></Link>
                    <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"
                        className="navbar-linkedin">LinkedIn
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"
                        className="navbar-github">LinkedIn
                    </a>
                </div>
            )
        }
    }
}

export default Navbar;