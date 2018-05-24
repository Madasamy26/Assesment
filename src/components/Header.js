import React from 'react'
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import { CustomMessage, Navbar } from 'components'
import 'styling/semantic.less'
import { Sidebar, Image} from 'semantic-ui-react'

class TobBar extends React.Component{

  constructor(props){
  super(props);

   this.state = {activeItem: 'bio', visible: false};
     
   this.handleItemClick = this.handleItemClick.bind(this);
   this.toggleVisibility = this.toggleVisibility.bind(this);
   
  }
     
  
    handleItemClick(e, { name }){
       this.setState({ activeItem: name });
    }

    toggleVisibility(){
      this.setState({ visible: !this.state.visible });
    }

  render(){

    return(
    
     <div>
  
           <div>
              <Menu pointing secondary>
                <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='friends' active={this.state.activeItem  === 'friends'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                <Menu.Item name='logout' active={this.state.activeItem  === 'logout'} onClick={this.handleItemClick} />
               </Menu.Menu>
            </Menu>

       
            </div> 

      <div>
     {/* <Button onClick={this.toggleVisibility}>Toggle Visibility</Button> */}
       <Sidebar.Pushable as={Segment}>
         <Sidebar as={Menu} animation='slide out' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
           <Menu.Item name='home'>
             <Icon name='home' />
             Home
           </Menu.Item>
           <Menu.Item name='gamepad'>
             <Icon name='gamepad' />
             Games
           </Menu.Item>
           <Menu.Item name='camera'>
             <Icon name='camera' />
             Channels
           </Menu.Item>
         </Sidebar>
         <Sidebar.Pusher>
           <Segment basic>
          
             <Header as='h3'>  <Icon name={this.state.visible ?'close' : 'content' } size='big' onClick={this.toggleVisibility} /> Application Content</Header>
             
        <Grid celled>
        <Grid.Row>
          <Grid.Column width={13}>
          <p>A common English usage misconception is that a paragraph has three to five sentences; single-word paragraphs can be seen in some professional writing, and journalists often use single-sentence paragraphs.[7]

The crafting of clear, coherent paragraphs is the subject of considerable stylistic debate. Forms generally vary among types of writing. For example, newspapers, scientific journals, and fictional essays have somewhat different conventions for the placement of paragraph breaks.

English students are sometimes taught that a paragraph should have a topic sentence or "main idea", preferably first, and multiple "supporting" or "detail" sentences which explain or supply evidence. One technique of this type, intended for essay writing, is known as the Schaffer paragraph. For example, the following excerpt from Dr. Samuel Johnson's Lives of the English Poets, the first sentence is the main idea: that Joseph Addison is a skilled "describer of life and manners". The succeeding sentences are details that support and explain the main idea in a specific way.

As a describer of life and manners, he must be allowed to stand perhaps the first of the first rank. His humour, which, as Steele observes, is peculiar to himself, is so happily diffused as to give the grace of novelty to domestic scenes and daily occurrences. He never "o'ersteps the modesty of nature," nor raises merriment or wonder by the violation of truth. His figures neither divert by distortion nor amaze by aggravation. He copies life with so much fidelity that he can be hardly said to invent; yet his exhibitions have an air so much original, that it is difficult to suppose them not merely the product of imagination.

This advice differs from stock advice for the construction of paragraphs in Japanese (translated as danraku 段落).[8]
        </p>
          </Grid.Column>
          <Grid.Column width={3}>
          <p>from stock advice for the construction of paragraphs in Japanese (translated as danraku 段落).[8]
        </p>
          </Grid.Column>
        </Grid.Row>
        </Grid>

           </Segment>
         </Sidebar.Pusher>
       </Sidebar.Pushable>
     </div>

  </div>
   
 
    );

  }

}
export default TobBar
