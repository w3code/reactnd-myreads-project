import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleStatus: PropTypes.func.isRequired
    }

    render() {
        const { books, handleStatus } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            title="Currently Reading"
                            placeholderText="Nothing added yet..."
                            handleStatus={handleStatus}
                            books={books.filter(book => book.shelf === 'currentlyReading')}
                        />
                        <Shelf 
                            title="Want To Read"
                            placeholderText="Nothing added yet..." 
                            handleStatus={handleStatus} 
                            books={books.filter(book => book.shelf === 'wantToRead')}
                        />
                        <Shelf 
                            title="Read"
                            placeholderText="Nothing added yet..." 
                            handleStatus={handleStatus} 
                            books={books.filter(book => book.shelf === 'read')}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="open-search"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks