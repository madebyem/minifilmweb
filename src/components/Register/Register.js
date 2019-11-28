import React from "react";
import FormErrors from "../FormErrors/FormErrors";
import {Link} from "react-router-dom";
import {TextField} from "@material-ui/core";
import classes from './Register.module.css';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            formErrors: {email: '', password: '', repeatedPassword: ''},
            emailValid: false,
            passwordValid: false,
            repeatedPasswordValid: false,
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
            });
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.validateForm();
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let repeatedPasswordValid = this.state.repeatedPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = (value.length > 0 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
                fieldValidationErrors.email = emailValid ? '' : "Your email is invalid!";
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : "Your password is too short!";
                break;
            case 'repeatedPassword':
                repeatedPasswordValid = (value === this.state.password);
                fieldValidationErrors.repeatedPassword = repeatedPasswordValid ? '' : "Passwords must be the same!";
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            repeatedPasswordValid: repeatedPasswordValid,
        });
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.repeatedPasswordValid,
            showWarnings: true,
        });
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true,
        }
        const formVal = this.state.emailValid && this.state.passwordValid && this.state.repeatedPasswordValid;
        this.sendData(authData, formVal);

    }


    sendData = (authData, formVal) => {
        console.log(this.props)
        if (formVal) {
            this.props.register(authData);
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className={classes.loginwindow}>

                <div className={classes.loginform}>
                    <h1>Register</h1>
                    <div className={classes.form} style={{height: '60%'}}>
                        <form onSubmit={this.handleLogin}>
                            <div className={classes.first}>
                                <label htmlFor="email">
                                    <TextField id="filled-basic" label="E-mail" variant="filled" type="e-mail"
                                               name="email" onChange={(event) => this.handleUserInput(event)}
                                               value={this.state.email}/>
                                    <div className={classes.panel}
                                         style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                        <FormErrors formErrors={this.state.formErrors.email}/>
                                    </div>
                                </label>
                                <label htmlFor="password">
                                    <TextField id="filled-basic" label="Password" variant="filled" type="password"
                                               name="password" onChange={(event) => this.handleUserInput(event)}
                                               value={this.state.password}/>

                                    <div className={classes.panel}
                                         style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                        <FormErrors formErrors={this.state.formErrors.password}/>
                                    </div>
                                </label>
                                <label htmlFor="password">
                                    <TextField id="filled-basic" label="Repeat password" variant="filled"
                                               type="password" name="repeatedPassword"
                                               onChange={(event) => this.handleUserInput(event)}
                                               value={this.state.repeatedPassword}/>

                                    <div className={classes.panel}
                                         style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                        <FormErrors formErrors={this.state.formErrors.repeatedPassword}/>
                                    </div>
                                </label>
                            </div>
                            <div className={classes.buttons}>
                                <Link className={classes.changeaction} to="/login">Log in</Link>
                                <button type="submit" className={classes.submit}>Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}