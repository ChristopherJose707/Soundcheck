import React from 'react';
import SignupPasswordForm from './signup_password_form';
import UsernameForm from './username_form';
import DisplayNameForm from './display_name_form';

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
       
        this.passwordStep = this.passwordStep.bind(this);
        this.displayNameDescriptionStep = this.displayNameDescriptionStep.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.signup(user).then( () => this.props.closeModal());
    }

    demoLogin(e) {
        e.preventDefault();
        let user = {username: "demo", password: "password"}
        this.props.login(user).then( () => this.props.closeModal());
    }

    passwordStep(e) {
        e.preventDefault();
        this.props.clearErrors();
        if (this.validPassword(this.state.password)) {
            this.setState({stepNumber: 2})
        } else {
            this.props.receiveError("Password length at least 6 characters")
        }
        
    }

    validPassword(password) {
        if (password.length < 6) {
            return false;
        } else {
            return true;
        }
    }

    displayNameDescriptionStep(e) {
        e.preventDefault();
        this.props.clearErrors();
        this.setState({stepNumber: 3});
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
            <form className="auth-form" onSubmit={this.handleSubmit}>

                <UsernameForm // render on step 1
                    continueButton={continueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                    demoLogin={this.demoLogin}
                />
                {/* <SignupPasswordForm // render on step 2
                    acceptContinueButton={acceptContinueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                /> */}
                {/* <DisplayNameForm // render on step 3
                    getStartedButton={getStartedButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                /> */}
            </form>
        )
    }
}

export default SignupForm;