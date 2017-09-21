import React from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './component/ListBooks';
import SearchBooks from './component/SearchBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {books:[]}
  }
  changeShelf = (book, shelf) => BooksAPI
    .update(book, shelf)
    .then(this.getRemoteDatas)

  getRemoteDatas = () => BooksAPI
    .getAll()
    .then((books) => this.setState({books: books}))

  componentDidMount() {
    this.getRemoteDatas();
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={()=><ListBooks books = {this.state.books}
          changeShelf = {this.changeShelf}/>}
        />
        <Route
          path='/search'
          component={()=><SearchBooks changeShelf = {
          this.changeShelf}/>}
        />
      </div>
    )
  }
}

export default BooksApp;
