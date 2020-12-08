import React from 'react';

class SignupPasswordForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.stepNumber === 2) {
            return (
                <h1>Signup Password form</h1>
            )

        } else {
            return null;
        }
    }
}

export default SignupPasswordForm;