import React from 'react';
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';

export default class Top extends React.Component {
  render() {
    return (
        <Menu inverted borderless>
          <Container>
            <Menu.Item><Image style={{ height: '65px' }}
                              src='https://static1.squarespace.com/static/5ae0f2cbe2ccd119c3eccd8e/t/5af37dcf758d466a3476257f/1538497217606/?format=1500w'/></Menu.Item>
            <Menu.Item position='right' as='a'>NEWS</Menu.Item>
            <Dropdown item text="TEAMS" icon='null'>
              <Dropdown.Menu>
                <Dropdown.Item>LEAGUE OF LEGENDS</Dropdown.Item>
                <Dropdown.Item>FORTNITE</Dropdown.Item>
                <Dropdown.Item>CS:GO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a'>STORE</Menu.Item>
            <Menu.Item as='a'>PARTNERS</Menu.Item>
            <Dropdown item text="ABOUT" icon='null'>
              <Dropdown.Menu>
                <Dropdown.Item>WHO WE ARE</Dropdown.Item>
                <Dropdown.Item>STAFF</Dropdown.Item>
                <Dropdown.Item>CONTACT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}
