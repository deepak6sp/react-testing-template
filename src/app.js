import React, { Component } from 'react';
 
export default class ReactComponent extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      data:  '' 
    }
  }
  
  componentDidMount() {
      this.setState({ data: "some data" })
  }
  render() {
    return <div className="myClass">
      {this.state.data}
    </div>
  }
}
  

