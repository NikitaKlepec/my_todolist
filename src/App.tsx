import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


export  type ObjectTasksType={
    title:string
    isDone:boolean
    priority:string
}
export type PropsTasksType={
    tasks:Array<ObjectTasksType>
}



class App extends React.Component {

    filterValue="Active"
    tasks:Array<ObjectTasksType>=[
        {title:"CSS",isDone:true,priority: "low"},
        {title:"Html",isDone:false,priority: "high"},
        {title:"Js",isDone:true,priority: "medium"},
        {title:"React",isDone:false, priority: "low"}
    ]

  render = () => {


    return (
        <div className="App">
          <div className="todoList">
            <TodoListHeader/>
            <TodoListTasks tasks={this.tasks}/>
            <TodoListFooter filterValue={this.filterValue}/>
          </div>
        </div>
    );
  }
}

export default App;