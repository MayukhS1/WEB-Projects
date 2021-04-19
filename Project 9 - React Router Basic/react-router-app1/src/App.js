import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, 
  Error404, 
  Services,
  CompanyHistory,
  CompanyLocation} from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route  path="/about" element={<About/>}>
        <Route path="/services" element={<Services/>}/>
        <Route path="/company-history" element={<CompanyHistory/>}/>
        <Route path="/locations" element={<CompanyLocation/>}/>
       </Route>
       <Route  path="/events" element={<Events/>}/>
       <Route  path="/contact" element={<Contact/>}/>
       <Route path="*" element={<Error404/>}/>
     </Routes>
    </div>
  );
}

export default App;
