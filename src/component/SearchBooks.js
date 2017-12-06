import React from 'react';
import {Link} from 'react-router-dom';
import Book from './CreateBook.js';
import * as BooksAPI from '../utils/BooksAPI';
import DebounceInput from 'react-debounce-input';

class SearchBooks extends React.Component {
  state = {
    books:[],
    err:'',
    query:''
  }
  
  search=(query)=>(BooksAPI.search(query)
  .then((books)=>this.setState({books:books,query:query}))
  // .then((books)=>console.log(books))
  .catch((error)=>this.setState({books:[],err:'Nothing that you search for the books you type here.'})))

  render() {
    const {query,books,err}=this.state;
    
    // console.log(books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        However, remember that the BooksAPI.search method DOES search by title or author.
        So, don't worry if youdon't find a specific author or title. Every search is limited by search terms.*/}
            <DebounceInput type="text" debounceTimeout={500} placeholder="Search by title or author" 
            value={query} onChange={(event) => this.search(event.target.value===''?null:event.target.value.trim())}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books===[]?null:books.map((book)=><Book key={book.id} changeShelf={this.props.changeShelf} book={book}/>)}
          </ol>
          <div >
            {err}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBooks;