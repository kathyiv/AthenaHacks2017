import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      value: ' '
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // update( e ){
  //   this.setState({question: e.target.value})
  // }
  handleChange(event){
    this.setState({value: event.target.value});
  }

handleSubmit(event){
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

  render() {
    return (
      <div className="App">
        <h1><font color="DarkTurquoise">Hey Girl,</font></h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        <h3><font color="DarkTurquoise">Name {this.state.value}</font></h3>
      </div>
    );
  }
}




export default App;
