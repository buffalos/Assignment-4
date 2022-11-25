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
      document.body.style.backgroundColor = this.state.bg;
      document.body.style.color = this.state.txt;
      //console.log(document.body.style.background);
    return (
      <div>
        <Time user={this.state.user} />
        <h3>Customize your profile!</h3>
        <CustomizeDisplay callbackA={this.callbackB} callbackC={this.callbackD} changeUser={this.callbackF}/>
        <BankData />
        </div>
    );
  }
}

export default App;
