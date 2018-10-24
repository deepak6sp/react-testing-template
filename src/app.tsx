import * as React from 'react';

interface PropsType {

}

interface StateType {
  data: string
}
 
export default class ReactComponent extends React.Component<PropsType,StateType> {

  constructor(props: any) { 
    super(props);
    this.state = {
      data: "adsad"
    }
  }

  render() {
    return (
      <div className="myClass">
        {this.state.data}
      </div>
    );
  }
}
  

