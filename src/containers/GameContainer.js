import React, { Component } from 'react';
import Cell from '../components/Cell';

class GameContainer extends Component {
    constructor(props){
    super(props)
    console.log(this.props)
    }


    render(){
        return (
            <div>
            <Cell cellData={this.props.cellData.cell1}/>
            <Cell cellData={this.props.cellData.cell2}/>
            <Cell cellData={this.props.cellData.cell3}/>
            <Cell cellData={this.props.cellData.cell4}/>
            <Cell cellData={this.props.cellData.cell5}/>
            <Cell cellData={this.props.cellData.cell6}/>
            <Cell cellData={this.props.cellData.cell7}/>
            <Cell cellData={this.props.cellData.cell8}/>
            <Cell cellData={this.props.cellData.cell9}/>
            </div>
        )
    }

}

export default GameContainer;
