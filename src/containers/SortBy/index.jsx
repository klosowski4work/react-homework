
import React from 'react';
import { Button } from '../../components/Button';
import './style.scss';
import { connect } from 'react-redux';
import { sortBy as sortByAction } from './actions';
import { loadData } from '../Results/actions';

export const SORT_BY = {
    RELEASE_DATA: 'release_date',
    RATING: 'vote_average',
}

@connect((state) => ({
    sortBy: state.sort.sortBy,
    searchBy: state.searchMovie.searchBy,
    searchBar: state.searchMovie.searchBar,
}))
export class SortBy extends React.Component {
    render() {
        return <div className="sort-by">
            <h3 className="sort-by__title">Sort by</h3>
            <Button text="release date"
                variation="link"
                color={this.isSelected(SORT_BY.RELEASE_DATA) ? '' : 'grey'}
                onClick={() => this.sortBy(SORT_BY.RELEASE_DATA)} />
            <Button text="rating"
                variation="link"
                color={this.isSelected(SORT_BY.RATING) ? '' : 'grey'}
                onClick={() => this.sortBy(SORT_BY.RATING)} />
        </div>;
    }
    isSelected(type) {
        return this.props.sortBy === type;
    }
    sortBy(type) {
        const params = {
            sortBy: type,
            searchBy: this.props.searchBy,
            search: this.props.searchBar,
            sortOrder: 'desc',
        }
        if (!this.isSelected(type)) {
            this.props.dispatch(sortByAction(type));
            this.props.dispatch(loadData(params));
        }
    }
};