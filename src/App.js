import React from 'react';
import './App.css';

let App = (props)=> {
  return (
    <div>
      <h1>{props.msg1}</h1>
      <h1>{props.msg2}</h1>
    </div>
  );
}

function OtherComponent(props){
  let obj;
  if(props.msg){
    obj = <p className={props.cName}>{props.msg}</p>;
  }
  else{
    obj = (<p className={props.cName}>No message to show</p>);
  }
  return obj;
}

function OtherComponent2(props){
  return props.msg ? 
  <p className={props.cName}>{props.msg}</p> : 
  <p className={props.cName}>No message to show</p>;
}

function Parent(){
  return(
    <div>
      <App msg1='First Message' msg2='Second Message'></App>
      <OtherComponent cName='styled' msg='Using if...else'></OtherComponent>
      <OtherComponent/>
      <OtherComponent2 cName='styled' msg='Using ternary operator'></OtherComponent2>
      <OtherComponent2/>
    </div>
  );
}

export default Parent;
