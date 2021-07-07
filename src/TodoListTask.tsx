import React from 'react';
import './App.css';


type PropsTask = {
    title: string
    isDone: boolean
    priority:string
}


function TodoListTask(props: PropsTask) {
    debugger
   let isDone=props.isDone?"todoList-task done":"todoList-task"
    return (
        <div className={isDone}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>, <span>priority:  {props.priority}</span>
        </div>
    )
}


export default TodoListTask;
