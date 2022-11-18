import {Component} from 'react';
import Background from './Background.js'

class CustomizeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
       backgroundColor: 'white',
       color: 'black'
    },
      display: false,
    }
  }

  handleDisplayClick = (event) => {
      if(this.state.display === true){
          this.setState({display: false});
      }
      if(this.state.display === false){
          this.setState({display: true});
      }
  }

  BG_handleInputChange = (event) => {
      this.setState({styles:{backgroundColor: event.target.value}});
    }


  BG_getInput = () => {
    return (
        <div>
        <input type="text" value={this.state.styles.backgroundColor} onChange={this.BG_handleInputChange} placeholder="What color?"/>
            <button onClick={this.BG_handleChange}>Change</button>
        </div>
    );
  }

  BG_handleChange = () => {
      let passedbg = this.state.styles.backgroundColor;
      this.props.callbackA(passedbg);
      console.log(passedbg);
}

  render() {
      return (
         <div>
          { this.state.display
          ? <div>
              <h6>Change Background Color</h6>
                  {this.BG_getInput()}
              <h6>Change Text Color</h6>
            <button onClick={this.handleDisplayClick}>Done</button>
              </div>
          : <div>
              <h4>Customize?</h4>
              <button onClick={this.handleDisplayClick}>Change</button>
          </div>
          }
         </div>
      );
  }
}

export default CustomizeDisplay
