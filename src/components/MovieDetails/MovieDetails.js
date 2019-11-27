import React from "react";
import Rating from "./../../containers/Rating";
import Heart from "./../../containers/Heart";
import classes from './MovieDetails.module.css'
import Seen from "../../containers/Seen";
import AddToWatch from "../../containers/AddToWatch";
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

    componentDidMount=()=> {
        this.props.requestDetailsAction(this.props.filter);



    }


  render() {
      const chosen=this.props.chosen;


    if(!chosen){
        return null;
    }
    return <div className={classes.moviedetails}>
        <h1 className={classes.title}>{chosen.Title} ({chosen.Year})</h1>
        <div className={classes.details}>
            <img src={chosen.Poster}/>
            <div className={classes.all}>
                <div className={classes.rating}>
                    <Rating ratedMovie={chosen} />
                    <Seen seenMovie={chosen}/>
                    <Heart likedMovie={chosen}/>

                </div>
                <div className={classes.watchlist}>
                    <AddToWatch  movieToWatch={chosen}/>
                </div>
                <div className={classes.text}>
                    <h4>{chosen.Plot}</h4>
                    <p>{chosen.Runtime}</p>
                    <p>Director: {chosen.Director}</p>
                    <p>Actors: {chosen.Actors}</p>
                    <p>Genre: {chosen.Genre}</p>
                    <p>Production: {chosen.Production}, {chosen.Country}</p>
                    <p>Release Date: {chosen.Released}</p>
                    <p>Boxoffice: {chosen.BoxOffice}</p>
                    <p>Awards: {chosen.Awards}</p>
                </div>
            </div>
        </div>
    </div>
  }

}


export default MovieDetails;
