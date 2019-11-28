import React from 'react';
import Button from "@material-ui/core/Button";

import {StylesProvider} from '@material-ui/styles';


class AddToWatch extends React.Component {
    handleAdd = (e) => {

        this.props.addWatchlistAction(this.props.movieToWatch.imdbID);
        if (this.props.movieToWatch.seen) {
            this.props.watchedAction(this.props.movieToWatch.imdbID);
        }
        if (this.props.movieToWatch.liked)
            this.props.likeAction(this.props.movieToWatch.imdbID);
        if (this.props.movieToWatch.rating)
            this.props.rate(this.props.movieToWatch.imdbID);
    };

    render() {
        if (!this.props.movieToWatch) {
            return null;
        } else {
            return (
                <StylesProvider injectFirst>
                    <Button size="small" color="primary" disabled={!this.props.isAuth} style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        borderRadius: "5px",
                        backgroundColor: this.props.movieToWatch.toWatch&&this.props.isAuth ? "rgba(63, 81, 181, 0.08)" : "transparent"
                    }} onClick={this.handleAdd}>
                        Add to watchlist
                    </Button>
                </StylesProvider>

            );
        }
    }
}

export default AddToWatch;