import React from 'react';
import classes from './FormErrors.module.css';

export default class FormErrors extends React.Component {
    render() {
        if (this.props.formErrors.length > 0) {
            return (
                <div className={classes.formerror}>
                    <p>{this.props.formErrors}</p>
                </div>
            );
        } else {
            return '';
        }
    }
}