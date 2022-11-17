import {Component} from 'react'

import Time from './components/CurrentTime';
import BankData from './components/BankData'

import NameChange from './components/NameChange'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
    }
  }
  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
  }
  render() {
    return (
      <div>
        <Clock user={this.state.user} />
        <h3>Customize your profile!</h3>
        <NameChange changeUser={this.changeUser} />
        <BankData />
      </div>
    );
  }

}

export default App;
