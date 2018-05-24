import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,Input,activeItem
} from 'semantic-ui-react'

import ManinContent from './MainContent'
 //require ('../styling/customStyle.less')

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  
}

const fixedMenuStyle = {
  backgroundColor: '#3f51b5',
  border: '1px solid #3f51b5',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
   
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const fontStyleWhite = {
  color : 'white '
}


const fontStyleBlack = {
  color : 'Black '
}

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/assets/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/assets/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)

const Paragraph = () => (
  <p>
    {[
      'We develop youth leadership by facilitating social development and professional internships. ',
      'We proudly count a Nobel Peace Prize laureate and numerous world, business and NGO leaders amongst our one million strong alumni community. ',
      ' To date, we have delivered over 480,000 internship and volunteering experiences',
      'Are you a student looking for a volunteer internship for this semester break?',
      'Are you a young, proactive undergrad who has skills in IT, design, management etc, looking to develop more in a short term internship?',
      'Are you a recent graduate with experience in a particular field, looking to intern abroad?',
      'If you are one of the above, sign up today and start surfing through thousands of opportunities available in more than 25+ countries for Indians.'
    ].join('')}
  </p>
)

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state
   
    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>AIESEC </Header>
          <p>AIESEC is the world’s largest youth-run organization</p>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
      


          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text >
              <Menu.Item>
                <Image size='small' src='https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg' />
              </Menu.Item>
              <Menu.Item  header style={menuFixed ? fontStyleWhite : fontStyleBlack} >
                For organizations</Menu.Item>
              <Menu.Item  as='a'  style={menuFixed ? fontStyleWhite : fontStyleBlack} >Help</Menu.Item>
              <Menu.Item  as='a'  style={menuFixed ? fontStyleWhite : fontStyleBlack}>Explore</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Account' pointing className='link item' style={menuFixed ? fontStyleWhite : fontStyleBlack}>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          {/* { _.times(3, i => <Paragraph key={i} />) } */}

          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />
          
          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}
          >
            
         
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
           
              <Menu.Item>
                <Icon name='twitter' />
               Twitter
              </Menu.Item>

              <Menu.Item >
                <Icon name='facebook' />
               Share
              </Menu.Item>

              <Menu.Item>
                <Icon name='mail' />
               Email
              </Menu.Item>
            </Menu>
          </div>
          <p>AIESEC is the world’s largest youth-run organization</p>
          {/* { _.times(3, i => <Paragraph key={i} />) } */}
         

           { _.times(1, i => <Paragraph key={i} />) } 
           <Segment raised>
           { _.times(1, i => <Paragraph key={i} />) } 
  
           </Segment>

          {/* { _.times(2, i => <Paragraph key={i} />) } */}


          <ManinContent />
        </Container>

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg' centered size='tiny' />
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}