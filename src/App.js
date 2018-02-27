import React, { Component } from 'react';
import './App.css';
import Header               from "./components/Header";
import Footer               from "./components/Footer";
import PageTitle            from "./components/PageTitle";
import Sidebar              from "./components/Sidebar";
import About                from "./components/content/About";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <PageTitle />
          <Sidebar />
          <About />
          <Footer />
      </div>
    );
  }
}

export default App;
