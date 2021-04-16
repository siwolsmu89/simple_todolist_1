import React, { Component } from 'react';
import TodoListTemplate from "./components/todo-list-template/TodoListTemplate";
import Form from "./components/form/Form.js";
import TodoItemList from "./components/todo-item-list/TodoItemList.js";
import Palette from "./components/palette/Palette";

class App extends Component {

    id = 3

    state = {
        input: '',
        todos: [
            { id: 0, text: '리액트 소개', checked: false, color: '#343a40' },
            { id: 1, text: '리액트 소개', checked: true, color: '#343a40' },
            { id: 2, text: '리액트 소개', checked: false, color: '#343a40' }
        ],
        colors: [
            { id: 0, colorValue: '#343a40' },
            { id: 1, colorValue: '#f03e3e' },
            { id: 2, colorValue: '#228ae6' },
            { id: 3, colorValue: '#12b886' }
        ],
        selectedColor: '#343a40'
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        const { input, todos, selectedColor } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                colorValue: selectedColor
            })
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        this.setState({
            todos: nextTodos
        });
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    handleSelect = (colorValue) => {
        this.setState({
            selectedColor: colorValue
        })
    }

    render() {
        const { input, todos, colors, selectedColor } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelect
        } = this;

        return (
            <div>
                <TodoListTemplate form={(
                    <Form
                        value={input}
                        colorValue={selectedColor}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                )}
                palette={(<Palette
                        colors={colors}
                        onSelect={handleSelect}
                        selected={selectedColor}
                />)}>
                    <TodoItemList
                        todos={todos}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                    />
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;