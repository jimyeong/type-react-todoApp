import * as React from 'react';
import AddList from './todoItems/AddList';
import Counter from './todoItems/Counter';

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
        )
    };

    onChange = (e: React.FormEvent<HTMLInputElement>):void => {
        const { value } = e.currentTarget;
        console.log(value);
        this.setState({
            input: value
        });
    };

    public render(){
        console.log(this.state);
        return(
            <div className="Todo">
                <AddList
                    onSubmit={this.onSubmit.bind(this)}
                    onChange={this.onChange.bind(this)}
                />



                <Counter/>
            </div>
        )
    }
}

export default Todo;