import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExample from './AppBarExample';
import ToolbarExamplesSimple from './ToolbarExamplesSimple';
import TabsExampleSimple from './TabsExampleSimple';
import CardExampleControlled from './CardExampleControlled';
import ListExampleSimple from './ListExampleSimple'


class App extends Component {
  render() {
    return (
      <div className="App">
     <MuiThemeProvider>
    <ToolbarExamplesSimple/>
<AppBarExample/>
<TabsExampleSimple/>
<table>
  <tr>
      <td><ListExampleSimple/></td>
      <td width="175%"><CardExampleControlled/></td>
    </tr>
      </table>

  </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
