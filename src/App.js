import {Component} from 'react'

import Time from './components/CurrentTime';
import BankData from './components/BankData';
import CustomizeDisplay from './components/CustomizeDisplay';
import NameChange from './components/NameChange';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      bg: 'white',
    }
  }

  callbackB = (passedbg) =>{
      this.setState({bg: passedbg});
  }

  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
  }
  render() {
      document.body.style.backgroundColor = this.state.bg;
      //console.log(document.body.style.background);
    return (
      <div>
        <CustomizeDisplay callbackA={this.callbackB}/>
        <Time user={this.state.user} />
        <h3>Customize your profile!</h3>
        <NameChange changeUser={this.changeUser} />
        <BankData />
        </div>
    );
  }
}

export default App;
