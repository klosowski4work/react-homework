
import React from 'react';
import { Button } from '../../components/Button';
import { Results } from '../Results';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import './style.scss';

import { Link } from 'react-router-dom';


export const Page404 = ()=> ({
    render() {
        return <div className="page404">
            <Header>
                <div className="page404__search-button">
                    <Link to='/search'><Button color="red-reverse" text="SEARCH"></Button></Link>
                </div>
            </Header>
            <div className="page404__body">
                <h1>Page not found</h1>
            </div>
            <Footer />
        </div>
    }
});