import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


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

type StateType = {
    tasks: Array<ObjectTasksType>
    filterValue: string
}

type ObjType={
    isDone?:boolean
    title?:string
}


class App extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    state: StateType = {
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
        localStorage.setItem("our-state",stateAsString)
    }

    restoreState=()=>{
        let state={
            tasks:[],
            filterValue: "All"
        }
        let stateAsString=localStorage.getItem("our-state")
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

    addTaskClick = (titleTask:string) => {
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
                    <TodoListHeader addTaskClick={this.addTaskClick}/>
                    <TodoListTasks tasks={this.state.tasks.filter(task=>{
                        if(this.state.filterValue==="All"){
                            return true
                        }
                        if(this.state.filterValue==="Completed"){
                            return task.isDone===true
                        }
                        if(this.state.filterValue==="Active"){
                            return task.isDone===false
                        }
                    })}
                                   changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}/>
                    <TodoListFooter filterValue={this.state.filterValue} changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;