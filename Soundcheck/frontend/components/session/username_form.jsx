import React from 'react';

class UsernameForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const errors = this.props.errors.map(error => {
            return <p className="error-message">{error}</p>
        });

        if (this.props.stepNumber === 1) {
            return (
                <div>
                    <a className="auth-form-link"
                        onClick={this.props.demoLogin}>
                        Demo Login
                    </a>
                    <div className="email-or-demo">
                        <div className="EOD-line"></div>
                        <p>or</p>
                        <div className="EOD-line"></div>
                    </div>
                    <label>
                        <input className="auth-input"
                            type="text"
                            onChange={this.props.handleInput("username")}
                            placeholder="Your username"
                        />
                    </label>
                    {errors}
                    {this.props.continueButton}
                </div>
            )
        } else {
            return null;
        }
    }
};

export default UsernameForm;