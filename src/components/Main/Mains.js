import React from "react";
import { MovieService } from "../../services/MovieService";
import Typography from '@material-ui/core/Typography';
import classes from './Mains.module.css'
import Search from "../Search/Search";


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isListView: false,
            isChosen:false,

        };

        this.movieService = new MovieService();
    }

    handleMovie = (e) => {
        this.props.searchAction(e.target.value);
    };

    render() {
        return (
            <>
                <div className={classes.search}>
                    <Typography className={classes.question} variant="h5" align="center" color="textSecondary" paragraph>
                        What are you looking for?
                    </Typography>
                    <Search  handleMovie={this.handleMovie} movie={this.props.movie}/>
                </div>

            </>
        )
    }


}

export default Main;
