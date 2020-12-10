import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Discover extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        // const logoutButton = this.props.currentUser ? 
        //     <button onClick={this.props.logout}>Logout</button> : ""
        
        return (
            <div>
                <NavbarContainer  />
                {/* {logoutButton} */}
            </div>
            
        )
    }
};

export default Discover;