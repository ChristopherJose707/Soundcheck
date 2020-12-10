import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showOptionMenu: false,
            showUserMenu: false
        }

        this.showOptionMenu = this.showOptionMenu.bind(this);
        this.closeOptionMenu = this.closeOptionMenu.bind(this);
        this.showUserMenu = this.showUserMenu.bind(this);
        this.closeUserMenu = this.closeUserMenu.bind(this);
        this.UserLinks = this.UserLinks.bind(this);
    };

    
    showOptionMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showOptionMenu: true}, () => {
            document.addEventListener('click', this.closeOptionMenu)
        })
    };
    
    closeOptionMenu(e) {
        e.preventDefault();
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({showOptionMenu: false}, () => {
                document.removeEventListener('click', this.closeOptionMenu)
            })
        }
    };

    showUserMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showUserMenu: true}, () => {
            document.addEventListener('click', this.closeUserMenu)
        })
    };

    closeUserMenu(e) {
        e.preventDefault();
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({showUserMenu: false}, () => {
                document.removeEventListener('click', this.closeUserMenu)
            })
        }
    };


    UserLinks() {
        if (!this.props.currentUser) {
            return (
                <div>
                     <a className="navbar-signin" 
                        onClick={() => this.props.openModal("login")}>
                        Sign In
                    </a>
                    <a className="navbar-signup" 
                        onClick={() => this.props.openModal("signup")}>
                        Create Account
                    </a>
                </div>
            )
        } else {
            const userDisplayName = this.props.currentUser.display_name.length > 10 ?
                this.props.currentUser.display_name.slice(0,10)
                : this.props.currentUser.display_name
            return (
                
            <div>
                <a className="navbar-user" onClick={this.showUserMenu}>
                    <div className="navbar-profile-pic">
                        {this.props.currentUser.profilePicture ? 
                        <img src={this.props.currentUser.profilePicture} /> : null}
                    </div>
                    <p className="navbar-display-name"> {userDisplayName}</p>
                    <FontAwesomeIcon icon="angle-down" />
                    {this.state.showUserMenu ? 
                        (<div className="user-dropdown" 
                        ref={(element) => {this.dropdownMenu = element}}>
                            <div className="navbar-user-icon">
                                <Link to={`/users/${this.props.currentUser.id}`}>
                                    <FontAwesomeIcon icon="user" />
                                    Profile
                                </Link>
                            </div>
                            <div className="navbar-github-icon">
                                <a href="https://github.com/ChristopherJose707">
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                    Github
                                </a>
                            </div>
                            <div className="navbar-linkedin-icon">
                                <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    LinkedIn
                                </a>
                            </div>
                        </div>) : null
                    }
                </a>

            </div>
            )
        }
    }


    render() {
        const signoutOrLinks = this.props.currentUser ? 
                <div className="option-dropdown" 
                    ref={(element) => {this.dropdownMenu = element}}>
                    <button onClick={() => this.props.logout()}>
                        Sign Out</button> 
                </div> 
        :        <div className="option-dropdown" 
                    ref={(element) => {this.dropdownMenu = element}}>
                    <a href="google.com">Google</a>
                    <a href="facebook.com">Facebook</a>
                    <a href="soundcloud.com">SoundCloud</a>
                </div>


        return (
             <div className="navbar">
                <Link className="navbar-logo" to="/discover"></Link>
                <Link className="navbar-home" to="/discover"></Link>
                <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"
                    className="navbar-linkedin">LinkedIn
                </a>
                <a href="https://github.com/ChristopherJose707"
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
                {this.UserLinks()}
                <button className="navbar-options" onClick={this.showOptionMenu}>
                    <FontAwesomeIcon className="navbar-ellipsis" 
                    icon="ellipsis-h" />
                </button>
                { this.state.showOptionMenu ? (signoutOrLinks) : (null) }
            </div>
        )
        };
    }

export default Navbar;
