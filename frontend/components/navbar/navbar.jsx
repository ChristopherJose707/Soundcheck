import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenu: false
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };

    componentDidMount() {
    }
        
    showMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("in show menu")
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    };

    closeMenu(e) {
        e.preventDefault();
        if (this.state.showMenu) {
            console.log("close menu")
            this.setState({showMenu: false})
            document.removeEventListener('click', this.closeMenu)
        }
    };

   

    render() {
        
        if (this.props.currentUser) {
            return (
                <h1> navbar for currentUser </h1>
                )
                
            } else {  // no currentuser, render login, signup links
                console.log(this.state)
                // debugger;
            return (
                <div className="navbar">
                    <Link className="navbar-logo" to="/discover"></Link>
                    <Link className="navbar-home" to="/discover"></Link>
                    <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"
                        className="navbar-linkedin">LinkedIn
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"
                        className="navbar-github">Github
                    </a>
                    <div className="navbar-search">
                        <input className="navbar-search-input" 
                            type="text" 
                            placeholder="Search">
                        </input>
                        <button className="navbar-search-button">
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                    <a className="navbar-signin" 
                        onClick={() => this.props.openModal("login")}>
                        Sign In
                    </a>
                    <a className="navbar-signup" 
                        onClick={() => this.props.openModal("signup")}>
                        Create Account
                    </a>
                    <button className="navbar-options" onClick={this.showMenu}>
                        <FontAwesomeIcon className="navbar-ellipsis" 
                        icon="ellipsis-h" />
                    </button>
                    {
                        this.state.showMenu 
                        ? (
                            <div className="option-dropdown">
                                <button onClick={() => this.props.logout()}>
                                    Sign Out
                                </button> 
                            </div>
                        ) 
                    : (null)
                    }
                </div>
            )
        };
    }
}

export default Navbar;