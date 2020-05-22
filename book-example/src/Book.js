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
    
    // handleClick() {
    //     console.log("You clicked me");
    //     console.log(this.state.count);
    // }

    // handleClick = () => {
    //     console.log("you clicked me");
    //     console.log(this.state.count);
    // }

    addCount = () => {
        this.setState({
            count: this.state.count+1, name:'Peter'
        })
    };

    lowerCount = () => {
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    };

    resetCount = () => {
        this.setState(
            {
                count: 0
            }
        )
    };
    render() {
        //console.log(this.props)
        const { img, title, author } = this.props.info;
        return (
            <article className="book">
                <img src={img} width="150" alt="book" />
                <div>
                  <h3>Title: {title}</h3>
                    <h5>Author: {author}</h5>
                    <h3>count: {this.state.count}</h3>
                    <h3>name: {this.state.name}</h3>
                    <button type="button" onClick={this.addCount}> add count</button>
                    <button type="button" onClick={this.lowerCount}> lower count</button>
                    <button type="button" onClick={this.resetCount}> reset count</button>
                </div>
            </article>
        )
    }

   
}
