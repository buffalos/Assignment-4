import {Component} from 'react';
import Background from './Background.js'

class CustomizeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      bg: 'white',
      text: 'black',
    }
  }

  handleDisplayClick = (event) => {
      if(this.state.display === 'true'){
          this.setState({display: 'false'});
      }
      if(this.state.display === 'false'){
          this.setState({display: 'true'});
      }
  }

  handleBGInputChange = (event) => {
      this.setState({bg: event.target.value});
    }


  getBGInput = () => {
    return (
        <div>
        <input type="text" value={this.state.bg} onChange={this.handleBGInputChange} placeholder="What color?"/>
            <button onClick={this.handleBGChange}>Change</button>
        </div>
    );
  }

  handleBGChange = () => {
      const { bg } = this.state;
      return (
          <div style={{
          backgroundColor: '${bg}',
        }}/>
      );
    }

  displayForm = () => {
      return (
          { this.state.display
          ? <div>
              <h4>Change Background Color</h4>
                  {this.getBGInput()}
              <h4>Change Text Color</h4>
                 // {this.changeText()}
            <button onClick={this.handleDisplayClick}>Done</button>
              </div>
          : <div>
              <h4>Customize?</h4>
              <button onClick={this.handleDisplayClick}>Change</button>
          </div>
          }
      );
  }
}
