import React,{Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import {without} from 'lodash';


class App extends Component{

  constructor(){
    super();
    this.state = {
      myApponitments: [],
      formDisplay: false,
      orderBy: 'petName',
      orderDir: 'asc',
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this); 
    //without binding it to this this.setState in deleteAppointment will not work!
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }
  

  toggleForm(){
    this.setState({
      formDisplay:!this.state.formDisplay
    });
  }

  deleteAppointment(apt){
    let tempApts = this.state.myApponitments;
    tempApts = without(tempApts, apt);

    this.setState({
      myApponitments: tempApts
    });
  }

  addAppointment(apt){
    let tempApts = this.state.myApponitments;
    apt.aptId = this.state.lastIndex+1; 
    // As the form does  not contain a id we'll feed the previous index that we used.

    tempApts.unshift(apt); //pushing new apt to the array
    this.setState({
      myApponitments: tempApts,
      lastIndex: this.state.lastIndex+1
    })
  }

  componentDidMount(){
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex +1});
          return item;
        })

      this.setState({
        myApponitments: apts
      });

      });
      
  }

  render(){
    
    let order;
    let filteredApts = this.state.myApponitments;
    if(this.state.orderDir === 'asc'){
      order = 1;
    }else{
      order = -1;
    }

    filteredApts.sort((a,b) => {
      if(a[this.state.orderBy].toLowerCase()<b[this.state.orderBy].toLowerCase()){
        return -1 * order;
      }
      return 1*order;
    });

    return (
      <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <AddAppointments 
                    formDisplay={this.state.formDisplay}
                    toggleForm={this.toggleForm}
                    addAppointment={this.addAppointment}/> 
                    {/* this addAppointment={this.addAppointment} will call a local method to deal
                    with the prop*/}
                  <SearchAppointments/>
                  <ListAppointments appointments={filteredApts}
                    deleteAppointment={this.deleteAppointment}/>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;
