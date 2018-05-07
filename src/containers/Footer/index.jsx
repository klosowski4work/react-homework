
import React from 'react';
import './style.scss';
import { Logo } from '../../components/Logo';

export class Footer extends React.Component {
    render() {
        return <div className="footer">
            <Logo />
        </div>;
    }
};