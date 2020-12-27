import React, {Component} from 'react';
import {Child1, Credits} from './Child1';
class Parent extends Component{

  constructor(props){
    super(props);
    this.state = { 
      DataFromChild1_value_key: "Start UP DATA before I update"
    };
    this.parentFunction = this.parentFunction.bind(this);
    
  }

    parentFunction=(data_from_child)=>{
       console.log(data_from_child);
       console.log('Our data is fetched');
//data received from child and stored in state
        this.setState({DataFromChild1_value_key:data_from_child});
    }
    
    

    render(){
        return(
            <div> 
          {this.state.DataFromChild1_value_key}
          <hr></hr>
          
          
            <hr></hr>
            
                <Credits functionCallFromParent={this.parentFunction.bind(this)}/>
            </div>
        );
    }
}

export default Parent;
  