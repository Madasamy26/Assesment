import React from 'react'
import TobBar from './Header'
import StickyLayout from './StickyLayout'
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image,Table,
    List, Menu, Segment, Visibility,Item,Card,Form,Button,Modal,Input,Message
  } from 'semantic-ui-react'
import OppurtunityEdit from './OppurtunityEdit' 
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from "axios";
let property = require('./property');
let service_url = property.url;
let fetch_object = property.fetch_object;
let access_token = property.access_token;
let paramId = property.paramId;

class MainContent extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            oppurObj:{}
          };
        this.handleChangeDate = this.handleChangeDate.bind(this);
         
    }

    componentDidMount(){

      this.getOppurtunityData().then(data => {

        //console.log('full object '+JSON.stringify(data));
        
        

        var oppurObj = {
          'title': data.data.title,
          'applications_close_date': data.data.applications_close_date,
          'earliest_start_date': data.data.earliest_start_date,
          'latest_end_date': data.data.latest_end_date,
          'description' : data.data.description,
          'city': data.data.role_info.city,
          'Selection_process': data.data.role_info.Selection_process,
          'salary' : data.data.specifics_info,
          'skills' : data.data.skills,
          'backgrounds': data.data.backgrounds


        }
        console.log('obj2 '+JSON.stringify(data.title));

        console.log('oppurtunity '+JSON.stringify(oppurObj));

        this.setState({oppurObj})
        console.log('state object '+JSON.stringify(this.state.oppurObj));

      })

    }

    //* get data of an oppurtunity
    async getOppurtunityData() {
      try {
        var oppurtunity = await axios({
          method: 'get',
          url: service_url + fetch_object +paramId+'?access_token='+access_token,
        
        });

        return oppurtunity;

      }
      catch (e) {
        console.error(e);
      }

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
              <Table fixed>
    <Table.Header>
      
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Title:</Table.Cell>
        <Table.Cell>{this.state.oppurObj.title}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Application Close Date:</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Earliest Start Date:</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        
      </Table.Row>

      <Table.Row>
        <Table.Cell>Latest End Date:</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Description:</Table.Cell>
        <Table.Cell>{this.state.oppurObj.description}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Backgrounds:</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Skills:</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Selection Process:</Table.Cell>
        <Table.Cell>selcetion process</Table.Cell>
        
      </Table.Row>

      <Table.Row>
        <Table.Cell>Salary:</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>City:</Table.Cell>
        <Table.Cell>{this.state.oppurObj.city}</Table.Cell>
        
      </Table.Row>



    </Table.Body>
  </Table>

             
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