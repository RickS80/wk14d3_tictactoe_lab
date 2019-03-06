import React, { Component, Fragment } from 'react';
import GameContainer from './GameContainer';


class Main extends Component{
constructor(props){
    super(props);
    this.state = {
        gameObject: {
            cell1: "", 
            cell2: "",
            cell3: "", 
            cell4: "", 
            cell5: "", 
            cell6: "", 
            cell7: "", 
            cell8: "", 
            cell9: ""},
            player : 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
}

handleClick(cellID){

    if(this.state.player === 1) {
        this.setState(prevState => {
            const newState = prevState
            newState.gameObject[cellID] = "X"
            newState.player = 2
            return newState;
        })  
    } else {
        this.setState(prevState => {
            const newState = prevState
            newState.gameObject[cellID] = "O"
            newState.player = 1
            return newState;
        })  
    }

    
}

clearBoard(){

    this.setState(
        {
            gameObject: {
                cell1: "", 
                cell2: "",
                cell3: "", 
                cell4: "", 
                cell5: "", 
                cell6: "", 
                cell7: "", 
                cell8: "", 
                cell9: ""},
                player : 1
        }

    )

}

render(){
    
return(
    <Fragment>
        <h1>Blub, Growl, Yum</h1>
        <h2>Player {this.state.player}'s turn</h2>
        <GameContainer cellData={this.state.gameObject} handClick={this.handleClick}/>
        <button onClick={this.clearBoard}>Clear</button>
    </Fragment>
)
}





}


export default Main