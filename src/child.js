import React, { useState,useEffect } from 'react';
import Store from './Store';

function Child(props) {
  

  const UpdateInitialHomeState = ()=>{
    props.updateHomeInitialState({
        name:'Vikas',
        age:'25'
    })
  }
  return (
    <>
      <span>{props.store.initialStateHome.name}</span>
      <span>{props.store.initialStateHome.age}</span>
      <div key={props.key}>{props.value}</div>
      <button onClick={UpdateInitialHomeState}>Update Me</button>
    </>
  );
}
export default Store(Child);
