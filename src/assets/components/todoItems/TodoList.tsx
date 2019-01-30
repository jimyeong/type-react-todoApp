import * as React from 'react';
import TodoItem from './TodoItem';


interface TodoItemData{
    id: number;
    text: string;
    done: boolean;
}

/* missing point */
interface IProps{
    todoItems: TodoItemData[];
    onDelete(id: number): void;
    changeChildData(prev: number, created: string): void
}


class TodoList extends React.Component< IProps >{
    renderList = () => {
        const Items = this.props.todoItems.map((item: TodoItemData, i: number ) => {
            return <TodoItem
                { ...item }
                changeChildData={this.props.changeChildData}
                onDelete={this.props.onDelete}
                key={i}/>
        });
        return Items
    };

    componentDidMount() {

    }


    public render(){
        return(
            <div className="Todo-list">
                {this.renderList()}
            </div>
        )
    }
}


export default TodoList;