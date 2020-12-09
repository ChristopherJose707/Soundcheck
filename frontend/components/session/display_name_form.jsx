import React from 'react';

class DisplayNameForm extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        const errors = this.props.errors.map((error,i) => {
            return <p key={i} className="error-message">{error}</p>
        });
        if (this.props.stepNumber === 3) {
            return (
                <div className="display-name-form">
                    <h2>Tell us a bit about yourself</h2>
                   <label>
                        <input className="auth-input"
                            type="text"
                            onChange={this.props.handleInput("display_name")}
                            placeholder="Your Display Name"
                        />
                    </label>
                    <textarea className="auth-description" 
                        onChange={this.props.handleInput("description")}
                        placeholder="A short description"></textarea>
                        {errors}
                    {this.props.getStartedButton}
                </div>
            )

        } else {
            return null;
        }
    }
};

export default DisplayNameForm;