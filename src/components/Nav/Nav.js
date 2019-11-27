import React from 'react';
import Typography from '@material-ui/core/Typography';
import LocalMovies from '@material-ui/icons/LocalMovies';
import classes from './Nav.module.css'
import {withStyles} from "@material-ui/core";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from "@material-ui/core/Card";
import MovieIcon from '@material-ui/icons/Movie';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {HashRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import {StylesProvider} from "@material-ui/styles";

const Newtypo = withStyles(theme => ({
    root: {
        fontFamily:'Special Elite',
        fontStyle:'cursive',
        fontSize:'25px',

    },
}))(Typography);

const NewNav = withStyles(theme => ({
        root: {
            backgroundColor:'transparent',
            paddingTop:0

        },
}))(BottomNavigation);

const NewNavAc = withStyles(theme => ({
    root: {
        marginRight:'10px',
        marginLeft:'10px',
        fontWeight:'bold',
        width:'100px',
        marginTop:'-8px',
        showLabel:"true",
        opacity:'1',
    },

}))(BottomNavigationAction);

class Nav extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <nav className={classes.nav}>
                <Link exact to="/" style={{color:"#353638", textDecoration:"none", cursor:"hand"}}>
                        <div className={classes.title} >
                        <LocalMovies className={classes.icon} />
                        <Newtypo   noWrap>
                            My mini Filmweb
                        </Newtypo>

                        </div>
                </Link>
                        <div className={classes.links}>
                            <NewNav showLabels>
                                <Link to="/Favourites" styles={{display: 'flex', flexDirection: 'column'}} > <NewNavAc showLabel={true} label="Favourites"  icon={ <FavoriteIcon  />} /> </Link>
                                <Link to="/MyMovies" styles={{display: 'flex', flexDirection: 'column'}} ><NewNavAc  showLabel={true} label="My Movies"  icon={<MovieIcon />} /></Link>
                                <Link to="/Watchlist" styles={{display: 'flex', flexDirection: 'column'}}><NewNavAc  showLabel={true} label="Watchlist"  icon={<PlaylistAddCheckIcon />} /></Link>
                                
                            </NewNav>

                            </div>

                </nav>
        )
    }
}

export default Nav;