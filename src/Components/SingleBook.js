import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        handleStatus: PropTypes.func.isRequired
    }

    render() {
        const {book, handleStatus} = this.props

        let bookCover = !book.imageLinks ? "http://via.placeholder.com/128x193?text=No%20Cover" : book.imageLinks.thumbnail

        const inShelf = book.shelf
        const noShelf = "none"
        let status = !book.shelf ? noShelf : inShelf

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${bookCover})` 
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={status} onChange={(event) => handleStatus(event, book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book