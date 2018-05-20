
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export class SearchField extends React.Component {

    render() {
        return <React.Fragment>
            <input
                className="search-field__input"
                type="text"
                onKeyUp={this.handleKeyUp}
                onKeyPress={this.handleKeyPress}
                value={this.props.value} />
        </React.Fragment>;
    }
    handleKeyUp = event => {
        this.props.updateValue(event.target.value);
    }
    handleKeyPress = event => {
        if (event.key === 'Enter' && !!this.props.onSubmit) {
            this.props.onSubmit();
        }
    }
};