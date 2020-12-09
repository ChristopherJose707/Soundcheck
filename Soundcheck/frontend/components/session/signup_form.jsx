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
        this.previousStep = this.previousStep.bind(this);
    };

    componentDidMount() {
        this.props.receiveErrors([]);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        this.props.signup(user).then( () => this.props.closeModal());

    };

    demoLogin(e) {
        e.preventDefault();
        let user = {username: "demo", password: "password"}
        this.props.login(user).then( () => this.props.closeModal());
    };

    previousStep(e){
        // let stepNumber = this.state.stepNumber;
        this.setState({stepNumber: 1, username: ""})
    }


    passwordStep(e) {
        e.preventDefault();
        this.props.clearErrors();
        if (this.validUsername(this.state.username)) {
            this.setState({stepNumber: 2})
        } else {
            this.props.receiveError(["Username cannot be blank."])
        }
       
    }

    validPassword(password) {
        if (password.length < 6) {
            return false;
        } else {
            return true;
        }
    }

    validUsername(username) {
        if (username.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    displayNameDescriptionStep(e) {
        e.preventDefault();
        this.props.clearErrors();
        if (this.validPassword(this.state.password)) {
            this.setState({stepNumber: 3})
        } else {
            this.props.receiveError("Password length must be at least 6 characters")
        }
    }

    render(){
        // continue button, accept & continue button, get started button
        const previousButton = this.state.stepNumber === 2 ?
        <button className="auth-form-button" 
            onClick={this.previousStep}>{this.state.username}
        </button> : "" ;

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
            onClick={this.handleSubmit}>Get Started
        </button> : "" ;

        return (
            <form className="auth-form">

                <UsernameForm // render on step 1
                    continueButton={continueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                    demoLogin={this.demoLogin}
                />
                <SignupPasswordForm // render on step 2
                    previousButton={previousButton}
                    acceptContinueButton={acceptContinueButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                />
                <DisplayNameForm // render on step 3
                    getStartedButton={getStartedButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                />
            </form>
        )
    }
}

export default SignupForm;