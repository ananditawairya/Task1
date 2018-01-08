import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabsExampleSimple from './TabsExampleSimple'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExampleWithAvatar1 from './CardExampleWithAvatar1'
import CardExampleWithAvatar2 from './CardExampleWithAvatar2'
import CardExampleWithAvatar3 from './CardExampleWithAvatar3'
import FlatButtonExample from './FlatButtonExample'
import Footer from './Footer'


class App extends Component {
  render() {
    return (

      <div className="App">
        <MuiThemeProvider>
     <img src="Capture.png"></img>
      <div className="root">
      <FlatButtonExample/>
      </div>
    <TabsExampleSimple/>
    <table>
      <tr>
        <td height="10%" width="10%">
          <CardExampleWithAvatar1/>
        </td>
      </tr>
      <tr>
        <td height="10%" width="10%">
          <CardExampleWithAvatar2/>
        </td>
      </tr>
      <tr>
        <td height="10%" width="10%">
          <CardExampleWithAvatar3/>
        </td>
      </tr>
    </table>
    <Footer/>
  </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
