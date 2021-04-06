import React, { useState, useEffect, useReducer } from 'react';
import './App.css';

// const checkList = ["Laptop", "Charger", "Phone", "Money", "Water"]; //normal array
// console.log(checkList);
// array destructuring
// const [key1, key2, key3] = ["Laptop", "Charger", "Phone", "Money", "Water"];
// console.log(key1,key2,key3);

// https://api.github.com/users/MayukhS1

function GithubUserDetail({login,checked}){
  const [data, setData] = useState(null); //initally no data is there
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    if(!login){return;}
    else{setLoading(true)}

    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(setLoading(false)) //data is loaded .. no loading
    .catch(setError); //catching any error
  }, [login]);
  
  if(loading){return(<h3>Loading...</h3>);}
  if(error){
    return(<pre>{JSON.stringify(error, null, 2)}</pre>);
  }
  if(checked && data){
    return(
      <div>
        <img alt={data.login} src={data.avatar_url} style={{width:"180px", borderRadius:"50%"}}/>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <p>public repos: {data.public_repos}</p>
      </div>
    );
  }

  return(
    <React.Fragment>
      No User Available.
    </React.Fragment>
  );
}

function SecretComponent({login}) {
  console.log(login);
  // const [checked, setChecked] = useState(false);
  //use reducer
  const [checked, toggle] = useReducer(
    (checked)=>!checked,
    false
  );
  return(
    <div>
      <h1>People with the secret code can Access it only. </h1>
      <input type="checkbox" value={checked}
        // onChange={
        //   ()=>{
        //    setChecked((checked)=>!checked); 
        //   }
        // }
        onChange={toggle}
      />
      <p>{checked?"Checked In":"Please Check in, Sir"}</p>
      <GithubUserDetail login={login} checked={checked}/>
    </div>
  );
}

function DefaultComponent (params){
  return(
    <div>
      <h1>Welcome New User.</h1> 
    </div>
  );
}

function App(props) {
  // when the app starts we have new state
  const [key, setKey] = useState("new"); 
  console.log(key);
  if(key==="new" || key==="invalid"){
    return (
      <div className="App">
        <DefaultComponent/> 
        <input type="text" id="userKey" onClick={
          ()=>{
            var userKey = document.getElementById("userKey");
            if(userKey.value === "Invalid Code! Try Again"){
              userKey.value = null;
            }
          }
        }/>
        <button onClick={
          ()=>{
            var userKey = document.getElementById("userKey");
            if(userKey.value==="1256"){
              setKey("logged"); //setting value of state o 'logged'
            }
            else{
              setKey("invalid"); // setting value of state o 'invalid'
              userKey.value = "Invalid Code! Try Again";
            }
          }
      }>Log In</button> 
      </div>
    );
  }
  if(props.code===true){
    return (
      <div className="App">
        <SecretComponent login={props.login}/>
      </div>
    );
  } else{
    return (
      <div className="App">
        <DefaultComponent/>  
      </div>
    );
  }
  
}

export default App;
