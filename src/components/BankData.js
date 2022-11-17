import {Component} from 'react'
import axios from 'axios';
import DCForm from './DCForm';

class BankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      debits: [],
      credits: [],
      bval: false,
    }
  }

  handleInputChange = (event) => {
      this.setState({selected: event.target.value});
    }

  handleViewChange = async () => {
	  let viewname = this.state.selected;
	  let link = "https://moj-api.herokuapp.com/" + viewname;
      try {
          let response = await axios.get(link);
          if(viewname === "debits"){
    		  let debits = response.data;
              this.setState({bval: true});
    	      this.setState({debits: debits});
    	  }
    	  if(viewname === "credits"){
    		  let credits = response.data;
              this.setState({bval: false});
    	      this.setState({credits: credits});
    	  }
      } catch (e) {
          if (error.response) {
            console.log(error.response.data); //Not Found
            console.log(error.response.status); //404
        }
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
      <div className="container">
        <div className="search">
            <h3>change view:</h3>
            <input type="text" value={this.state.selected} onChange={this.handleInputChange} placeholder="Enter view:"/>
              <button onClick={this.handleViewChange}>Change</button>
        </div>
        { this.state.bval
            ? <div>
                return (<div>{this.debitsView()}</div>);
                </div>
            : <div>
                return (<div>{this.creditsView()}</div>);
                </div>
            }
      </div>
}

export default BankData;
