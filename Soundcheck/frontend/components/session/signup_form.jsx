import { throws } from 'assert';
import React from 'react';
import SignupPasswordForm from './signup_password_form';
import UsernameForm from './username_form';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stepNumber: 1,
            username: "",
            password: "",
            display_name: "",
            description: ""
        };

        this.emailStep = this.emailStep.bind(this);
        this.displayNameDescriptionStep = this.displayNameDescriptionStep.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.signup(user).then( () => this.props.closeModal());
    }

    passwordStep(e) {
        e.preventDefault();
        let currentStep = this.state.stepNumber;

        if (this.validPassword(this.state.password)) {

        }
        
    }

    validPassword(password) {
        if (password.length < 6) {
            return false;
        } else {
            return true;
        }
    }

    displayNameDescriptionStep() {

    }

    render(){
        // continue button, accept & continue button, get started button
        const continueButton = this.state.stepNumber === 1 ? 
        <button className="auth-form-button" 
            onClick={this.passwordStep}>Continue
        </button> : "" ;

        const acceptContinueButton = this.state.stepNumber === 2 ?
        <button className="auth-form-button" 
            onClick={this.displayNameDescriptionStep}>Accept & Continue
        </button> : "" ;

        const getStartedButton = this.state.stepNumber === 3 ?
        <button className="auth-form-button" 
            onClick={this.handleSubmit}>Accept & Continue
        </button> : "" ;

        return (
            <form className="auth-form">

                <UsernameForm // render on step 1
                    continueButton={continueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                />
                <SignupPasswordForm // render on step 2
                    acceptContinueButton={acceptContinueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                />
            </form>
        )
    }
}

export default SignupForm;