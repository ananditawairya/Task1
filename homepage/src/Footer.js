import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './App.css';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
     <div>
      <Toolbar>
        <ToolbarGroup >
            <a className="labels" href="https://about.twitter.com/">About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://help.twitter.com/">Help Center</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://blog.twitter.com/">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://status.twitterstat.us/">Status</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://careers.twitter.com/">Jobs</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://twitter.com/en/tos">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="labels"href="https://twitter.com/en/privacy">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html">Ads Info</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://about.twitter.com/en_us/company/brand-resources.html">Brand</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://about.twitter.com/">Apps</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise">Advertise</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://marketing.twitter.com/na/en.html">Marketing</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://business.twitter.com/">Business</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://developer.twitter.com/">Developers</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://twitter.com/i/directory/profiles">Directory</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="labels"href="https://twitter.com/settings/personalization">Settings</a>
              </ToolbarGroup>
            </Toolbar>
            <div className="move">
                <p className="labels" >&copy; 2018 Twitter</p>
              </div>

              </div>

    );
  }
}
