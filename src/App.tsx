import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


export  type ObjectTasksType = {
    title: string
    isDone: boolean
    priority: string
}
export type PropsTasksType = {
    tasks: Array<ObjectTasksType>
}

type StateType = {
    tasks: Array<ObjectTasksType>
    filterValue: string
}


class App extends React.Component {
    taskTitleValue: any
        // React.RefObject<HTMLInputElement>

    constructor(props: any) {
        super(props);
        this.taskTitleValue = React.createRef()
           }

    addTaskClick = () => {
        let titleTask = this.taskTitleValue.current.value;
        this.taskTitleValue.current.value=" "


        let newTask = {
            title: titleTask,
            isDone: false,
            priority: "high"
        }

        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks,


        })

    }

    state: StateType = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "Html", isDone: false, priority: "high"},
            {title: "Js", isDone: true, priority: "medium"},
            {title: "React", isDone: false, priority: "low"}
        ],
        filterValue: "Active"

    }


    render = () => {


        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.taskTitleValue} type="text" placeholder="New task name"/>
                            <button onClick={() => this.addTaskClick()}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;