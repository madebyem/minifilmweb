import React from "react";
import FormErrors from "../FormErrors/FormErrors";
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import classes from './Login.module.css';
import {TextField} from "@material-ui/core";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            showWarnings: false,
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value, showWarnings: false},
            () => {
                this.validateField(name, value)
            })
    };

    handleLogin = (e) => {
        e.preventDefault();
        this.validateForm();
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = (value.length > 0 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
                fieldValidationErrors.email = emailValid ? '' : "Your email is invalid!";
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : "Your password is too short!";
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,

        });
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
            showWarnings: true,
        });
        const loginData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true,
        };
        const formVal = this.state.emailValid && this.state.passwordValid
        this.sendData(loginData, formVal);
    }

    sendData = (loginData, formVal) => {
        if (formVal) {
            this.props.login(loginData);
        }
    };


    render() {
        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/"/>
        }
        return (
            <div className={classes.loginwindow}>
                <div className={classes.background}></div>
                {authRedirect}
                <h1>Log in</h1>
                <div className={classes.form}>
                    <form onSubmit={this.handleLogin}>
                        <div className={classes.first}>
                            <label htmlFor="email">
                                <TextField id="filled-basic1" label="E-mail" variant="filled" type="e-mail" name="email"
                                           onChange={(event) => this.handleUserInput(event)} value={this.state.email}/>
                                <div className={classes.panel}
                                     style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                    <FormErrors formErrors={this.state.formErrors.email}/>
                                </div>
                            </label>
                            <label htmlFor="password">
                                <TextField id="filled-basic2" label="Password" variant="filled" type="password"
                                           name="password" onChange={(event) => this.handleUserInput(event)}
                                           value={this.state.password}/>
                                <div className={classes.panel}
                                     style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                    <FormErrors formErrors={this.state.formErrors.password}/>
                                </div>
                            </label>
                        </div>
                        <div className={classes.error}>
                            <p>{this.props.error}</p>
                        </div>
                        <div className={classes.buttons}>
                            <Link className={classes.changeaction} to="/register">Sign up</Link>
                            <button className={classes.submit} type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;