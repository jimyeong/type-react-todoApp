import * as React from 'react';
import Todo from './assets/components/Todo';

class App extends React.Component{

    public render(){
        return(
            <div className="test">
                hello
                <Todo
                    name="jimyeong"
                    job="dev"
                />

            </div>
        )
    }
}


export default App;
