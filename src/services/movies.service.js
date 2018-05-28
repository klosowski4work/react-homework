import { Movie } from "../models/movie.model";

export class MoviesRequestParams {
    constructor(options) {
        this.sortBy = options.sortBy || '';
        this.sortOrder = options.sortOrder || '';
        this.search = options.search || '';
        this.searchBy = options.searchBy || '';
        this.filter = options.filter || '';
        this.offset = options.offset || '';
        this.limit = options.limit || '';
    }

}

export class MoviesService {
    static create(dto) {
        return new Movie(dto.id, dto.poster_path, dto.title, dto.genres, dto.release_date);
    }
    /**
     * @param {array} dtos
     */
    static createMany(dtos) {
        return dtos.map((dto) => MoviesService.create(dto));
    }

    static createMetadata(dto) {
        return {
            limit: dto.limit,
            offset: dto.offset,
            total: dto.total,
        }
    }
    /**
     * @param {MoviesRequestParams} params
     */
    static getMovies(params) {
        const url = new URL('http://react-cdp-api.herokuapp.com/movies');
        url.search = new URLSearchParams(params);
        return fetch(url)
            .then((res) => res.json())
            .then((res) => ({
                ...MoviesService.createMetadata(res),
                movies: MoviesService.createMany(res.data),
            })
            );
    }
    static createDetails(dto) {
        return {
            ...dto,
            score: dto.vote_average,
            releaseYear: dto.release_date.split('-')[0],
        }
    }
    static getMovieDetails(id) {
        const url = new URL(`http://react-cdp-api.herokuapp.com/movies/${id}`);
        return fetch(url)
            .then((res) => res.json())
            .then((res) => MoviesService.createDetails(res));
    }
}
