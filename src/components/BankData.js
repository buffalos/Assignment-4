import {Component} from 'react';
import axios from 'axios';

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
          console.log("sorry"); //Not Found
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
      return (
        <div className="container">
          <div className="search">
            <h3>Change view:</h3>
            <input type="text" value={this.state.selected} onChange={this.handleInputChange} placeholder="What view?"/>
            <button onClick={this.handleViewChange}>Change</button>
          </div>
          { this.state.bval
          ? <div>
              <h3>{this.state.selected}</h3>
                  {this.debitsView()}
              </div>
          : <div>
              <h3>{this.state.selected}</h3>
                  {this.creditsView()}
              </div>
          }
        </div>
      );
  }
}

export default BankData;
