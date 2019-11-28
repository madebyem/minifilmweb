import {MovieService} from "../services/MovieService";
import axios from '../services/axios-request';
import {apiKey} from '../services/axios-request';
import {
    requestMoviesFailure,
    requestMoviesStart,
    requestMoviesSuccess,
    requestDetailsFailure,
    requestDetailsSuccess,
    requestMovieDetails,
    startReg,
    registered, regError, logout
} from "./actions";

const movies = MovieService.getInstance();

export const requestMoviesAction = (movieName) => {
    return dispatch => {
        dispatch(requestMoviesStart(movieName));

        return movies.searchByName(movieName).then((results) => {
            dispatch(requestMoviesSuccess(movieName, results));
        }).catch((err) => {
            dispatch(requestMoviesFailure(movieName, err));
        })
    }
};

export const requestDetailsAction = (movieID) => {
    return dispatch => {
        dispatch(requestMovieDetails(movieID));

        return movies.getById(movieID).then((results) => {
            dispatch(requestDetailsSuccess(movieID, results));
        }).catch((err) => {
            dispatch(requestDetailsFailure(movieID, err));
        })
    }
};


///user authentication ///
export const register = () => (dispatch) => (authData) => {
    dispatch(startReg());
    console.log(authData);
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, authData)
        .then((data) => {
            console.log(data);
            const expirationDate = new Date(new Date().getTime() + data.data.expiresIn * 1000);
            localStorage.setItem("token", data.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', data.data.localId);
            localStorage.setItem('email', data.data.email);
            dispatch(registered({idToken: data.data.idToken, localId: data.data.localId, email: data.data.email}))
        })
        .catch((error) => dispatch(regError(error)))
};

export const login = () => (dispatch) => (loginData) => {
    dispatch(startReg());
    console.log(loginData);
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, loginData)
        .then((data) => {
            console.log(data);
            const expirationDate = new Date(new Date().getTime() + data.data.expiresIn * 1000);
            localStorage.setItem("token", data.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', data.data.localId);
            localStorage.setItem('email', data.data.email);
            dispatch(registered({idToken: data.data.idToken, localId: data.data.localId, email: data.data.email}));
            dispatch(checkAuthTimeout(data.data.expiresIn))
        })
        .catch((err) => dispatch(regError(err)))
};


export const checkAuthTimeout = (expTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expTime * 1000)
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const localId = localStorage.getItem('userId');
                const email = localStorage.getItem('email');
                dispatch(registered({idToken: token, localId: localId, email: email}));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}





