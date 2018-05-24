import React from 'react'
import TobBar from './Header'
import StickyLayout from './StickyLayout'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, 
    List, Menu, Segment, Visibility,Item,Card,Form,Button,Modal,Input,Message
  } from 'semantic-ui-react'
import OppurtunityEdit from './OppurtunityEdit' 
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class MainContent extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment()
          };
        this.handleChangeDate = this.handleChangeDate.bind(this);
         
    }

    handleChangeDate(){
        this.setState({
            startDate: date
          });
    }
        
    handleBtn = <Button>Show Modal</Button>;
  
    render() {
      return(
            
         <div>
             <Container>
              <div>
                <Message
                    attached
                    header='Welcome to our site!'
                    content='This Form is an editable!'
                />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Tiltle' placeholder='Title' value="raja" type='text' />
        <Form.Input fluid label='Application Close Date' placeholder='Application Close Date' type='date' />
        {/* <DatePicker
         selected={this.state.startDate}
         onChange={this.handleChangeDate}
        /> */}
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Earliest Start date' placeholder='Earliest Start date' value="raja" type='text' />
        <Form.Input fluid label='Latest End Date' placeholder='Latest End Date' value="raja" type='text' />
        
      </Form.Group>
      <Form.Group widths='equal'>
         <Form.Input fluid label='Descriptions' placeholder='Descriptions' type='text' />
        <Form.Input fluid label='Backgrounds' placeholder='Backgrounds' type='text' />
       
        
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Skills' placeholder='Skills' value="raja" type='text' />   
        <Form.Input fluid label='Selection Process' placeholder='Selection Process' value="raja" type='text' />  
        

      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Salary' placeholder='Salary' type='text' />
        <Form.Input fluid label='City' placeholder='City' type='text' /> 
      </Form.Group>
      
      <Button color='blue'>Edit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Click Edit Button to Edit The Form.
    </Message>
  </div>
             
                    
                {/* <handleBtn /> */}
          </Container>
              {/* <Modal trigger={this.handleBtn}>
                <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                  
                    <Modal.Description>
                     <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>

                        <OppurtunityEdit />


                </Modal.Description>
                </Modal.Content>
            </Modal> */}
         </div> 
        );
        
        }
      
      

}

export default MainContent;