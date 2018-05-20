
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export class SearchField extends React.Component {

    render() {
        return <React.Fragment>
            <input
                className="search-field__input"
                type="text"
                onKeyUp={this.handleSearch}
                onKeyPress={this.handleKeyPress}
                defaultValue={this.props.value} />
        </React.Fragment>;
    }
    handleSearch = event => {
        this.props.updateValue(event.target.value);
    }
    handleKeyPress = event => {
        if (event.key === 'Enter' && !!this.props.onSubmit) {
            this.props.onSubmit();
        }
    }
};