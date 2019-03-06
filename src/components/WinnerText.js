import React from 'react'

const WinnerText = ({winner, player}) => {
    let actualWinner = null
    if (player === 1){
         actualWinner = 2
    } else {
        actualWinner = 1
    }
    
    if (winner === true){
        return(<h1>Player {actualWinner} won</h1>)
    } else {
        return <div></div>
    }
}

export default WinnerText;
