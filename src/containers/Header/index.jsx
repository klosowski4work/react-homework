
import React from 'react';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import './style.scss';

export class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="header__container">
                <Logo />
                {this.props.children}
            </div>
        </div>;
    }
};