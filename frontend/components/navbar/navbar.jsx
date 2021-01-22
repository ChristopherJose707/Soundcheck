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
        if (this.dropdownUserMenu === null) {
            return null;
        };
        
        if (!this.dropdownUserMenu.contains(e.target)) {
            this.setState({showUserMenu: false}, () => {
                document.removeEventListener('click', this.closeUserMenu)
            })
        }
    };

    handleDropdown() {
        document.getElementById("navbar-ellipsis-id").classList.toggle("show")
    }


    render() {
        
        const dropdown =   
                <div className="user-dropdown" ref={(element) => {this.dropdownUserMenu = element}}>
                    <div className="user-dropdown-content">
                        <Link to={`/users/${this.props.currentUser.id}`}><FontAwesomeIcon icon="user" />Profile</Link>
                        <a href="https://github.com/ChristopherJose707"><FontAwesomeIcon icon={['fab', 'github']} />Github</a>
                        <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/"><FontAwesomeIcon icon={['fab', 'linkedin']} />LinkedIn</a>
                    </div>
                </div> 

        const userDisplayName = this.props.currentUser.display_name.length > 10 ?
                this.props.currentUser.display_name.slice(0,10)
                : this.props.currentUser.display_name
        
        const signoutOrLinks = this.props.currentUser ? 
                <div className="option-dropdown" 
                    ref={(element) => {this.dropdownMenu = element}}>
                    <button onClick={() => this.props.logout()}>Sign Out</button> 
                </div> 
        :        <span className="option-dropdown" 
                    ref={(element) => {this.dropdownMenu = element}}>
                    <a href="google.com">
                        <FontAwesomeIcon className="option-dropdown-links" 
                            icon={['fab', 'google']} />
                        Google
                    </a>
                    <a href="facebook.com">
                        <FontAwesomeIcon className="option-dropdown-links" 
                            icon={['fab', 'facebook']} />
                        Facebook
                    </a>
                    <a href="soundcloud.com">
                        <FontAwesomeIcon className="option-dropdown-links" 
                        icon={['fab', 'soundcloud']} />
                        SoundCloud
                    </a>
                </span>

        const signOutButton = this.props.currentUser ?  
        <button onClick={() => this.props.logout()}>Sign Out</button> : null;
        return (
            <nav className="navbar-parent">
                <div className="navbar">
                    <ul className="navbar-left">
                        <li className="navbar-logo-li"><Link className="navbar-logo" to="/discover">
                            <img className="cloud" src={window.logo}/></Link></li>
                        <li><Link className="navbar-home" to="/discover"></Link></li>
                        <li><Link className={`navbar-linkedin ${this.props.match.path === "/discover" ? "black" : ""}`} to="/discover">Home</Link></li>

                        {/* <li><a href="https://www.linkedin.com/in/christopher-jose-6361aa120/" className="navbar-linkedin">Home</a></li> */}
                        <li><a href="https://github.com/ChristopherJose707" className="navbar-github" target="_blank">Github</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/" className="navbar-mdn" target="_blank">MDN Docs</a></li>
                    </ul>
                    <div className="navbar-search">
                        <input className="navbar-search-input" type="text" disabled></input>
                        <button className="navbar-search-button"><FontAwesomeIcon icon="search" /></button>
                    </div>
                    <ul className="navbar-right-links">
                        <li className="upgrade"><a href="https://google.com" target="_blank">Google</a></li>
                        <div className={`navbar-upload-div ${this.props.match.path === "/upload" ? "black" : ""}`}>
                            <li><Link className={`navbar-upload-link ${this.props.match.path === "/upload" ? "black" : ""}`} to="/upload">Upload</Link></li>

                        </div>
                        <div className={`navbar-right-user navbar-user-dropdown ${this.state.showUserMenu ? "black" : "" }`}>
                            <li>{this.props.currentUser.profilePicture ? 
                                <img className="profile-pic" src={this.props.currentUser.profilePicture} /> : null}
                            </li>
                            <li><p className={`navbar-display-name ${this.state.showUserMenu ? "black" : "" }`} onClick={this.showUserMenu}> {userDisplayName} <FontAwesomeIcon icon="angle-down" /></p></li>
                            <li className="user-dropdown-li" >{this.state.showUserMenu ? dropdown : null}</li>
                        </div>
                        <div className="navbar-ellipsis-dropdown">
                            <button className="navbar-options nav-dropbtn" onClick={() => this.handleDropdown()}>
                                <FontAwesomeIcon className="navbar-ellipsis" icon="ellipsis-h" />
                            </button>
                            <ul id="navbar-ellipsis-id" className="navbar-ellipsis-content">
                                {signOutButton}

                            </ul>
                        </div>
                        
                    </ul>
                </div>
            </nav>

        )
        };

        
    }

export default Navbar;

