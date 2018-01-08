import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const ListExampleSimple = () => (
<div>
<b>World Wide Trends</b>
    <List>
      <ListItem primaryText="France Gall" />
      <ListItem primaryText="#مشاري_العراده_في_ذمه_الله" />
      <ListItem primaryText="#OTDirecto7E"  />
      <ListItem primaryText="#FelizDomingo"  />
      <ListItem primaryText="経済評論家の三橋貴明容疑者"  />
    </List>
  </div>

);

export default ListExampleSimple;
