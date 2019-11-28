import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import classes from "../Main/Mains.module.css";

const NewButton = withStyles(theme => ({
    root: {
        marginTop: '25px',
        marginLeft: '30px',
        lineHeight: '1.5',
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '5px',
        color: '#4e5963'
    },
}))(Button);


class Search extends React.Component {
    render() {
        return (
            <div align="center">
                <TextField className={classes.wtf}
                           margin="normal"
                           variant="outlined"
                           inputProps={{'aria-label': 'bare'}}
                           value={this.props.movie}
                           onChange={(e) => this.props.handleMovie(e)}
                           name="movieName"
                />

                <Link to={`/searchList/${this.props.movie}`} styles={{textDecoration: "none"}}><NewButton
                    variant="outlined" className={classes.button}>
                    Search
                </NewButton></Link>
            </div>
        );
    }
}

export default Search;