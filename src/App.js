import React from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './component/ListBooks';
import SearchBooks from './component/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{this.setState({books})})
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=><ListBooks/>}/>
        <Route path='/search' render={()=><SearchBooks/>}/>
      </div>
    )
  }
}

export default BooksApp;
