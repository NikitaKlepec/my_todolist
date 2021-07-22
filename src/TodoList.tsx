import React from 'react';
import TodoListTitle from "./TodoListTitle";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import AddNewItemForm from "./AddNewItemForm";



export  type ObjectTasksType = {
    id:number
    title: string
    isDone: boolean
    priority: string
}

export type PropsTasksType = {
    tasks: Array<ObjectTasksType>
    changeStatus:(id:number,isDone:boolean)=>void
    changeTitle:(id:number,title:string)=>void

}

type StateTodoListType = {
    tasks: Array<ObjectTasksType>
    filterValue: string
}

type ObjType={
    isDone?:boolean
    title?:string
}

type TodoListType={
    id:number
    title:string
}


class TodoList extends React.Component<TodoListType> {

    componentDidMount() {
        this.restoreState()
    }

    state: StateTodoListType = {
        tasks: [
            // {id:0,title: "CSS", isDone: true, priority: "low"},
            // {id:1,title: "Html", isDone: false, priority: "high"},
            // {id:2,title: "Js", isDone: true, priority: "medium"},
            // {id:3,title: "React", isDone: false, priority: "low"}
        ],
        filterValue: "All"
    }

    nextTaskId=0

    saveState=()=>{
        let stateAsString=JSON.stringify(this.state)
        localStorage.setItem("our-state"+"-"+ this.props.id,stateAsString)
    }

    restoreState=()=>{
        let state={
            tasks:[],
            filterValue: "All"
        }
        let stateAsString=localStorage.getItem("our-state"+"-"+ this.props.id)
        if(stateAsString!=null){
            state=JSON.parse(stateAsString)
        }
        this.setState(state,()=>{
            this.state.tasks.forEach(task=>{
                if(task.id>=this.nextTaskId){
                    this.nextTaskId=task.id+1
                }
            })
        })
    }

    addItemClick = (titleTask:string) => {
        let newTask = {
            id:this.nextTaskId,
            title: titleTask,
            isDone: false,
            priority: "high"
        }
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        },()=>{this.saveState()})
        this.nextTaskId++

    }
    changeFilter=(newFilterValue:string)=>{
        this.setState({
            filterValue:newFilterValue
        })
    }

    changeTask=(id:number,obj:ObjType)=>{
        let newTasks=this.state.tasks.map(tas=>{
            if (tas.id!=id){
                return tas
            } else{
                return {...tas,...obj}
            }
        })
        this.setState({
            tasks:newTasks
        })
    }

    changeStatus=(id:number,isDone:boolean)=>{
       this.changeTask(id,{isDone})
    }

    changeTitle=(id:number,title:string)=>{
        this.changeTask(id,{title})
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todolist-header">
                        <TodoListTitle title={this.props.title}/>
                        <AddNewItemForm addItem={this.addItemClick}/>
                    </div>

                    <TodoListTasks tasks={this.state.tasks.filter(task=>{
                       switch(this.state.filterValue){
                           case "All":return true
                           case "Completed": return !task.isDone
                           case "Active":return task.isDone
                       }})}
                                   changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}/>
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default TodoList;