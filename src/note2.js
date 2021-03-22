// JS classes : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
// Js youtube : https://www.youtube.com/watch?v=_DLhUBWsRtw
class App extends React.Component{
  state = {
    count: 0
  }; // state = object
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  } // no setState : no call render
  render (){ // render method
    return <div>
            <h1> The number is {this.state.count} </h1>
            <button onClick={this.add}>Add</button> {/* auto onClick, this.add() = immediately, this.add = click*/}
            <button onClick={this.minus}>Minus</button>
           </div>
  };
}

export default App;
