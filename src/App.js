import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const names = ['Shanto', 'Kamraan', 'Ornob', 'Harun', 'Limon', 'Rifat'];  
const profiles = [
  {name : 'Faysal', status: 'Marketing', address : 'Shashongaon'},
  {name : 'Kamraan', status: 'Computer Science', address : 'Masdair'},
  {name : 'Ornob', status: 'Management', address: 'Bhuiyanpara'}
]
  return (

    <div className="App">
      <header className="App-header">
      <h1> Learning and Enjoying React </h1>

      {/* <ul>
        {
          names.map(name => <li>{name}</li>)
        }
      </ul> */}

      <Counter></Counter>
      <Friends name = "Abir Hossain" status = "Computer Science"></Friends>
      <Friends name = {names[0]} status = "Management"></Friends>
      {/* <Friendsinfo info = {profiles[0]}></Friendsinfo>
      <Friendsinfo info = {profiles[1]}></Friendsinfo> */}
      {
        profiles.map(profile => <Friendsinfo info = {profile}></Friendsinfo>)
      }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const increase = () => setCount(count + 10);

  return(
    <div>
      <h2> Counter Value : {count} </h2>
      <button onClick={increase} style={{fontSize: '25px'}}> Up </button>
    </div>
  )
}


function Friends(props){

  return(
    
    <div style={{height: '150px', width: '500px', border: '2px solid red', borderRadius: '5px', color : 'skyblue', margin: '5px'}}>
      <h2> {props.name} </h2>
      <h4> {props.status} </h4>
    </div>
  )
}


function Friendsinfo(props){

const {name, status, address} = props.info;

  return(
    <div style={{height: '300px', width: '500px', border: '2px solid red', borderRadius: '5px', color : 'skyblue', margin: '5px'}}>
      <h2> {name} </h2>
      <h4> {status} </h4>
      <h5> {address} </h5>
    </div>
  )
}

export default App;
