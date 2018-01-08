import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';


export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <div>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Tom Cruise"
          subtitle="@tomcruiseisold"
          avatar="https://www.hellomagazine.com/imagenes/celebrities/2017081441539/tom-cruise-mission-impossible-6-stunt-injury/0-215-289/tom-cruise-a.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
        I have applied for my adhar! you all should also do the same
       </CardText>
        <CardActions>
        </CardActions>
      </Card>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Punit Khaire"
          subtitle="@khaire_punit"
          avatar="https://media-exp1.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAArXAAAAJDcxOWRiODYxLTQ5NWItNGUwOC05Y2M0LTUwNjFhYTczZjZmNA.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
        Which fake account..do u want to see my adhar card..hadd hogayi yaar ab to kuch nahi to fake I'd😂😂😂..btw fake se yaad Aya..your Id is genuine na?
       </CardText>
        <CardActions>
        </CardActions>
      </Card>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Sanjiv Bhatt (IPS)"
          subtitle="@sanjivbhatt"
          avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAhzAAAAJDQ2Nzk5NTBmLTQ4ZDEtNDk1ZS04ZDg2LTBiYTNhOGNjYTU3ZA.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
        Make No Mistake. Aadhaar can be a Kill-Switch in the hands of a devious government machinery. Oppose it while you still can.
       </CardText>
        <CardActions>
        </CardActions>
      </Card>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Gargi Rawat"
          subtitle="@GargiRawat"
          avatar="https://probollywood.files.wordpress.com/2009/05/nikita-rawal-005.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
      <CardText expandable={true}>
        UIDAI Files Case In Aadhaar-Data-For-Rs 500 Report, Journalist Named.. The Editor's Guild of India has condemned the police case against the journalist #shootthemessenger
 https://www.ndtv.com/india-news/uidai-files-case-for-aadhaar-data-for-rs-500-report-journalist-named-1796899 … via @ndtv
       </CardText>
        <CardActions>
        </CardActions>
      </Card>
    </div>
    );
  }
}
