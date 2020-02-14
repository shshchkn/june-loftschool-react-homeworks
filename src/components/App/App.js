import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Child from 'components/Child/Child';

class App extends Component {
  state = {
    counter: 0
  };

  handleMinus = e => {
    if (this.state.counter > 0) {
      this.setState(state => ({ counter: state.counter - 1 }));
    }
  };

  handlePlus = e => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={logo} alt="logo" width="150" />
            <div>{`counter: ${this.state.counter}`}</div>
            <button className="btn btn-primary" onClick={this.handleMinus}>
              -
            </button>
            <button className="btn btn-primary" onClick={this.handlePlus}>
              +
            </button>

            <Child
              var={this.state.counter}
              condition={this.state.counter % 2 === 0}
            >
              <p>Some text</p>
            </Child>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
