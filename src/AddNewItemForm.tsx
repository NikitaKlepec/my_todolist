import React, {ChangeEvent} from 'react';
import './App.css';

type AddNewItemFormType = {
    addItem: (titleTask: string) => void
}


class AddNewItemForm extends React.Component<AddNewItemFormType> {


    state = {
        error: false,
        title: ''
    }


    onAddItemTitle = () => {

        let titleTask = this.state.title;
        this.state.title = '';
        if (titleTask === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addItem(titleTask)
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
            this.onAddItemTitle()
        }
    }


    render = () => {
        let classForError = this.state.error ? "error" : ""
        return (
            <div className="todoList-newTaskForm">
                <input className={classForError}
                       type="text"
                       placeholder="New task name"
                       onChange={this.onTitleChanged}
                       onKeyPress={this.onKeyEnterChanged}
                       value={this.state.title}
                />
                <button onClick={this.onAddItemTitle}>Add</button>
            </div>
        );
    }
}

export default AddNewItemForm;
