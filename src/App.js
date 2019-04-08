import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductPage from './components/ProductPage';
import PricingPage from './components/PricingPage';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <ProductPage />
        <PricingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
