import React from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './component/ListBooks';
import SearchBooks from './component/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {}
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>< ListBooks />}/>
        <Route path='/search' component={() =>< SearchBooks />}/>
      </div>
    )
  }
}

export default BooksApp;
