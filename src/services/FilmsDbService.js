const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8f0e871b28e400378a4c28cb69d27d7d';
const FILMS_STORAGE = 'discover/movie';

class FilmsDbService {
    async getFilmsData() {
        try {
            const response = await fetch(`${BASE_URL}${FILMS_STORAGE}?api_key=${API_KEY}&sort_by=popularity.desc`);
            const json = await response.json();

            return json;
        } catch (error) {

        }
    }
}

export default new FilmsDbService();