import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import SingleBook from './SingleBook'

class Search extends Component {
    static propTypes = {
        booksShelved: PropTypes.array,
        handleStatus: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
    }

    clearQuery = () => {
        this.setState({ query: '', books: []})
    }

    handleSearch = (query) => {
        if(!query) {
            this.clearQuery(query)
        } else {
            this.updateQuery(query)

            BooksAPI.search(query, 20).then(books => {
                if(!books.error) {
                    // "buch" is the german word for "book"
                    books.map(book => (this.props.booksShelved.filter((buch) => buch.id === book.id).map(buch => book.shelf = buch.shelf)))
                    this.setState({ books })
                } else {
                    console.log(books.error)
                }
            })
        }
    }

    render() {
        const { handleStatus } = this.props
        const { query, books } = this.state;
        
        let searchResult

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            searchResult = books.filter(book => match.test(book.title))
        } else {
            searchResult = books
        }
        searchResult.sort(sortBy('title'))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.handleSearch(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { searchResult.map((book) => {
                            return (
                                <SingleBook 
                                    key={book.id} 
                                    book={book}
                                    handleStatus={handleStatus}
                                />
                            )
                        })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search