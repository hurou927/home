import React from 'react'


export class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {textAreaValue:''}
  }

  onChangeText(e) {
    this.setState({textAreaValue: e.target.value});
  }

  render () {
    return (
        <div>
              <h1> Hello, World!</h1>
              <textarea 
                value={this.state.textAreaValue} 
                onChange={this.onChangeText.bind( this )}
              />
              <div>{this.state.textAreaValue}</div>
        </div>
    );
  }
}