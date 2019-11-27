import React from "react";
import Movie from "../Movie/Movie";
import classes from './Watchlist.module.css'
class Watchlist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if (!this.props.watchlist) {
            return null;
        }

            return(

            <div className={classes.container}>
                <div>
                <h1 className={classes.title}> My Watchlist</h1>
                </div>
                <div className={classes.list}>
                    {this.props.watchlist.map((item, index)=>(
                        <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
                    ))}
                </div>

            </div>

        )
    }
}

export default Watchlist;