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

let App2 = (props)=> {
  let i = [];
  let messages = () =>{
    // for(var k=0; k<props.msg.length; ++k){
    //   i.push(<h1 className={props.cName}>{props.msg[k]}</h1>);
    // }
    
      props.msg.forEach(function (value, index){
        i.push(<h1 className={props.cName}>{value}</h1>);
        });
  }

  return (
    <div>
      {messages()}
      {i}
      <OtherComponent cName="styled" msg="hello react"/>
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
      <App2 cName='app_styled' msg={["First Message","Second Message"]} />
    </div>
  );
}

export default Parent;
