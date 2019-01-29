import * as React from 'react';


interface IProps{
    onChange(e: React.FormEvent<HTMLInputElement>): void;
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

class AddList extends React.Component<IProps> {
    constructor(props: IProps){
        super(props)

    }

    public render(){
        return(
            <div className="add-list">
                <form onSubmit={this.props.onSubmit} action="">
                    <div className="create-task">
                        <input ref="creteValue" type="text" onChange={this.props.onChange}/>
                        <button className="create-task-btn">add list</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddList;