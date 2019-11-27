import React from "react";
import classes from './Rating.module.css'

class Rating extends React.Component{
    constructor(props){
        super(props);

    }


    onRate=(e)=>{

        this.props.rate(this.props.ratedMovie.imdbID, e.target.value);
        if(!this.props.ratedMovie.seen) {
        this.props.watchedAction(this.props.ratedMovie.imdbID);}
        if(this.props.ratedMovie.toWatch){
            this.props.addWatchlistAction(this.props.ratedMovie.imdbID)
        }



    };


    render() {
        if (!this.props.ratedMovie) {
            return null;
        }
        else{


        return(<>
            <fieldset className={classes.rating}  >
                <input id={`star5_${this.props.ratedMovie.imdbID}`} onChange={this.onRate} checked={this.props.ratedMovie.rating==='5'} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="5"/><label className={classes.full} htmlFor={`star5_${this.props.ratedMovie.imdbID}`}
                                                                         title="Awesome - 5 stars"></label>
                <input id={`star4half_${this.props.ratedMovie.imdbID}`} checked={this.props.ratedMovie.rating==='4.5'} onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="4.5"/><label className={classes.half}
                                                                                              htmlFor={`star4half_${this.props.ratedMovie.imdbID}`}
                                                                                              title="Pretty good - 4.5 stars"></label>
                <input id={`star4_${this.props.ratedMovie.imdbID}`} checked={this.props.ratedMovie.rating==='4'} onChange={this.onRate} type="radio"   name={`${this.props.ratedMovie.imdbID}`} value="4"/><label className={classes.full} htmlFor={`star4_${this.props.ratedMovie.imdbID}`}
                                                                               title="Pretty good - 4 stars"></label>
                <input id={`star3half_${this.props.ratedMovie.imdbID}`}checked={this.props.ratedMovie.rating==='3.5'} onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="3.5"/><label className={classes.half}
                                                                                              htmlFor={`star3half_${this.props.ratedMovie.imdbID}`}
                                                                                              title="Meh - 3.5 stars"></label>
                <input id={`star3_${this.props.ratedMovie.imdbID}`} checked={this.props.ratedMovie.rating==='3'}  onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="3"/><label className={classes.full} htmlFor={`star3_${this.props.ratedMovie.imdbID}`}
                                                                               title="Meh - 3 stars"></label>
                <input id={`star2half_${this.props.ratedMovie.imdbID}`} checked={this.props.ratedMovie.rating==='2.5'} onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="2.5"/><label className={classes.half}
                                                                                              htmlFor={`star2half_${this.props.ratedMovie.imdbID}`}
                                                                                              title="Kinda bad - 2.5 stars"></label>
                <input id={`star2_${this.props.ratedMovie.imdbID}`}  checked={this.props.ratedMovie.rating==='2'} onChange={this.onRate} type="radio" name={`${this.props.ratedMovie.imdbID}`} value="2"/><label className={classes.full} htmlFor={`star2_${this.props.ratedMovie.imdbID}`}
                                                                               title="Kinda bad - 2 stars"></label>
                <input id={`star1half_${this.props.ratedMovie.imdbID}`}checked={this.props.ratedMovie.rating==='1.5'} onChange={this.onRate} type="radio" name={`${this.props.ratedMovie.imdbID}`} value="1.5"/><label className={classes.half}
                                                                                              htmlFor={`star1half_${this.props.ratedMovie.imdbID}`}
                                                                                              title="Meh - 1.5 stars"></label>
                <input id={`star1_${this.props.ratedMovie.imdbID}`}checked={this.props.ratedMovie.rating==='1'} onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="1"/><label className={classes.full} htmlFor={`star1_${this.props.ratedMovie.imdbID}`}
                                                                               title="Sucks big time - 1 star"></label>
                <input id={`half_${this.props.ratedMovie.imdbID}`}checked={this.props.ratedMovie.rating==='0.5'} onChange={this.onRate} type="radio"  name={`${this.props.ratedMovie.imdbID}`} value="0.5"/><label className={classes.half} htmlFor={`half_${this.props.ratedMovie.imdbID}`}
                                                                                     title="Sucks big time - 0.5 stars"></label>
            </fieldset>
            </>
        )
    }}
}

// A może zamiast tego tzw. nazwany eksport?
// export class Rating {/.../}

// A potem gdzieś indziej:
// import { Rating } from /.../

// Taki zapis jest łatwiejszy w refactorze potem i bardziej lubiany przez IDE
// Warto poprawić tak wszystkie pliki!
export default Rating;
