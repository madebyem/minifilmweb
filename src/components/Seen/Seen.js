import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Seen extends React.Component {

    handleSeen = () => {
        this.props.watchedAction(this.props.seenMovie.imdbID);
        if (this.props.seenMovie.toWatch) {
            this.props.addWatchlistAction(this.props.seenMovie.imdbID)
        }
        if (this.props.seenMovie.liked) {
            this.props.likeAction(this.props.seenMovie.imdbID)
        }
        if (this.props.seenMovie.rating) {
            this.props.rate(this.props.seenMovie.imdbID)
        }


    }

    render() {
        if (!this.props.seenMovie) {
            return null;
        } else {
            return (
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={this.handleSeen}
                            checked={(this.props.seenMovie.seen&&this.props.isAuth)}
                            value="checked"
                            color="primary"
                            disabled={!this.props.isAuth}
                        />
                    }
                    label="Seen"
                />
            )
        }
    }
}

export default Seen;