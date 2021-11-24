import React from 'react';
const initialStateHome = {
  'name':'',
  'age':''
}

function Store(OriginalComponent){

  class UpdatedComponent extends React.Component {
    constructor(){
      super();
      this.state = {
        initialStateHome :initialStateHome,
      }
    }

    updateHomeInitialState = (newState)=>{
        this.setState((previousState)=>({
            ...previousState,
            initialStateHome:newState
        }))
    }

    render(){
      return(
        <OriginalComponent store={this.state}/>
      )
    }
  }
  return UpdatedComponent;
}

export default Store;