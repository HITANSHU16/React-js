import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

class Square extends React.Component{
render(){
return(
<button className = "square">
Hit
</button>	
);
}
}
class Board extends React.Component{
renderSquare(i){
return <Square />
}
render() {
return (
<div>
<div className="board-row">
{this.renderSquare(0)}
{this.renderSquare(1)}
{this.renderSquare(2)}
</div>
</div>
);a
}
}
class Game extends React.Component{
render(){
return(
<div className="game">
<div className="game-board">
<Board />
</div>
</div>
);
}
}
ReactDOM.render(
<Game />,
document.getElementById('root')
);
registerServiceWorker();
