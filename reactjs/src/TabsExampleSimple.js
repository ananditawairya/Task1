import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

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
    <Tab label="Top">
      <div>
      </div>
    </Tab>
    <Tab label="Latest" >
      <div>
      </div>
    </Tab>
    <Tab
      label="People">
      <div>
      </div>
    </Tab>
    <Tab
      label="Photos">
      <div>
      </div>
    </Tab>
    <Tab
      label="Videos">
      <div>
      </div>
    </Tab>
    <Tab
      label="News">
      <div>
      </div>
    </Tab>
    <Tab
      label="Broadcast">
      <div>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
