import React, { Component, Fragment } from 'react';
import GameContainer from './GameContainer';


class Main extends Component{
constructor(props){
    super(props);
    this.state = {
        gameObject: {
            cell1: "O", 
            cell2: "O",
            cell3: "O", 
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
        <h1>Blub, Growl, Yum</h1>
        <GameContainer cellData={this.state.gameObject}/>
    </Fragment>
)
}





}


export default Main