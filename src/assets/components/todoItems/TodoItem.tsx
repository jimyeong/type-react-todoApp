import * as React from 'react';

interface ItemProps{
    id: number;
    text: string;
    done: boolean;
    onDelete( id:number ): void;
}
interface ItemState{
    onEdit: boolean;
}

class TodoItem extends React.Component<ItemProps, ItemState> {

    constructor( props: ItemProps ){
        super(props);
        this.state = {
            onEdit: false
        }
    }

    changeEditState = (): void => {
        this.setState({onEdit:true})
    };

    renderEdit = (): JSX.Element => {
        if(this.state.onEdit === false){
            return (
                <div className="todo__inner">
                    <p className="todo__txt">{this.props.text}</p>
                    <div className="todo__btns">
                        <button
                            onClick={this.props.onDelete.bind(this,this.props.id)}
                            className="todo__btn delete-btn">delete</button>
                        <button
                            onClick={() => this.changeEditState()}
                            className="todo__btn delete-edit">edit</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="todo__inner">
                    <input type="text"/>
                    <div className="todo__btns">
                        <button className="todo__btn delete-btn">ok</button>
                        <button className="todo__btn delete-edit">cancel</button>
                    </div>
                </div>
            )
        }
    };


    public render(){
        console.log(this.state.onEdit);
        return(
            <li className="todo-item">
                {this.renderEdit()}
            </li>
        )
    }
}


export default TodoItem;