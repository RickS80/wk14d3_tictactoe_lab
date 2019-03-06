import React, { Component } from 'react';


class Cell extends Component {
    constructor(props){
        super(props)
    }

render(){
    if (this.props.cellData === 'X') {
        return (<div className="cell"><img src='../../images/Bear.png'/></div>)
    } else if (this.props.cellData === 'O'){
        return (<div className="cell"><img src='../../images/Fish.png'/></div>)
    } else {
        return (<div className ="cell"></div>)
    }   
    }
}

export default Cell;