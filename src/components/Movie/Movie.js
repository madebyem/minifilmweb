import React from "react";
import Rating2 from "../../containers/Rating";
import AddToWatch from "../../containers/AddToWatch";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import classes from "./Movie.module.css"
import Seen2 from '../../containers/Seen'
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Heart from "./../../containers/Heart"


const NewCardMedia = withStyles(theme => ({
    root: {
        height: '280px',
        width: 'inherit',
        objectFit: 'contain'
    },
}))(CardMedia);
const NewCard = withStyles(theme => ({
    root: {
        height: 'auto',
        maxWidth: '280px',
        margin: '20px',


    },
}))(Card);


class Movie extends React.Component {
    render() {

        return (
            <NewCard className={classes.card}>
                <Link to={`/movie/${this.props.movie.imdbID}`}>
                    <CardActionArea title={this.props.movie.Title}>
                        <NewCardMedia
                            component="img"
                            alt="poster"
                            className={classes.media}
                            image={this.props.movie.Poster !== "N/A" ? this.props.movie.Poster : "http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"}
                        />

                        <CardContent>
                            <h3>
                                {this.props.movie.Title} ({this.props.movie.Year})
                            </h3>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <div style={{flexGrow: '1', flexShrink: '0'}}/>

                <div className={classes.rest}>
                    <div className={classes.first}>
                        <Rating2 ratedMovie={this.props.movie}/>
                        <Heart likedMovie={this.props.movie}/>
                    </div>

                    <div className={classes.second}>
                        <AddToWatch movieToWatch={this.props.movie} toWatch={this.props.movie.toWatch}/>
                        <Seen2 seenMovie={this.props.movie}/>
                    </div>
                </div>
            </NewCard>
        )
    }
}

export default Movie;
