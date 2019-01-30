import * as React from 'react';
import {string} from "prop-types";

interface ItemProps{
    id: number;
    text: string;
    done: boolean;
    onDelete( id:number ): void;
    changeChildData( prev:number, created: string ): void;
}
interface ItemState{
    onEdit: boolean;
}

class TodoItem extends React.Component<ItemProps, ItemState> {

    private myRef = React.createRef<HTMLInputElement>();

    constructor( props: ItemProps ){
        super(props);
        this.state = {
            onEdit: false
        };
    }

    changeEditState = (): void => {
        this.setState({onEdit:!this.state.onEdit})
    };

    changeItem = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        /*cdm cdwumount 전에 할당*/

        const prevId: number = this.props.id;
        //const prevText: string = this.props.text;
        const createdValue: string = this.myRef.current!.value;
        this.props.changeChildData(prevId, createdValue);

        this.setState({
            onEdit: !this.state.onEdit
        })

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
                    <form action="" onSubmit={this.changeItem.bind(this)}>
                        <input type="text" ref={this.myRef}/>
                        <div className="todo__btns">
                            <button
                                onClick={e => this.changeItem.bind(this)}
                                className="todo__btn delete-btn">ok</button>
                            <button
                                onClick={(e) => this.changeEditState.bind(this)}
                                className="todo__btn delete-edit">cancel</button>
                        </div>
                    </form>
                </div>
            )
        }
    };


    public render(){
        return(
            <li className="todo-item">
                {this.renderEdit()}
            </li>
        )
    }
}


export default TodoItem;