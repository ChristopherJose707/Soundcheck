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
            <div className="discover">
                <NavbarContainer  />
                {/* {logoutButton} */}
                <h1>TOP OF discover page</h1>

            </div>
            
        )
    }
};

export default Discover;