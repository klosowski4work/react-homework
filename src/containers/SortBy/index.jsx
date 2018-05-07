
import React from 'react';
import { Button } from '../../components/Button';
import './style.scss';

export class SortBy extends React.Component {
    render() {
        return <div className="sort-by">
            <h3 className="sort-by__title">Sort by</h3>
            <Button text="release date" variation="link" />
            <Button text="rating" variation="link" />
        </div>;
    }
};