import React, {Component} from 'react';
import Parent from "./Parent";

class Child1 extends Component{


    render(){
        
        return(
            <div> 
                
                <hr></hr>
                You cannot see Child1 
                <button onClick={this.childFunction.bind(this)}>Click</button>
                
            </div>
        );
    }
}

class Credits extends Component {
  
    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent("DATA: 784923");
    }
    
 
    render() {
      return (
         <div>
            
                <hr></hr>
                You ONLY see Credits Class, no child1 class 
                <button onClick={this.childFunction.bind(this)}>Click About</button>
         </div>
      )
   }

  }

  export {
    Credits,
    Child1,
  }