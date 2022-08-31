import React, { Component } from 'react';

class Author extends Component {

    render(quote) {
        return (
            <div>
                <p className="author">{quotes.author}</p>
            </div>
        );
    }
}

export default Author;