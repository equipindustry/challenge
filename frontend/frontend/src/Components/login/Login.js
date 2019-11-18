import React from 'react';
import img from "../../img/img.png";
import LoginBox from './loginBox'
import ChangeBox from './changeBox'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true, isChangeOpen: false
        };
    }
    showLoginBox() {
        this.setState({ isLoginOpen: true, isChangeOpen: false })
    }
    showChangeBox() {
        this.setState({ isChangeOpen: true, isLoginOpen: false })
    }
    render() {
        return (
            <div className="root-container">
                <div className="img-container"> <img alt="any-img" src={img} /></div>
                <div className="login">
                    <div className="box-container">
                        {this.state.isLoginOpen && <LoginBox />}
                        {this.state.isChangeOpen && <ChangeBox />}
                    </div>
                    <div className="box-controller">
                        <div className={"controller " + (this.state.isLoginOpen ? "hide" : "")} onClick={this.showLoginBox.bind(this)}>
                            Login
                    </div>
                        <div className={"controller " + (this.state.isChangeOpen ? "hide" : "")} onClick={this.showChangeBox.bind(this)}>
                            Change Password
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;