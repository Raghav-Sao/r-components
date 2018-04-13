import React from 'react';
import { render } from 'react-dom';
import Alert from '../components/Alert';

class App extends React.Component {
  state = {
    show: true,
  };
  dismissAlert = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Alert type="success" show={this.state.show} toggle={this.dismissAlert}>
            My alert
          </Alert>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
