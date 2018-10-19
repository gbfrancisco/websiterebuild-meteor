import React from 'react';
import { Grid, Item, Image, Icon, Input, Label } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
        <div id='footer-background'>
          <Grid centered columns={4}>
            <Grid.Row>
              <Item as='a' href='#Link'>
                <Icon bordered inverted size='big' name='youtube'/>
              </Item>
              <Item as='a' href='#Link'>
                <Icon bordered inverted size='big' name='twitter'/>
              </Item>
              <Item as='a' href='#Link'>
                <Icon bordered inverted size='big' name='instagram'/>
              </Item>
              <Item as='a' href='#Link'>
                <Icon bordered inverted size='big' name='facebook'/>
              </Item>
              <Item as='a' href='#Link'>
                <Icon bordered inverted size='big' name='twitch'/>
              </Item>
            </Grid.Row>
            <Grid.Row>
              <Item as='a'>
                <Image size='small' src='/images/twitch.png'/>
              </Item>
              <Item as='a'>
                <Image size='small' src='/images/corsair.png'/>
              </Item>
              <Item as='a'>
                <Image size='small' src='/images/spectrum.png'/>
              </Item>
              <Item as='a'>
                <Image size='small' src='/images/squarespace.png'/>
              </Item>
            </Grid.Row>
            <Grid.Row id='footer-text'>
              <Item as='a' content='ABOUT' href='#Link'/>
              <Item as='a' content='PRIVACY POLICY' href='#Link'/>
              <Item as='a' content='COOKIE POLICY' href='#Link'/>
              <Item as='a' content='TERMS OF USE' href='#Link'/>
              <Item as='a' content='CONTACT' href='#Link'/>
            </Grid.Row>
            <Grid.Row id='footer-text2'>
              <Item as='a' content='Subscribe' href='#Link'/>
            </Grid.Row>
            <Grid.Row>
              <Input label={<Label color='blue'>
                Sign Up
              </Label>} labelPosition='right' placeholder='Email Address' size='massive'/>
            </Grid.Row>
            <Grid.Row id='footer-text3'>
              <Item as='a'>
                Powered by <a href='#Link' id='squarespace'> Squarespace</a>
              </Item>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
