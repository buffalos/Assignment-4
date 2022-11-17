import {Component} from 'react'
import axios from 'axios';

class BankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      debits: [],
      credits: [],
    }
  }

  handleInputChange = (event) => {
        this.setState({selected: event.target.value});
    }

  async componentDidMount() {
	  let viewname = this.state.selected;
	  let link = "https://moj-api.herokuapp.com/" + viewname;
	  let response = await axios.get(link);
	  if(viewname === "debits"){
		  let debits = response.data;
	      this.setState({debits: debits});
	  }
	  if(viewname === "credits"){
		  let credits = response.data;
	      this.setState({credits: credits});
	  }

  }

  debitsView = () => {
    const { debits } = this.state;
    return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    })
  }

  creditsView = () => {
    const { credits } = this.state;
    return credits.map((credit) => {
        let date = credit.date.slice(0,10);
        return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    })
  }

  render() {
	<input type="text" value={this.state.viewText} onChange={this.handleInputChange} placeholder="Enter view name"/>
    if(this.state.selected === "debits"){
      return (<div>{this.debitsView()}</div>);
    }
	if(this.state.selected === "credits"){
      return (<div>{this.creditsView()}</div>);
    }
  }
}

export default BankData;
