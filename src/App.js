import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({content: 0})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PageTitle />
        <Content active={this.state.content} />
        <Sidebar
          handleClick={(e) => this.setState({content:e})}
          active={this.state.content}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
