
const baseUrl = 'http://www.omdbapi.com/?apikey=f96787c4';


export class MovieService {
  static instance;

  /**
   * To taki "trik", żeby zawsze mieć tylko jedną instancję tego serwisu wszędzie - nie przerażaj się!
   * (Nazywa się to Singletonem)
   * Zobacz, jak jest użyte to w efekcie - tyle trzeba, żeby zadziałało.
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new MovieService();

    }

    return this.instance;
  }

  searchByName(name) {
    const searchUrl = `${baseUrl}&s=${name}`;
    const moviesMap={};
    console.log('Main by name: ', searchUrl);

    return fetch(searchUrl).then(
      resp => resp.json()
    ).then(
        (nextResp) => {

          nextResp.Search.forEach((movie)=>(moviesMap[movie.imdbID]=movie))
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
