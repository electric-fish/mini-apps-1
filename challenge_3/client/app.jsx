import React from 'react';

import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,

      //F1: name, email, and password
      name: '',
      email: '',
      //F2: address line, (addess line 2,) city, state, zip code, phone number
      addressline: '',
      city: '',
      state: '',
      zipcode: '',
      //F3: credit card #, expiry date, (CVV,) billing zip code
      creditcard: '',
    };

    this.homeHandler = this.homeHandler.bind(this);
    this.F1Handler = this.F1Handler.bind(this);
    this.F2Handler = this.F2Handler.bind(this);
    this.F3Handler = this.F3Handler.bind(this);
    this.lastHandler = this.lastHandler.bind(this);
  }

  componentDidMount() {
  }

  homeHandler() {
    this.setState({
      currentPage: 1,
    });
  }

  F1Handler(F1Data) {
    this.setState({
      currentPage: 2,
      name: document.getElementById("textarea-name").value,
      email: document.getElementById("textarea-email").value
    });
  }

  F2Handler(F2Data) {
    this.setState({
      currentPage: 3,
      addressline: document.getElementById("textarea-addressline").value,
      city: document.getElementById("textarea-city").value,
      state: document.getElementById("textarea-state").value,
      zipcode: document.getElementById("textarea-zipcode").value,
    });
  }

  F3Handler(F3Data) {
    this.setState({
      currentPage: 4,
      creditcard: document.getElementById("textarea-creditcard").value,
    });
  }

  lastHandler(){
    console.log(this.state);
    this.setState({
      currentPage: 0,
    });
    
  fetch ('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(this.state),
  })
  .then ( (response) => {
    console.log("Still totally trustworthy.");
  });
  }

  render() {
    if(this.state.currentPage === 0) {
      return (
      <div>
        <button className="buttonCheckout" onClick={this.homeHandler}>Mystery Checkout Button</button>
      </div>
      );
    } else if(this.state.currentPage === 1) {
      return (
      <div>
        <Form1 F1Handler={this.F1Handler} />
      </div>
      );
    } else if(this.state.currentPage === 2) {
      return (
      <div>
        <Form2 F2Handler={this.F2Handler} />
      </div>
      );
    } else if(this.state.currentPage === 3) {
      return (
      <div>
        <Form3 F3Handler={this.F3Handler} />
      </div>
      );
    } else if(this.state.currentPage === 4) {
      return (
      <div>
        <div>This is totally safe.</div><p />
        <button className="buttonNext" onClick={this.lastHandler}>Unsuspicious Last Button</button>
      </div>
      );
    }


  }
}

export default App;