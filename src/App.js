import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './Components/ListBooks'
import Search from './Components/Search'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  handleStatus  = (event, book) => {
      const shelf = event.target.value

      if (this.state.books) {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;
          this.setState(state => ({
            // "buch" is the german word for "book"
            books: state.books.filter(buch => buch.id !== book.id).concat([ book ])
          }))
        })
      }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.books} 
              handleStatus={this.handleStatus}
            />
        )}/>
        <Route path="/search" render={( {history} ) => (
            <Search 
              booksShelved={this.state.books} 
              handleStatus={this.handleStatus} 
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp