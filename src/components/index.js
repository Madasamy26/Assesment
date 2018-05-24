import React from 'react'
import TobBar from './Header'
import StickyLayout from './StickyLayout'


class Index extends  React.Component{
    constructor(props){
        super(props);
      
        }
      
        render(){
      
          return(
         <div>
            {/* <TobBar></TobBar> */}

            <StickyLayout> </StickyLayout>
         
         </div> 
        );
        
        }
      
      

}

export default Index