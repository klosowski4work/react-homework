
import React from 'react';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import image from '../../../images/net.jpg';
import './style.scss';
import { SearchMovie } from '../SearchMovie';

export class Header extends React.Component {
    render() {
        return <div className="header" style={{ backgroundImage: `url('${image}')` }}>
            <div className="header__container">
                <Logo />
                <SearchMovie />
            </div>
        </div>;
    }
};