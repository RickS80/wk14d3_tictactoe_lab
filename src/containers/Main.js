import React, { Component, Fragment } from 'react';
import GameContainer from './GameContainer';


class Main extends Component{
constructor(props){
    super(props);
    this.state = {
        gameObject: {
            cell1: "O", 
            cell2: "",
            cell3: "X", 
            cell4: "", 
            cell5: "X", 
            cell6: "", 
            cell7: "", 
            cell8: "O", 
            cell9: ""}
    }
}

render(){
return(
    <Fragment>
        <h1>Main Container</h1>
        <GameContainer cellData={this.state.gameObject}/>
    </Fragment>
)
}





}


export default Main