import * as React from 'react';

interface IProps{
    id: number;
    text: string;
    done: boolean;
    onDelete(): void;
}

class TodoItem extends React.Component< IProps >{

    constructor( props: IProps ){
        super(props)
    }

    public render(){
        return(
            <li className="todo-item">
                <div className="todo__inner">
                    <p>{this.props.text}</p>
                    <div className="todo__btns">
                        <button
                            onClick={this.props.onDelete.bind(this,this.props.id)}
                            className="todo__btn delete-btn">delete</button>
                        <button className="todo__btn delete-edit">edit</button>
                    </div>
                </div>
            </li>
        )
    }
}


export default TodoItem;