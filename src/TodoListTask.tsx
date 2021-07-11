import React, {ChangeEvent, useState} from 'react';
import './App.css';


type PropsTask = {
    id: number
    title: string
    isDone: boolean
    priority: string
    changeStatus: (id: number, isDone: boolean) => void
    changeTitle:(id:number,title:string)=>void
}


function TodoListTask(props: PropsTask) {
    let [status, setStatus] = useState(false)

    let activateEditMode = () => {
        setStatus(true)
    }

    let deactivateEditMode = () => {
        setStatus(false)
    }

    let onIsDoneChanged = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.id, event.currentTarget.checked)
    }

    let onTitleCanged = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeTitle(props.id, event.currentTarget.value)
    }

    let onKeyEnterTitleChanged = (e: any) => {
        if (e.key === "Enter") {
            deactivateEditMode()
        }
    }

    let isDone = props.isDone ? "todoList-task done" : "todoList-task"
    return (
        <div className={isDone}>
            <input type="checkbox"
                   checked={props.isDone}
                   onChange={onIsDoneChanged}
            />
            {status
                ? <input onBlur={deactivateEditMode}
                         autoFocus={true}
                         value={props.title}
                         onChange={onTitleCanged}
                            onKeyPress={onKeyEnterTitleChanged}>
                </input>
                : <span
                    onClick={activateEditMode}>{props.id} - {props.title}</span>}
            , <span>priority: {props.priority}</span>
        </div>
    )
}


export default TodoListTask;
