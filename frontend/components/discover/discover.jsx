import React from 'react';

class Discover extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        const logoutButton = this.props.currentUser ? 
            <button onClick={this.props.logout}>Logout</button> : ""
        
        return (
            <div>
                <h1> This is the discover page</h1>
                {logoutButton}
            </div>
            
        )
    }
};

export default Discover;