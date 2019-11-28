import React from 'react';
import Typography from '@material-ui/core/Typography';
import LocalMovies from '@material-ui/icons/LocalMovies';
import classes from './Nav.module.css'
import {withStyles} from "@material-ui/core";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {Link} from "react-router-dom";

const Newtypo = withStyles(theme => ({
    root: {
        fontFamily: 'Special Elite',
        fontStyle: 'cursive',
        fontSize: '2rem',

    },
}))(Typography);

const NewNav = withStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        paddingTop: 0

    },
}))(BottomNavigation);

const NewNavAc = withStyles(theme => ({
    root: {
        marginRight: '0.625rem',
        marginLeft: '0.625rem',
        fontWeight: 'bold',
        width: '6.25rem',
        marginTop: '-0.5rem',
        opacity: '1',


        '&:hover': {
            border: '1px solid #708090',
        }
    },

}))(BottomNavigationAction);

class Nav extends React.Component {
    render() {
        return (
            <nav className={classes.nav}>
                <Link to="/" style={{color: "#353638", textDecoration: "none", cursor: "hand"}}>
                    <div className={classes.title}>
                        <LocalMovies fontSize="large" className={classes.icon}/>
                        <Newtypo noWrap>
                            My mini Filmweb
                        </Newtypo>

                    </div>
                </Link>
                <div className={classes.links}>
                    {this.props.auth ? <div className={classes.login}>
                            <p className={classes.hi}>Cześć <span style={{fontWeight: "bold"}}>{this.props.user}</span>!</p>
                            <Link className={classes.loginLink} to="/logout">Log out</Link></div>
                        :

                        <div className={classes.login}>
                            <Link className={classes.loginLink} to="/login">Log in</Link>
                        </div>}
                    <NewNav showlabel>
                        <Link to="/Favourites" styles={{display: 'flex', flexDirection: 'column'}}> <NewNavAc
                            showLabel={true} label="Favourites" icon={<FavoriteIcon/>}/> </Link>
                        <Link to="/MyMovies" styles={{display: 'flex', flexDirection: 'column'}}><NewNavAc
                            showLabel={true} label="My Movies" icon={<MovieIcon/>}/></Link>
                        <Link to="/Watchlist" styles={{display: 'flex', flexDirection: 'column'}}><NewNavAc
                            showLabel={true} label="Watchlist" icon={<PlaylistAddCheckIcon/>}/></Link>
                    </NewNav>
                </div>
            </nav>
        )
    }
}

export default Nav;