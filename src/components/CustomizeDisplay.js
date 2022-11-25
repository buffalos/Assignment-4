import {Component} from 'react';
//import Background from './Background.js'

class CustomizeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
       backgroundColor: 'white',
       color: 'black',
       user: 'Guest'
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

  TXT_handleInputChange = (event) => {
      this.setState({styles:{color: event.target.value}});
    }
    U_handleInputChange = (event) => {
        this.setState({user: event.target.value});
      }

  BG_getInput = () => {
    return (
        <div>
        <input type="text" value={this.state.styles.backgroundColor} onChange={this.BG_handleInputChange} placeholder="Enter a color?"/>
            <button onClick={this.BG_handleChange}>Change</button>
        </div>
    );
  }

  TXT_getInput = () => {
    return (
        <div>
        <input type="text" value={this.state.styles.color} onChange={this.TXT_handleInputChange} placeholder="Enter a color"/>
            <button onClick={this.TXT_handleChange}>Change</button>
        </div>
    );
  }
  U_getInput = () => {
    return (
        <div>
        <input type="text" id="user" value={this.state.user} onChange={this.U_handleInputChange} placeholder="Enter a color?"/>
            <button onClick={this.U_handleChange}>Change</button>
        </div>
    );
  }
  BG_handleChange = () => {
      let passedbg = this.state.styles.backgroundColor;
      this.props.callbackA(passedbg);
      console.log(passedbg);
  }

  TXT_handleChange = () => {
        let passedtxt = this.state.styles.color;
        this.props.callbackC(passedtxt);
        console.log(passedtxt);
    }
    U_handleChange = () => {
        let passeduser = this.state.user;
        this.props.changeUser(passeduser);
        console.log(passeduser);
    }
  render() {
      return (
         <div>
          { this.state.display
          ? <div>
              <h6>Background Color</h6>
                  {this.BG_getInput()}
              <h6>Text Color</h6>
                {this.TXT_getInput()}
                <h6>User changer</h6>
                  {this.U_getInput()}
            <button onClick={this.handleDisplayClick}>Done</button>
              </div>
          : <div>
              <h4>Customize?</h4>
              <button onClick={this.handleDisplayClick}>Customize</button>
          </div>
          }
         </div>
      );
  }
}

export default CustomizeDisplay
