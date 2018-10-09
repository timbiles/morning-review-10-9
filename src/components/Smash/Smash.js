import React, { Component } from 'react';
import axios from 'axios';

import './Smash.css';

class Smash extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/characters').then(res => {
      console.log(res.data);
      this.setState({ characters: res.data });
    });
  }

  render() {
    const { characters } = this.state;

    const map = this.state.characters.map(e => {
      return (
          <div className="map_char" key={e.id}>
            <h1>{e.name}</h1>
            <img src={e.img} alt="" />
          </div>
      );
    });
    return (
      <div className="smash_main">
        <div className="smash">{map}</div>
        <div className='chatbox'>
            <h2>Chat with me</h2>
        </div>
      </div>
    );
  }
}

export default Smash;
