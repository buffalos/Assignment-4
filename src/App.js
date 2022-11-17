import logo from './logo.svg';
import './App.css';
import './components/CurrentTime.js';

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
    this.setState({user: currUser})
  }
  render() {
    return (
      <div>
        <Time user={this.state.user} />
        <h3></h3>
        <NameChange changeUser={this.changeUser} />
        <Credits />
        <Debits />
      </div>
    );
  }

}

export default App;
