import React, { Component } from 'react';
import './Login.css';
import Header from '../header/Header';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const insta_user_name = "gk_62";
const insta_user_password = "Hithere";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            loginFailed: false,
            loginSuccess: false
        }
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
        this.state.username === insta_user_name ? this.setState({ loginFailed: false, loginSuccess: true }) : this.setState({ loginFailed: true, loginSuccess: false });
        this.state.loginPassword === insta_user_password ? this.setState({ loginFailed: false, loginSuccess: true }) : this.setState({ loginFailed: true, loginSuccess: false });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
        console.log(this.state.username);
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

    render() {
        return (
            <div>
                <Header loginSuccess={this.state.loginSuccess} />
                {this.state.loginSuccess === false &&
                    <Card className="login-card-style">
                        <CardContent>
                            <Typography className="login-login-style">LOGIN</Typography>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            {this.state.loginFailed === true &&
                                <FormControl>
                                    <span className="red">
                                        Invalid Username/Password
                                    </span>
                                </FormControl>
                            }
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </CardContent>
                    </Card>
                }
            </div>
        )
    }
}

export default Login;