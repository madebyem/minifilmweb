import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Mains from './containers/Mains';
import {Provider} from "react-redux";
import store from './redux/store';
import {HashRouter, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Favourites from "./containers/Favourites";
import MyMovies from "./containers/MyMovies";
import Watchlist from "./containers/Watchlist";
import List from "./containers/List";
import NotFound from './components/NotFound/NotFound'
import MovieDetails from "./containers/MovieDetails";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Logout from "./containers/Logout";


class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignUp()
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container style={{maxWidth: "100vw"}}>
                    <Typography component="div" style={{backgroundColor: 'BDCCE8', height: 'auto', minHeight: '100vh'}}>
                        <Provider store={store}>
                            <HashRouter>
                                <Nav auth={this.props.user.isAuth} user={this.props.user.email}/>
                                <Switch>
                                    <Route exact path='/' component={Mains}/>
                                    <Route path='/Favourites' component={Favourites}/>
                                    <Route path='/MyMovies' component={MyMovies}/>
                                    <Route path='/Watchlist' component={Watchlist}/>
                                    <Route path='/login' component={Login}/>
                                    <Route path='/register' component={Register}/>
                                    <Route path='/logout' component={Logout}/>
                                    <Route path='/searchList/:filter' component={List}/>
                                    <Route path='/movie/:filter' component={MovieDetails}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </HashRouter>
                        </Provider>
                    </Typography>
                </Container>
            </React.Fragment>


        )
    }
}

export default App;
