import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
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
                        <li><a href="https://www.linkedin.com/in/christopher-jose-6361aa120/" className="navbar-mdn" target="_blank">LinkedIn</a></li>
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
                        <div id="nav-right" className="navbar-right-user navbar-user-dropdown">
                            <li>{this.props.currentUser.profilePicture ? 
                                <img className="profile-pic" src={this.props.currentUser.profilePicture} /> : null}
                            </li>
                            <button className="user-dropdown-btn" onClick={() => this.handleUserDropdown()}>
                                {userDisplayName}&nbsp; <FontAwesomeIcon icon="angle-down" />
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

