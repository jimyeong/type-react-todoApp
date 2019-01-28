import * as React from 'react';


interface IProps{
    onChange(): void;
    onSubmit(): void;
}
interface IState{

}

class AddList extends React.Component< IProps, IState >{
    constructor(props: IProps){
        super(props)

    }

    public render(){
        return(
            <div className="add-list">
                <form onSubmit={this.props.onSubmit} action="">
                    <input type="text" onChange={this.props.onChange}/>
                    <button>add list</button>
                </form>
            </div>
        )
    }
}


export default AddList;