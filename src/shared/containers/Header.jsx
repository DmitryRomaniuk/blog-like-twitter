import React, { Component } from 'react';
import Toolbar from '../components/Toolbar';

class Header extends Component {
    render() {
        return (
            <Toolbar filterList={this.props.filterList}/>
        );
    }
}

export default Header;
