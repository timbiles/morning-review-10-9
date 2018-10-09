import React, { Component } from 'react';

import Menu from '../Menu/Menu';
import Smash from '../Smash/Smash';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true
        }
    }

    handleMenuToggle = () => {
        this.setState({toggle: true})
    }

    handleSmashToggle = () => {
        this.setState({toggle: false})
    }
    
    render() {
        return (
            <div>
                <header>
                    <p onClick={() => this.handleMenuToggle()}>Menu</p>
                    <p onClick={() => this.handleSmashToggle()}>Smash</p>

                </header>
        {this.state.toggle ? <Menu /> : <Smash /> }
            </div>
        );
    }
}

export default Home;