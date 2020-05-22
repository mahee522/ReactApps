import React, { Component } from 'react'
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            name: 'John'
        };
        //this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        //console.log(this.props)
        const {id, img, title, author } = this.props.info;
        const handleDelete = this.props.handleDelete;
        
        return (
            <article className="book">
                <img src={img} width="150" alt="book" />
                <div>
                  <h3>Title: {title}</h3>
                    <h5>Author: {author}</h5>
                    <button type='button' onClick={()=>handleDelete(id)}>Delete Me</button>
                </div>
            </article>
        )
    }

   
}
