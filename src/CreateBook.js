import React from 'react';

class CreateBook extends React.Component {
  state={booktype:''}
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
              width: {},
              height: {},
              backgroundImage: 'url({})'
            }}></div>
            <div className="book-shelf-changer">
              <select onClick={(event)=>this.setState({booktype:event.target.value})}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{}</div>
          <div className="book-authors">{}</div>
        </div>
      </li>
    )
  }
}

export default CreateBook;