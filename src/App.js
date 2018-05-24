import React from 'react'
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import Index from './components/index';
import { CustomMessage, Navbar } from 'components'
import 'styling/semantic.less'


class App extends React.Component{

  constructor(props){
  super(props);



  }

  render(){

    return(

      <div>
        <Index></Index>
      </div>

      
    );
  
  }




}


export default App
