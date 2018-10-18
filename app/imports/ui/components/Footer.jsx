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
                <Image size='small'
                       src='https://static1.squarespace.com/static/5ae0f2cbe2ccd119c3eccd8e/5aea219c0e2e72be49d0e432/5aea21ad70a6addb4c996dd9/1528407340140/twitch_l.png?format=300w'/>
              </Item>
              <Item as='a'>
                <Image size='small'
                       src='https://static1.squarespace.com/static/5ae0f2cbe2ccd119c3eccd8e/5aea219c0e2e72be49d0e432/5aea237388251b0448f22019/1532632640550/corsair_l.png?format=300w'/>
              </Item>
              <Item as='a'>
                <Image size='small'
                       src='https://static1.squarespace.com/static/5ae0f2cbe2ccd119c3eccd8e/5aea219c0e2e72be49d0e432/5b106f291ae6cfec74fe984f/1532632615180/Spectrum_Logo_White_V1'/>
              </Item>
              <Item as='a'>
                <Image size='small'
                       src='https://static1.squarespace.com/static/5ae0f2cbe2ccd119c3eccd8e/5aea219c0e2e72be49d0e432/5b10712f8a922d4107363db8/1532632625458/SQSP_Logo_White_V1.png?format=300w'/>
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
