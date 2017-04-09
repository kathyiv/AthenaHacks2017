import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state = {sentence: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
      if(this.state.value==="beginner"){
        this.state.sentence = "you are on the beginner track";
      }else if (this.state.value==="intermediate") {
        this.state.sentence = "you are on the intermediate track";
      }else if (this.state.value==="advanced") {
        this.state.sentence = "you are on the advanced track";
      }
    }

    handleSubmit(event) {
      alert('you entered ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
              Pick your level:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default App;
