import React from "react";
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";





type ObjTodoListsType={
    id:number,
    title:string
}

type StateTodoListType={
    todolist:Array<ObjTodoListsType>
}

class App extends React.Component {
    componentDidMount() {
        this.restoreState()
    }

    state:StateTodoListType = {
        todolist: [
            // {id: 1, title: "Learn React"},
            // {id: 2, title: "Learn Javascript"},
            // {id: 3, title: "Learn CSS"}
        ]
    }

    saveState=()=>{
        let stateAsString=JSON.stringify(this.state)
        localStorage.setItem("todolist-state",stateAsString)
    }

    restoreState=()=>{
        let state={
            todolist:[],

        }
        let stateAsString=localStorage.getItem("todolist-state")
        if(stateAsString !=null){
            state=JSON.parse(stateAsString)
        }
        this.setState(state,()=>{
            this.state.todolist.forEach(task=>{
                if(task.id>=this.nextTodoListId){
                    this.nextTodoListId=task.id+1
                }
            })
        })
    }

    // addItemClick = (titleTask:string) => {
    //     let newTask = {
    //         id:this.nextTaskId,
    //         title: titleTask,
    //         isDone: false,
    //         priority: "high"
    //     }
    //     let newTasks = [...this.state.tasks, newTask]
    //     this.setState({
    //         tasks: newTasks
    //     },()=>{this.saveState()})
    //     this.nextTaskId++
    //
    // }
     nextTodoListId=0

    addTodoList=(title:string)=>{
        let newTodoList={
            id:this.nextTodoListId,
            title:title
        }
        let newTodoLists=[...this.state.todolist,newTodoList]
        this.setState({todolist:newTodoLists},()=>{this.saveState()})
        this.nextTodoListId++
    }

    render() {
        let todoLists = this.state.todolist.map(td => <TodoList id={td.id} title={td.title}/>)
        return (
            <>
                <div>
                   <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className={"App"}>
                    {todoLists}
                </div>
            </>
        )
    }
}

export default App;