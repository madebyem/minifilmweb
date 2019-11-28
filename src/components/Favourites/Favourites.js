import React from "react";
import Movie from "../Movie/Movie";
import classes from './Favourites.module.css';
import {Link} from "react-router-dom";

class Favourites extends React.Component {
    render() {
        if (this.props.favourites !== undefined) {
            return (
                <div className={classes.favourites}>
                    <h1>My favourite movies</h1>
                    {this.props.isAuth ? <div className={classes.list}>
                            {this.props.favourites.map((item, index) => (
                                <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
                            ))}
                        </div> :
                        <div className={classes.pleaseLogin}>
                            <h3>Please log in to see your favourite movies</h3>
                            <Link className={classes.gobacklink} to="/login">
                                <button className={classes.goback}>Log in</button>
                            </Link>
                        </div>
                    }</div>
            )}
        else {
            return null;
        }
    }
}

export default Favourites;