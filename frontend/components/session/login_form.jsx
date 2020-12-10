import React from 'react';
import UsernameForm from './username_form';
import PasswordForm from './password_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stepNumber: 1,
            username: "",
            password: "",
        };

        this.passwordStep = this.passwordStep.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }
    componentDidMount() {
        this.props.receiveErrors([]);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.state;
        // this.props.login(user).then( () => this.props.closeModal());
        this.props.login(user).then( () => {
            this.props.closeModal()
            this.props.history.push("/discover");
        });

        
    };

    demoLogin(e) {
        e.preventDefault();
        let user = {username: "demoUser", password: "password"}
        this.props.login(user).then( () => {
            this.props.closeModal()
            this.props.history.push("/discover");
        });
    };

    previousStep(e){
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

    render() {
        const previousButton = this.state.stepNumber === 2 ?
        <button className="auth-prev-button-2" 
            onClick={this.previousStep}>
            <FontAwesomeIcon icon="caret-left" />
            {this.state.username}
        </button> : "" ;

        const continueButton = this.state.stepNumber === 1 ? 
        <button className="auth-form-button" 
            onClick={this.passwordStep}>Continue
        </button> : "" ;

        const signinButton = this.state.stepNumber === 2 ?
        <button className="auth-form-button" 
            onClick={this.handleSubmit}>Sign In
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
                <PasswordForm // render on step 2
                    previousButton={previousButton}
                    signinButton={signinButton}
                    stepNumber={this.state.stepNumber}
                    handleInput={this.handleInput}
                    errors={this.props.errors}
                />
            </form>
        )
    }
};

export default LoginForm;