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
    this.winCheck = this.winCheck.bind(this);
}

winCheck({cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9}){
    if ((cell1 === cell2 && cell2 === cell3) && cell1 !== ''){
        console.log('winner')
    }
    else if ((cell4 === cell5 && cell5 === cell6) && cell4 !== ''){
        console.log('winner')
    }
    else if ((cell7 === cell8 && cell8 === cell9) && cell7 !== ''){
        console.log('winner')
    }
    else if ((cell1 === cell4 && cell4 === cell7) && cell7 !== ''){
        console.log('winner')
    }
    else if ((cell2 === cell5 && cell5 === cell8) && cell2 !== ''){
        console.log('winner')
    }
    else if ((cell3 === cell6 && cell6 === cell9) && cell3 !== ''){
        console.log('winner')
    }
    else if ((cell1 === cell5 && cell5 === cell9) && cell1 !== ''){
        console.log('winner')
    }
    else if ((cell3 === cell5 && cell5 === cell7) && cell3 !== ''){
        console.log('winner')
    }
}

componentDidUpdate(){
    this.winCheck(this.state.gameObject)
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