import React, { Component } from 'react';
import Book from './Book';
import booksdata from './BookData';
export default class Booklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booksdata
        }
    }
    
    render() {
        // const books = this.state.books.map((item)=>item.book);
        // console.log(books);
        //filter
        //foreach
        //map
        //reduce
        return (
            <section>
                <h3>This is our book list</h3>
                {this.state.books.map((item) => (
                    <Book key={item.id} info={item}/>
                ))}
            </section>
        )
    }
}
