import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault()
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        }, () => console.log(this.state))
    }

    deleteTodo(event) {
        event.preventDefault()
        const array = this.state.items
        const index = array.indexOf(event.target.value)
        array.splice(index, 1)
        this.setState({
            items: array
        })
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return(
                <div key={item}>
                    {item} | <button value={item} onClick={(event) => this.deleteTodo(event)}>X</button>
                </div>
            )
        })
    }

    render() {
        return(
            <div align="center">
                <h1>My Todo List</h1>
                <form className="form-inline">
                    <div className="form-group">
                        <input 
                            value={this.state.userInput} 
                            type="text" 
                            placeholder="Write an item"
                            onChange={(event) => this.onChange(event)}
                            className="form-control form-control-lg"
                        />
                        <button className="btn btn-primary" onClick={(event) => this.addTodo(event)}>Add</button>
                    </div>
                </form>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">{this.renderTodos()}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;