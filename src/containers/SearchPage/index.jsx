
import './style.scss';
import React from 'react';
import { Button } from '../../components/Button';
import { SearchField } from '../../components/SearchField';
import { Logo } from '../../components/Logo';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Results } from '../Results';
import PropTypes from 'prop-types';
import { SearchMovie } from '../SearchMovie';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { searchBy, search } from '../SearchMovie/actions';
import { sortBy } from '../SortBy/actions';
import { loadData, clearData } from '../Results/actions';
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
    componentDidMount() {
        if (this.props.location.search) {
            const params = new URLSearchParams(this.props.location.search);
            this.props.dispatch(searchBy(params.get('searchBy')));
            this.props.dispatch(search(params.get('search')));
            this.props.dispatch(sortBy(params.get('sortBy')));
            this.props.dispatch(loadData(this.props.location.search));
        } else {
            this.props.dispatch(clearData());
        }
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