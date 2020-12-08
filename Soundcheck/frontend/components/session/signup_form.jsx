import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stepNumber: 1,
            username: "",
            password: "",
            display_name: ""
        };
    }

    render(){
        return (
            <h1>Here is the Signup modal!</h1>
        )
    }
}

export default SignupForm;