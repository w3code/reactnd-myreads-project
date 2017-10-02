import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SingleBook from './SingleBook'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        placeholderText: PropTypes.string.isRequired,
        handleStatus: PropTypes.func.isRequired
    }

    render() {
        const { books, title, placeholderText, handleStatus } = this.props
        // Show a placeholder-text, if bookshelf is empty
        let showPlaceholder = books.length > 0 ? null : placeholderText
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <h3 style={{ textAlign: `center`, color: `#ccc`}}>{showPlaceholder}</h3>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    { books.map((book) => {
                        return (
                            <SingleBook key={book.id} book={book} handleStatus={handleStatus} />
                        )
                      })
                    }
                    </ol>
                </div>
            </div>
        )
    }

}

export default Shelf