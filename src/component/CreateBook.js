import React from 'react';
import PropTypes from 'prop-types';

class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: ''
    };
    this.changeShelf = this
      .changeShelf
      .bind(this);
  }
  static propTypes = {
    book: PropTypes
      .shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes
        .arrayOf(PropTypes.string.isRequired),
      imageLinks:PropTypes.shape({thumbnail:PropTypes.string.isRequired}).isRequired
        .isRequired
    })
      .isRequired
  }

  changeShelf = (event) => this.setState({shelf: event.target.value})

  render() {
    // const {width, height, backgroundImage, title, authors} = this.props;
    const {book}=this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              // width: book.width,
              // height: book.height,
              // backgroundImage: book.imageLinks?(`url(${book.backgroundImage||book.imageLinks.thumbnail})`):''
            }}></div>
            <div className="book-shelf-changer">
              <select onClick={this.changeShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{/*book.title*/}
          </div>
          <div className="book-authors">{/*book.authors*/}</div>
        </div>
      </li>
    )
  }
}

export default CreateBook;