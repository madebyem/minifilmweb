import React from "react";
import Movie from "../Movie/Movie";
import classes from './MyMovies.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from "@material-ui/core";

const NewBtn = withStyles(theme => ({
    root: {
        marginLeft:'10px',
        borderRadius:'10px'


    },
}))(IconButton);



class MyMovies extends React.Component{
    constructor(props){
        super(props)

    }
    sortWorst=()=>{
        this.props.sort("worst")

}
    sortBest=()=>{
        this.props.sort("best")
    }


    render(){
        if (!this.props.seenMovies) {
            return null;
        }
        console.log(this.props.sortedMovies)
        return(
            <div className={classes.myMovies}>
                <div>
                <h1> My movies</h1>
                </div>
                <div className={classes.sort}>
                    Sort by

                    <NewBtn aria-labelledby="delete"  size="small" onClick={this.sortBest}>
                        <ArrowDownwardIcon fontSize="inherit" />Best
                    </NewBtn>
                    <NewBtn aria-labelledby="delete"  size="small" onClick={this.sortWorst}>
                        <ArrowUpwardIcon fontSize="inherit" />Worst
                    </NewBtn>


                </div>
                <div className={classes.list}>

                    {this.props.sortedMovies.map((item, index)=>(
                        <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default MyMovies;