import React, { Component } from 'react';
import Cell from '../components/Cell';
import './GameContainer.css'


class GameContainer extends Component {
    constructor(props){
    super(props)
    console.log(this.props)
    }


    render(){
        return (
            <div className="gridContainer">
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell1} id='cell1'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell2} id='cell2'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell3} id='cell3'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell4} id='cell4'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell5} id='cell5'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell6} id='cell6'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell7} id='cell7'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell8} id='cell8'/>
            <Cell cellHandClick={this.props.handClick} cellData={this.props.cellData.cell9} id='cell9'/>
            </div>
        )
    }

}

export default GameContainer;
