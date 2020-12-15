import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Discover extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        
        
        return (
            <div className="discover">
                <NavbarContainer  />
                <div className="discover-top"></div>
                <h1>TOP OF discover page</h1>
               
            </div>
            
        )
    }
};

export default Discover;