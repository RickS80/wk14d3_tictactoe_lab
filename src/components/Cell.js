import React, { Component } from 'react';


class Cell extends Component {
    constructor(props){
        super(props)
    }

render(){
    return (
        <h3>This cell is a {this.props.cellData}</h3>
    )
}



}


export default Cell;