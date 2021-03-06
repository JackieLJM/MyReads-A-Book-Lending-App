import React from 'react';
import {Link} from 'react-router-dom';
// import * as BooksAPI from '../utils/BooksAPI';
import Book from './CreateBook.js';
// import localBooks from '../utils/BooksData';

class ListBooks extends React.Component {
  
  render() {
    const remoteBooks = this.props.books;
    const current=(datas)=>(datas.filter((data)=>(data.shelf==='currentlyReading')));
    const wantTo=(datas)=>(datas.filter((data)=>(data.shelf==='wantToRead')));
    const read=(datas)=>(datas.filter((data)=>(data.shelf==='read')));
    
    //获取远程books做本地持久化后再取用其来更新组件，如此，本地持久化毫无意义 
    let Books = [].concat(remoteBooks);    
    localStorage.setItem('books',JSON.stringify(Books));
    let storageBooks=JSON.parse(localStorage.books);

    // 应该这样写，获取一组远程数据后存储为一组新键值，这样可以缓存查询的数据，而自己图书馆的数据每次更新数据到远程后要持久化到客户端避免
    // 再次从远程获取数据应该？
    // 参考该持久化state handler方法：
    // onSearch = (e) => {
    //   e.preventDefault();

    //   const { value } = this.input;

    //   if (value === '') {
    //     return;
    //   }

    //   const cachedHits = localStorage.getItem(value);
    //   if (cachedHits) {
    //     this.setState({ hits: JSON.parse(cachedHits) });
    //     return;
    //   }

    //   fetch('https://hn.algolia.com/api/v1/search?query=' + value)
    //     .then(response => response.json())
    //     .then(result => this.onSetResult(result, value));
    // }

    // onSetResult = (result, key) => {
    //   localStorage.setItem(key, JSON.stringify(result.hits));
    //   this.setState({ hits: result.hits });
    // }



    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {current(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantTo(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read(storageBooks).map((data)=><Book key={data.id} changeShelf={this.props.changeShelf} book={data}/>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/Search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;