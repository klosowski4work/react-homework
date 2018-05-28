
import React from 'react';
import './style.scss';
import { connect } from 'react-redux';

@connect((state) => ({
    movie: state.movieDetails.movie,
    loading: state.movieDetails.loading,
}))
export class MovieDetails extends React.Component {
    static defaultProps = {
        poster: '',
        title: '',
        score: '',
        tagline: '',
        releaseYear: '',
        runtime: '',
        overview: '',
    };

    render() {
        return <div className="movie-detail">
            <div className="movie-detail__poster">
                <img src={this.props.movie.poster_path}></img>
            </div>
            <div className="movie-detail__details">
                <div className="movie-detail__header">
                    <div className="movie-detail__title">
                        {this.props.movie.title}
                    </div>
                    <div className="movie-detail__score">
                        {this.props.movie.score}
                    </div>
                </div>
                <div className="movie-detail__tagline">
                    {this.props.movie.tagline}
                </div>
                <div className="movie-detail__date-time">
                    <div className="movie-detail__date">{this.props.movie.releaseYear}</div>
                    <div className="movie-detail__runtime">{this.props.movie.runtime} min</div>
                </div>
                <div className="movie-detail__description">{this.props.movie.overview}</div>
            </div>
        </div>
    }
};