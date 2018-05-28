
import './style.scss';
import React from 'react';
import { Button } from '../../components/Button';
import { SearchField } from '../../components/SearchField';
import { Logo } from '../../components/Logo';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Results } from '../Results';
import PropTypes from 'prop-types';
import { SearchMovie } from '../SearchMovie';
import { createStore } from 'redux';
import { connect } from 'react-redux';

@connect((state) => {
    return {}
})
export class SearchPage extends React.Component {
    static propTypes = {
        searchBy: PropTypes.string,
    };

    constructor(params) {
        super(params);
    }

    render() {
        const { searchBy, dispatchSearchBy } = this.props;
        return <div className="search-page">
            <Header>
                <SearchMovie />
            </Header>
            <div className="search-page__body">
                <Results />
            </div>
            <Footer />
        </div>
    }
};