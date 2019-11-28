import React from "react";
import classNames from 'classnames/bind';
import classes from "./Heart.module.css";


const ctx = classNames.bind(classes);

export class Heart extends React.Component {

    handleLike = () => {
        this.props.likeAction(this.props.likedMovie.imdbID);
        if (!this.props.likedMovie.seen) {
            this.props.watchedAction(this.props.likedMovie.imdbID);
        }
        if (this.props.likedMovie.toWatch) {
            this.props.addWatchlistAction(this.props.likedMovie.imdbID)
        }
    }

    render() {
        if (!this.props.likedMovie) {
            return null;
        } else {
            return (
                <button onClick={this.handleLike} disabled={!this.props.isAuth} className={ctx({
                    likebutton: true,
                    liked: this.props.likedMovie.liked
                })}/>
            )
        }
    }
}


export default Heart;