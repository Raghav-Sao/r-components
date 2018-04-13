import React from 'react';
import { render } from 'react-dom';
import Alert from '../components/Alert';
import Button from '../components/Button';

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

  onButtonClick = () => {
    this.setState({
      alert: {
        ...this.state.alert,
        show: true,
        text: 'ohh! button clicked',
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
          <Button type="success" onclick={this.onButtonClick}>
            Click me
          </Button>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
