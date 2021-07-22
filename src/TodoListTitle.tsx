import React from 'react';
import './App.css';

type TodoListTitleType = {
    title: string
}


class TodoListTitle extends React.Component<TodoListTitleType> {
    render = () => {
        return (
            <>
                <h3 className="todoList-header__title">{this.props.title}</h3>
            </>
        );
    }
}

export default TodoListTitle;
