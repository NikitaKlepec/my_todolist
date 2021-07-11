import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {PropsTasksType} from "./App";


function TodoListTasks(props: PropsTasksType) {
    let taskElement=props.tasks.map(task=>
        <TodoListTask
            title={task.title}
            isDone={task.isDone}
            priority={task.priority}
            id={task.id}
            changeStatus={props.changeStatus}
            changeTitle={props.changeTitle}
        />)

    return (
        <div className="todoList-tasks">
            {taskElement}
        </div>
    )
}

export default TodoListTasks;

