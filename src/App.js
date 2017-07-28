import React from 'react';
import {Router} from 'react-router-dom';
import ListBooks from './ListBooks.js';
import SearchBooks from './SearchBooks.js'
// import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Router path='/' component={ListBooks}/>
        <Router path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp;
