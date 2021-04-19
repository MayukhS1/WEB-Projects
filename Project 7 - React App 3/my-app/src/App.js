import React from "react";
import img1 from "./pexels-josh-sorenson-1714208.jpg";
// import logo from './logo.svg';
//import './App.css';

const workDays=["Monday", "Tuesday", "Thursday", "Friday"];
const offDays=["Wednessday", "Saturady"];

function Header(props){
  return(
  <header style={{fontFamily: 'Arial'}}>
      <h3>{props.name} Days</h3>
  </header>
  );
}
function DayList(props){
  // if(props.listType.localeCompare("Working")===0){
  //   return(
  //     <ul>
  //     </ul>
  //   );
  // }
  // else if(props.listType.localeCompare("Off")===0){
  //   return(
  //     <ul>
  //       {props.offDays.map((day1) => <li>{day1}</li>)}
  //     </ul>
  //   );
  // }
  // default response
  return(
    <div>
      <ul style={{color: "#6b6b6b", fontFamily:"Arial"}}>
        {props.days.map((day, index) => 
        <li key={index++}>{day}</li>
        )}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <img src={img1} height={300} alt="PC image" data-testid="img"/>
      <Header name="Working"/>
      <DayList listType="Working" days={workDays}/>
      <Header name="Off"/>
      <DayList listType="Off" days={offDays}/> 
    </div>
  );
}

export default App;
