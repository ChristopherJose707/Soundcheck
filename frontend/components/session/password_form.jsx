import React from 'react';

class PasswordForm extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        const errors = this.props.errors.map((error,i) => {
            return <p key={i} className="error-message">{error}</p>
        });

        if(this.props.stepNumber === 2) {
            return (
                <div className="login-password-form">
                    {this.props.previousButton}
                    <br/>
                    <label>
                        <input className="auth-input"
                            type="password"
                            onChange={this.props.handleInput("password")}
                            placeholder="Your password"
                        />
                    </label>
                    {errors}
                    {this.props.signinButton}
                </div>
            )

        } else {
            return null;
        }
    }
}

export default PasswordForm;