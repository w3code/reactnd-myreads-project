import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return(
            <div>
                <h1>Oh no, you're on the 404-Page!</h1>
                <h3>
                    Go back to the Start!
                    <Link to="/" className="close-search">Close</Link>
                </h3>
            </div>
        )
    }
}

export default ErrorPage