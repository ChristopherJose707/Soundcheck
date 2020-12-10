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
        this.UserLinks = this.UserLinks.bind(this);
    };

    
    showMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu)
        })
    };

    closeMenu(e) {
        e.preventDefault();
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu)
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
            console.log(this.props.currentUser)
            const userDisplayName = this.props.currentUser.display_name.length > 10 ?
            this.props.currentUser.display_name.slice(0,10)
            : this.props.currentUser.display_name
            return (
                
            <div>
                <a className="navbar-user" onClick={this.showMenu}>
                    <div className="navbar-profile-pic">
                        {this.props.currentUser.profilePicture ? 
                        <img src={this.props.currentUser.profilePicture} /> : null}
                    </div>
                    <p className="navbar-display-name"> {userDisplayName}</p>
                    <FontAwesomeIcon icon="angle-down" />
                    {this.state.showMenu ? 
                        (<div className="user-dropdown" 
                        ref={(element) => {this.dropdownMenu = element}}>
                            <Link to={`/users/${this.props.currentUser.id}`}>
                                <FontAwesomeIcon icon="user" />
                                Profile
                            </Link>
                            <a href="https://github.com/ChristopherJose707">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                                Github
                            </a>
                            <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                LinkedIn
                            </a>
                        </div>) : null
                    }
                </a>

            </div>
            )
        }
    }

    render() {
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
                <button className="navbar-options" onClick={this.showMenu}>
                    <FontAwesomeIcon className="navbar-ellipsis" 
                    icon="ellipsis-h" />
                </button>
                { this.state.showMenu ? (
                        <div className="option-dropdown"
                            ref={(element) => {this.dropdownMenu = element}}>
                            <button onClick={() => this.props.logout()}>
                                Sign Out
                            </button> 
                        </div>
                    ) : (null)
                }
            </div>
        )
        };
    }

export default Navbar;