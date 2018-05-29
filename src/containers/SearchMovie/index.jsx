
import React from 'react';
import { Button } from '../../components/Button';
import { SearchField } from '../../components/SearchField';
import './style.scss';
import { searchBy, search } from './actions';
import { connect } from 'react-redux';
import { loadData } from '../Results/actions';
import { history } from '../../history';
export const SEARCH_BY = {
    TITLE: 'title',
    GENRE: 'genres',
}

@connect((state) => ({
    sortBy: state.sort.sortBy,
    searchBy: state.searchMovie.searchBy,
    searchBar: state.searchMovie.searchBar,
}))
export class SearchMovie extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            searchBar: this.props.searchBar,
        }
    }
    render() {
        return <div className="search-movie">
            <h2>FIND YOUR MOVIE</h2>
            <SearchField
                value={this.props.search}
                updateValue={this.updateValue}
                onSubmit={() => this.search(this.state.searchBar)} />
            <div className="search-movie__buttons">
                <div className="search-movie__buttons-left-side">
                    <h3>SEARCH BY</h3>
                    <Button text="TITLE" color={this.isSelected(SEARCH_BY.TITLE) ? '' : 'grey'} size="small" onClick={() => this.searchBy(SEARCH_BY.TITLE)} />
                    <Button text="GENRE" color={this.isSelected(SEARCH_BY.GENRE) ? '' : 'grey'} size="small" onClick={() => this.searchBy(SEARCH_BY.GENRE)} />
                </div>
                <Button text="SEARCH" onClick={() => this.search(this.state.searchBar)} />
            </div>
        </div>
    }
    isSelected(type) {
        return this.props.searchBy === type;
    }
    updateValue = (value) => {
        this.setState({
            searchBar: value,
        });
    }
    searchBy = (type) => {
        if (!this.isSelected(type)) {
            this.props.dispatch(searchBy(type));
        }
    }
    search = (text) => {
        const params = {
            sortBy: this.props.sortBy,
            searchBy: this.props.searchBy,
            search: this.state.searchBar,
            sortOrder: 'desc',
        }
        this.props.dispatch(search(text));
        this.props.dispatch(loadData(params));

        history.push(`/search?${new URLSearchParams(params)}`);
    }
};