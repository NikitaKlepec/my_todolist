import React, {ChangeEvent} from 'react';
import './App.css';

type TodoListFooterType = {
    addTaskClick: (titleTask: string) => void
}


class TodoListHeader extends React.Component<TodoListFooterType> {


    state = {
        error: false,
        title: ''
    }


    onAddTaskTitle = () => {

        let titleTask = this.state.title;
        this.state.title = '';
        if (titleTask === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTaskClick(titleTask)
        }
        // this.props.addTaskClick(titleTask)

    }

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    onKeyEnterChanged = (e: any) => {
        if (e.key === "Enter") {
            this.onAddTaskTitle()
        }
    }


    render = () => {
        let classForError = this.state.error ? "error" : ""
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={classForError}
                           type="text"
                           placeholder="New task name"
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyEnterChanged}
                           value={this.state.title}
                    />
                    <button onClick={this.onAddTaskTitle}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;
