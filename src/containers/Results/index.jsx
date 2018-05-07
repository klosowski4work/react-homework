
import React from 'react';
import { SortBy } from '../SortBy';
import { Movie } from '../../components/Movie';
import './style.scss';

export class Results extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            results: [],
        }
    }

    componentDidMount() {
        this.setState({
            results: [
                { title: 'Test1', type: "type", releaseDate: "2018", cover: "" },
                { title: 'Test2', type: "type", releaseDate: "2018", cover: "" },
                { title: 'Test3', type: "type", releaseDate: "2018", cover: "" },
                { title: 'Test4', type: "type", releaseDate: "2018", cover: "" },
                { title: 'Test5', type: "type", releaseDate: "2018", cover: "" },
            ]
        });
    }

    render() {
        return <div className="results">
            <div className="results__header">
                <span>x movies found</span>
                <SortBy />
            </div>
            <div className="results__container">
                {
                    this.state.results.map((movie, index) => {
                        return <Movie
                            key={index}
                            title={movie.title}
                            type={movie.type}
                            cover={movie.cover}
                            releaseDate={movie.releaseDate}
                        />
                    })
                }
            </div>
        </div>
    }
};
