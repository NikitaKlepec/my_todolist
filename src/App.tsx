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


    addTaskClick = (titleTask:string) => {


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
    changeFilter=(newFilterValue:string)=>{
        this.setState({
            filterValue:newFilterValue
        })
    }

    state: StateType = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "Html", isDone: false, priority: "high"},
            {title: "Js", isDone: true, priority: "medium"},
            {title: "React", isDone: false, priority: "low"}
        ],
        filterValue: " "
    }


    render = () => {


        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTaskClick={this.addTaskClick}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;