import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from 'material-ui-search-bar';

const Homestyle={
  margin:'4px'
}
const Label = {
  fontWeight:'bold',
  color:'black'
}
const Login={
  fontSize:'12px',
  fontFamily:'Arial'
}


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <Toolbar>
        <ToolbarGroup >
            <FlatButton
              label="home"
              hoverColor="cyan"
              style={Homestyle}
              labelStyle = {Label}
              />
              <FlatButton
                label="Moments"
                hoverColor="cyan"
                style={Homestyle}
                labelStyle = {Label}/>

            </ToolbarGroup>
            <ToolbarGroup>
              <SearchBar
                style={{
                  margin: '0 auto',
                  maxWidth: 800,

                }}/>
              <FlatButton
                href="https://twitter.com/login"
                label="Have an account? Login"
                labelStyle = {Login}
                />

          </ToolbarGroup>
      </Toolbar>

    );
  }
}
