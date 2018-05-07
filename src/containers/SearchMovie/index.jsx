
import React from 'react';
import { Button } from '../../components/Button';
import { SearchField } from '../../components/SearchField';
import './style.scss';

const SEARCH_BY = {
    TITLE: 'title',
    GENRE: 'genre',
}

export class SearchMovie extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            searchBy: SEARCH_BY.TITLE,
        }
    }


    render() {
        return <div className="search-movie">
            <h2>FIND YOUR MOVIE</h2>
            <SearchField />
            <div className="search-movie__buttons">
                <div className="search-movie__buttons-left-side">
                    <h3>SEARCH BY</h3>
                    <Button text="TITLE" color={this.isSelected(SEARCH_BY.TITLE) ? '' : 'grey'} size="small" onClick={() => this.searchBy(SEARCH_BY.TITLE)} />
                    <Button text="GENRE" color={this.isSelected(SEARCH_BY.GENRE) ? '' : 'grey'} size="small" onClick={() => this.searchBy(SEARCH_BY.GENRE)} />
                </div>
                <Button text="SEARCH" />
            </div>
        </div>
    }
    isSelected(type) {
        return this.state.searchBy === type;
    }
    searchBy(type) {
        this.setState({
            searchBy: type
        });
    }
};