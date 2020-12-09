import React from 'react';

class UsernameForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const errors = this.props.errors.map((error,i) => {
            return <p key={i} className="error-message">{error}</p>
        });

        if (this.props.stepNumber === 1) {
            return (
                <div>
                    <a className="auth-form-link"
                        onClick={this.props.demoLogin}>
                        Demo Login
                    </a>
                    <div className="username-or-demo">
                        <div className="EOD-line line-left"></div>
                        <p>or</p>
                        <div className="EOD-line line-right"></div>
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
                    <div className="disclaimer">
                        <p>We may use your email and devices for updates and tips 
                        on SoundCheck's products and services, and for activities 
                        notifications. You can unsubscribe for free at any time 
                        in your notification settings.</p>
                        <br/>
                        <p>We may use information 
                        you provide us in order to show you targeted ads as
                        described in our Privacy Policy</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
};

export default UsernameForm;