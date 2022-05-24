import './app.scss';
import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import BasicTable from './components/Table/BasicTable';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <div style={{ height: '48px' }} />
        <BasicTable />
        <Content>
          <Button>Button</Button>
        </Content>
      </div>
    );
  }
}

export default App;
