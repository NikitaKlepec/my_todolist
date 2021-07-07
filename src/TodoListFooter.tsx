import React from 'react';
import './App.css';

type TodoListFooterType={
    filterValue:string
    changeFilter:(filterValue:string)=>void
}

type StateFooterType={
    isHidden:boolean
}

class TodoListFooter extends React.Component<TodoListFooterType> {
    state:StateFooterType={
        isHidden:false
    }

    onHideFiltersClick=(event: React.MouseEvent<HTMLElement>)=>{
        this.setState({isHidden:false})
    }
    onShowFiltersClick=(event: React.MouseEvent<HTMLElement>)=>{
        this.setState({isHidden:true})
    }

    onAllFilterClick = () => {this.props.changeFilter("All" )}
    onCompletedFilterClick = () => {this.props.changeFilter("Completed" )}
    onActiveFilterClick = () => {this.props.changeFilter("Active" )}


    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className="todoList-footer">
                {this.state.isHidden && <div>
                <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                    </div>}
                {this.state.isHidden&&<span onClick={this.onHideFiltersClick}>hide</span>}
                {!this.state.isHidden&&<span onClick={this.onShowFiltersClick}>show</span>}
            </div>

        );
    }
}

export default TodoListFooter;
