import React, { Component } from 'react'
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            name: 'John',
            showInfo: false
        };
        //this.handleClick = this.handleClick.bind(this);
    }
    
    toggleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        //console.log(this.props)
        const {id, img, title, author } = this.props.info;
        const handleDelete = this.props.handleDelete;
        const checkInfo=info=>{
            if (info === true) {
                return <p>Putting your existing work on GitHub can let you share and collaborate in lots of great ways.</p>
            } else {
                return null
            }
        };
        return (
            <article className="book">
                <img src={img} width="150" alt="book" />
                <div>
                  <h3>Title: {title}</h3>
                    <h5>Author: {author}</h5>
                    <button type='button' onClick={() => handleDelete(id)}>Delete Me</button>
                    <button type='button' onClick={this.toggleInfo}>Toggle Info</button>

                    {checkInfo(this.state.showInfo)}
                   
                    {
                       /*ternary operator
                     {this.state.showInfo ? <p>Putting your existing work on GitHub can let you share and collaborate in lots of great ways.</p> : null}
                   */}
                    
                    {/*this is and */}
                    {/*{
                        this.state.showInfo&&<p>Putting your existing work on GitHub can let you share and collaborate in lots of great ways.</p>
                    }*/}
                </div>
            </article>
        )
    }

   
}
