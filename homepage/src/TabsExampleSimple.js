import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import PopoverC from './PopoverC'
import './App.css'



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,

  },
};

const TabsExampleSimple = () => (
  <Tabs >

    <Tab label="Search">
  </Tab>
    <Tab label="Featured">
      <div>
      </div>
    </Tab>
    <Tab label="Sports" >
      <div>
      </div>
    </Tab>
    <Tab
      label="Music">
      <div>
      </div>
    </Tab>
    <Tab
      label="Entertainment">
      <div>
      </div>
    </Tab>
    <Tab
      label="News">
      <div>
      </div>
    </Tab>
    <Tab
      label="Lifestyle">
      <div>
      </div>
    </Tab>
      <div >
        <PopoverC/>
      </div>
  </Tabs>
);

export default TabsExampleSimple;
