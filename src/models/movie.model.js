export class Movie {
    /**
     * @param {number} id
     * @param {string} cover
     * @param {string} title
     * @param {string} type
     * @param {string} releaseDate
     */
    constructor(id, cover, title, type, releaseDate) {
        this.id = id;
        this.cover = cover;
        this.title = title;
        this.type = type;
        this.releaseDate = releaseDate;
        this.genres = this.type.join(', ');
        this.releaseYear = this.releaseDate.split('-')[0];
    }
}