import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});



export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Favourites', 'My Movies', 'Watchlist'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index === 0 ? <FavoriteIcon /> : index===1 ? <MovieIcon /> :<PlaylistAddCheckIcon/>}</ListItemIcon>
                        {index===0? <Link to="/Favourites"> <ListItemText primary={text}/> </Link> : index===1 ? <Link to="/MyMovies"> <ListItemText primary={text}/> </Link>:<Link to="/Watchlist">
                            <ListItemText primary={text}/></Link>}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Log in'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <Link to="/login"><ListItemText primary={text} /></Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <div>
            <Button onClick={toggleDrawer('right', true)}>Menu</Button>
            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {sideList('right')}
            </SwipeableDrawer>
        </div>
    );
}