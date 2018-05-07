
import React from 'react';
import './style.scss';

export class Movie extends React.Component {
    render() {
        return <div className="movie">
            <div className="movie__cover">
                <img src={this.props.cover}></img>
            </div>
            <div className="movie__footer">
                <div className="movie__title">{this.props.title}</div>
                <div className="movie__type">{this.props.type}</div>
                <div className="movie__release-date">{this.props.releaseDate}</div>
            </div>
        </div>
    }
};
Movie.defaultProps = {
    cover: '',
    title: '',
    type: '',
    releaseDate: '',
};
