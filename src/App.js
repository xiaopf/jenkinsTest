import React, { Component } from 'react';
import './App.css';
import arrow from './arrow.jpg'

class App extends Component {

  render() {  

    return (
      <div style={{width:'100%',textAlign:'center',fontSize:'40px',paddingTop:'20px'}}>
          Hello lalala成功啦么lla Jenkins!!!
          <img src={arrow} alt="d" />
      </div>
    );
  }
}

export default App;
