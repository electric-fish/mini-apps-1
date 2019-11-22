import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.sendStuff = this.sendStuff.bind(this);
  }

  sendStuff() {
    console.log('poke');

    fetch('http://localhost:3000/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'text/plain',
      },
      body: 'long distance poke.',
    });
  }
  
  render() {
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
         </tbody>
        </table>
        <div>
            <button onClick={this.sendStuff}>Boom</button>
        </div>
      </div>
    );
  }
}

export default App;