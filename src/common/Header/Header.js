import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="logo" className="app-logo" />
                <Button variant="contained" id="header-btn" >
                    Primary
                </Button>
            </div>
        );
    }
}

export default Header;