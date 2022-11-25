import {Component} from 'react'

import Time from './components/CurrentTime';
import BankData from './components/BankData';
import CustomizeDisplay from './components/CustomizeDisplay';
//import NameChange from './components/NameChange';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      bg: 'white',
      txt: 'black',
    }
  }

  callbackB = (passedbg) =>{
      this.setState({bg: passedbg});
  }
  callbackD = (passedtxt) =>{
      this.setState({txt: passedtxt});
  }
  callbackF = (passeduser) => {
    const currUser = document.getElementById('user').value;
    console.log(currUser);
    this.setState({user:currUser})
  }
  render() {
      const titlestyle = {
          fontSize: '18px',
          display: "inline-block",
          fontWeight: "bold"
      }
      document.body.style.backgroundColor = this.state.bg;
      document.body.style.color = this.state.txt;
    return (
      <div>
        <Time user={this.state.user} />
        <BankData />
        <span style={titlestyle}>Customize your profile!</span>
        <div className="cf" >
        <CustomizeDisplay callbackA={this.callbackB} callbackC={this.callbackD} changeUser={this.callbackF}/>
            </div>
        </div>
    );
  }
}

export default App;
