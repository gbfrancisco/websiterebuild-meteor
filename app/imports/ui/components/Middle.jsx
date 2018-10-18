import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <Container fluid>
          <Menu borderless id='tab'>
            <Menu.Item position='right' icon='youtube' as='a'/>
            <Menu.Item icon='twitter' as='a'/>
            <Menu.Item icon='instagram' as='a'/>
            <Menu.Item icon='facebook' as='a'/>
            <Menu.Item icon='twitch' as='a'/>
          </Menu>
        </Container>
    );
  }
}
