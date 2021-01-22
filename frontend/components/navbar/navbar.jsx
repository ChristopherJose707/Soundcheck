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
        document.getElementById("ellip-drop").classList.toggle("black");
        
    }

    handleUserDropdown() {
        document.getElementById("userdrop-id").classList.toggle("show")
        document.getElementById("nav-right").classList.toggle("black")
    }


    render() {
        
        const dropdown =   
                <div className="user-dropdown" ref={(element) => {this.dropdownUserMenu = element}}>
                    <div className="user-dropdown-content">
                        <Link to={`/users/${this.props.currentUser.id}`}><FontAwesomeIcon icon="user" />Profile</Link>
                        {/* <a href="https://github.com/ChristopherJose707"><FontAwesomeIcon icon={['fab', 'github']} />Github</a> */}
                        <a href="https://www.linkedin.com/in/christopher-jose-6361aa120/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} />LinkedIn</a>
                    </div>
                </div> 

        const userDisplayName = this.props.currentUser.display_name.length > 10 ?
                this.props.currentUser.display_name.slice(0,10)
                : this.props.currentUser.display_name

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
                        <div id="nav-right" className={`navbar-right-user navbar-user-dropdown ${this.state.showUserMenu ? "black" : "" }`}>
                            <li>{this.props.currentUser.profilePicture ? 
                                <img className="profile-pic" src={this.props.currentUser.profilePicture} /> : null}
                            </li>
                            {/* <li><p className={`navbar-display-name ${this.state.showUserMenu ? "black" : "" }`} onClick={this.showUserMenu}> {userDisplayName} <FontAwesomeIcon icon="angle-down" /></p></li>
                            <li className="user-dropdown-li" >{this.state.showUserMenu ? dropdown : null}</li> */}
                            <button className="user-dropdown-btn" onClick={() => this.handleUserDropdown()}>
                                {userDisplayName} <FontAwesomeIcon icon="angle-down" />
                            </button>
                            <ul id="userdrop-id" className="userdrop-content">
                                {dropdown}
                            </ul>
                        </div>
                        <div id="ellip-drop" className="navbar-ellipsis-dropdown">
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

