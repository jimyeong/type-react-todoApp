import * as React from 'react';
import AddList from './todoItems/AddList';
import TodoList from './todoItems/TodoList';
import Counter from './todoItems/Counter';
import './todoItems/less/todo.less';

interface Props{
    name: string;
    job: string;
}

interface TodoItemData{
    id: number;
    text: string;
    done: boolean;
}

interface State{
    todoItems: TodoItemData[];
    input:string;
}


class Todo extends React.Component< Props,State >{

    id: number = 0;
    state: State = {
        todoItems:[],
        input: ''
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        this.setState(
            ({ todoItems, input }) => ({
                input: '',
                todoItems: todoItems.concat({
                    id: this.id++,
                    text: input,
                    done: false
                })
            })
        );
    };

    onChange = (e: React.FormEvent<HTMLInputElement>):void => {
        const { value } = e.currentTarget;
        this.setState({
            input: value
        });
    };

    onDelete = ( id: number ):void => {
        this.setState(
            ({ todoItems }) => ({
                todoItems: todoItems.filter( todo => todo.id !== id )
            })
        )
    };

    onEdit = () => {

    };

    public render(){
        return(
            <div className="todo-wrap">
                <div className="todo">
                    <AddList
                        onSubmit={ this.onSubmit.bind(this) }
                        onChange={ this.onChange.bind(this) }
                    />
                    { !this.state.todoItems[0] ?
                        <h3>no list</h3> :
                        <TodoList
                            todoItems={ this.state.todoItems }
                            onDelete={ this.onDelete.bind(this) }
                        />
                    }
                    <Counter/>
                </div>

            </div>
        )
    }
}

export default Todo;