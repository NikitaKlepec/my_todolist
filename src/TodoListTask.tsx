import React from 'react';
import './App.css';


type PropsTask = {
    title: string
    isDone: boolean
    priority:string
}


function TodoListTask(props: PropsTask) {

    return (
        <div className="todoList-task">
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>, <span>priority:  {props.priority}</span>
        </div>
    )
}


export default TodoListTask;
