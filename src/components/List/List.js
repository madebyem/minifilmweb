import React from "react";
import Movie from "../Movie/Movie";
import classes from './List.module.css'
import Search from "../Search/Search";

class List extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount=()=> {

    this.props.requestMoviesAction(this.props.filter)
  }

  render() {
    console.log(this.props.moviesList)
    console.log(this.props.searchedMovies)
    if (this.props.searchedMovies !== undefined) {
      return (
        <>

          <div className={classes.list}>
            {Object.values(this.props.searchedMovies).map((item, index) => (
              <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
            ))}
          </div>
        </>


      )
    } else {
      return null;
    }
  }
}

export default List;
