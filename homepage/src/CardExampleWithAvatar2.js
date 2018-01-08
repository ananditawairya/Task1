import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar2 = () => (
  <table>
    <tr>
      <td height="20%" width="20%">
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="pic2.jpg"
    />
    <CardMedia>
      <img src="pic2.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
  </td>
    <td height="20%" width="20%">
    <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="pic2.jpg"
      />
      <CardMedia>
        <img src="pic2.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      </Card>
    </td>
    <td height="20%" width="20%">
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="pic2.jpg"
        />
        <CardMedia>
          <img src="pic2.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        </Card>
      </td>
    </tr>
  </table>
);

export default CardExampleWithAvatar2;
