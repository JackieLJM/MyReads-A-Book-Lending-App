import React from 'react';
import PropTypes from 'prop-types';

class CreateBook extends React.Component {
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      imageLinks: PropTypes.shape({thumbnail: PropTypes.string.isRequired}).isRequired,
      shelf:PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    const {book,changeShelf} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              width: 128,
              height: 170,
              backgroundImage: `url('${book.imageLinks.thumbnail}')` /*book.imageLinks?(`url(${book.backgroundImage||book.imageLinks.thumbnail})`):''*/
              }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event)=>changeShelf(book,event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}
          </div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

CreateBook.defaultProps = {
  book: {
    // backgroundImage: '',
    title: '',
    authors: [],
    imageLinks: {
      thumbnail: ''
    },
    shelf:''
  }
}

export default CreateBook;