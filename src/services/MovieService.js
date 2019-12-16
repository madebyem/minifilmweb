import {movieApiKey} from './axios-request'
const baseUrl = `https://www.omdbapi.com/?apikey=${movieApiKey}`;


export class MovieService {
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new MovieService();

        }

        return this.instance;
    }

    searchByName(name) {
        const searchUrl = `${baseUrl}&s=${name}`;
        const moviesMap = {};
        // console.log('Main by name: ', searchUrl);

        return fetch(searchUrl).then(
            resp => resp.json()
        ).then(
            (nextResp) => {

                nextResp.Search.forEach((movie) => (moviesMap[movie.imdbID] = movie))
                return moviesMap;

            }
        ).then(
            (finalResp) => {
                console.log('List resp: ', finalResp);
                return finalResp;
            }
        );
    }

    getById(imdbId) {
        const searchUrl = `${baseUrl}&i=${imdbId}`;
        console.log('Get by Id: ', searchUrl);

        return fetch(searchUrl).then(
            resp => resp.json()
        ).then(
            (finalResp) => {
                console.log('Get By ID resp: ', finalResp);
                return finalResp;
            }
        );
    }

}
