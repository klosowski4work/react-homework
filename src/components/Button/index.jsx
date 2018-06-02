
import React from 'react';
import './style.scss';
export class Button extends React.Component {
    constructor(params) {
        super(params);
    }
    render() {
        return <React.Fragment>
            <button
                className={this.className}
                type="button"
                onClick={() => this.props.onClick && this.props.onClick()}>
                {this.props.text}
            </button>
        </React.Fragment >;
    }
    get className() {
        const buttonType = !this.props.variation ? 'button' : 'button-' + this.props.variation;
        const sizeMod = this.props.size ? buttonType + '--' + this.props.size : '';
        const colorMod = this.props.color ? buttonType + '--' + this.props.color : '';
        return `${buttonType} ${sizeMod}  ${colorMod}`;
    }

};
Button.defaultProps = {
    text: 'click me',
    size: '',
    color: '',
    variation: '',
};
