import React from 'react';

class SignupPasswordForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const errors = this.props.errors.map((error,i) => {
            return <p key={i} className="error-message">{error}</p>
        });
        if(this.props.stepNumber === 2) {
            return (
                <div className="signup-password-form">
                    <h2>Create your Soundcheck Account</h2>
                    {this.props.previousButton}
                    <label>
                        <input className="auth-input"
                            type="password"
                            onChange={this.props.handleInput("password")}
                            placeholder="Your password"
                        />
                    </label>
                    {errors}
                    {this.props.acceptContinueButton}
                </div>
            )

        } else {
            return null;
        }
    }
}

export default SignupPasswordForm;