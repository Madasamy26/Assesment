import React from 'react'
import TobBar from './Header'
import StickyLayout from './StickyLayout'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, 
    List, Menu, Segment, Visibility,Item,Card,Form,Button,Input
  } from 'semantic-ui-react'

class OppurtunityEdit extends  React.Component {
    constructor(props){
        super(props);
      
        }
      
        render(){
      
          return(
         <div>
            <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid id='form-subcomponent-shorthand-input-title' label='Title' placeholder='Title' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Application Close Date' placeholder='Application Close Date' />
                <Form.Input fluid id='form-subcomponent-shorthand-earl-start-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' /> <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
                <Form.Input fluid id='form-subcomponent-shorthand-appl-close-date' label='Last name' placeholder='Last name' />
               </Form.Group>
            </Form>
         </div> 
        );
        
        }
      
      

}

export default OppurtunityEdit;