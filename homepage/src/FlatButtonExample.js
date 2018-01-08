import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const FlatButtonExample = () => (
  <div>
    <FlatButton label="Sign Up" style={{backgroundColor:"#9575CD",borderRadius:"29%",borderColor:"white"}}
      labelStyle = {{color:"white",fontWeight:"bold"}}/>&nbsp;&nbsp;
        <FlatButton label="Login" style={{backgroundColor:"#9575CD", borderRadius:"29%",borderColor:"white"}}
          labelStyle = {{color:"white",fontWeight:"bold"}}/>

  </div>
);

export default FlatButtonExample;
