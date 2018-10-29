import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const guidedScroll = section => {
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => guidedScroll('featured')}>
          Event Countdown
        </ListItem>
        <ListItem button onClick={() => guidedScroll('info')}>
          Venue INFO
        </ListItem>
        <ListItem button onClick={() => guidedScroll('highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => guidedScroll('pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => guidedScroll('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
