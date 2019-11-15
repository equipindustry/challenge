import React, { Component } from 'react';

class ChangeBox extends Component {
    render() {
        return (
            <div className="inner-container">
                <div className="box-header">
                    <h3>Change password</h3>
                </div>
                <div className="box-login">
                    <div className="input-group">
                        <label htmlFor="password">OLD PASSWORD</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />


                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD CONFIRMATION</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" />
                    </div>

                    <button type="button" className="login-btn btn">CHANGE NOW</button>
                </div>
            </div>
        )
    }
}
export default ChangeBox;