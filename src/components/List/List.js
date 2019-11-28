import React from "react";
import Movie from "../Movie/Movie";
import classes from './List.module.css'

class List extends React.Component {

  componentDidMount = () => {
    this.props.requestMoviesAction(this.props.filter)
  };

  render() {
    if (this.props.searchedMovies !== undefined) {
      return (
          <>
            <div className={classes.list}>
              {Object.values(this.props.searchedMovies).map((item, index) => (
                  <Movie key={item.imdbID} movie={item} onSelect={this.props.onSelect}/>
              ))}
            </div>
          </>
      )} else {
      return null;
    }
  }
}

export default List;
