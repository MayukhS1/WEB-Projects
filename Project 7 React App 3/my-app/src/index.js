import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var style = {
  backgroundColor: 'yellow',
  color: 'blue',
  fontFamily: 'Arial',
  display: 'flex',
  flexWrap: 'wrap'
};

var liststyle = {
  color: 'gray',
  fontFamily: 'Arial'
};

// --------------one way to do things--------------------
// const title = React.createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello World'
// )
// const names = React.createElement(
//   'ul',
//   {id: 'list', className: 'name-list', style:liststyle},
//   React.createElement(
//     'li',
//     {},
//     'Mayukh Sasmal'
//   )
// )
// ReactDOM.render(
//   title,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   names,
//   document.getElementById('names')
// )

// ReactDOM.render(
//   <div style={style}>
//     <h1>Hello World</h1>
//   </div>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <div style={liststyle}>
//     <ul>
//       <li>Mayukh</li>
//       <li>Subham</li>
//       <li>Abhishek</li>
//     </ul>
//   </div>,
//   document.getElementById('names')
// )

// ReactDOM.render(
//   <App/>,
//   document.getElementById("app")
// )

function Title(){
  return(
  <h1 style={style}>Employees</h1>
  );
}

function NameList() {
  return(
    <div style={liststyle}>
     <ul>
       <li>Mayukh</li>
       <li>Subham</li>
       <li>Abhishek</li>
     </ul>
   </div>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Title/>
    <NameList/>
    <App/>
  </React.Fragment>,
  document.getElementById("root")
)