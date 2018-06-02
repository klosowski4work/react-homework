
import React from 'react';
import { Button } from '../Button';
import './style.scss';
import { connect } from 'react-redux';

export const SORT_BY = {
    RELEASE_DATA: 'release_date',
    RATING: 'vote_average',
}

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
        if (!this.isSelected(type)) {
            this.props.onSortByChange(type);
        }
    }
};