import React, { Component } from 'react';


class Cell extends Component {
    constructor(props){
        super(props)
        this.showBear = this.showBear.bind(this)
        
    }

    showBear(){
        
        this.props.cellHandClick(this.props.id)
    }

render(){
    if (this.props.cellData === 'X') {
        return (<div className="cell"><img src='../../images/Bear.png'/></div>)
    } else if (this.props.cellData === 'O'){
        return (<div className="cell"><img src='../../images/Fish.png'/></div>)
    } else {
        return (<div onClick={this.showBear} className ="cell"></div>)
    }   
    }
}

export default Cell;