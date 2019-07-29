import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './Css/App.css';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird)
    this.bird.value = ''
  }
  render() {
    const { BirdStore } = this.props
    return (
      <div className="App">
        <h1>You have {BirdStore.birdCount} birds</h1>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter bird" ref={input => this.bird = input} />
          <button>Add Bird</button>
        </form>

        <ul>
          {BirdStore.birds.map(bird => (
            <li>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
