// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render(){

    return(
      <div className='container'>
        <div className='cube'>
        <div className='face front'></div>
        <div className='face back'></div>
        <div className='face top'></div>
        <div className='face bottom'></div>
        <div className='face left'></div>
        <div className='face right'></div>
      </div>
      </div>
    )
  }

}

export default App;
