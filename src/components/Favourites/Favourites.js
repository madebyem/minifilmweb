import React from "react";
import Movie from "../Movie/Movie";
import classes from './Favourites.module.css';
class Favourites extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if (this.props.favourites !== undefined) {
            return (
                <div className={classes.favourites}>
                    <h1>My favourite movies</h1>
                    <div className={classes.list}>
                        {this.props.favourites.map((item, index) => (
                            <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
                        ))}
                    </div>

                </div>
            )
        }else{
        return null;}
    }
}

export default Favourites;