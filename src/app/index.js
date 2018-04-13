import React from 'react';
import { render } from 'react-dom';
import Alert from '../components/Alert';

class App extends React.Component {
  state = {
    alert: {
      show: true,
      text: 'Alert is Coooolllllllll',
    },
  };
  dismissAlert = () => {
    this.setState({
      alert: {
        ...this.state.alert,
        show: false,
      },
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Alert type="success" show={this.state.alert.show} toggle={this.dismissAlert}>
            {this.state.alert.text}
          </Alert>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
