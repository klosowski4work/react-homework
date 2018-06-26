//@flow
import React from 'react';
import './style.scss';

export type MovieProps = {
    cover: string,
    title: string,
    type: string,
    releaseDate: string,
    onClick: () => void,
};

export class Movie extends React.Component<MovieProps> {
    static defaultProps = {
        cover: '',
        title: '',
        type: '',
        releaseDate: '',
    };
    render() {
        return <div className="movie" onClick={this.props.onClick}>
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
