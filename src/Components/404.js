import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div>
                    <h1 style={{ textAlign: "center"}}>Oh no, you're on the 404-Page!<br/>:-(</h1>
                    <h3 style={{ marginLeft: "15px"}}>
                        Go back to the Start!
                        <Link 
                            to="/"
                            className="close-search" 
                        >Back to start
                        </Link>
                    </h3>
                </div>
            </div>
        )
    }
}

export default ErrorPage