import {Component} from 'react';

class Background extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: 'white',
      }
    }


  return (
    <div className='one'
      style={{
        backgroundColor: '${this.state.color}'',
      }}
    />
  );
}

export default Background;
