import React, {Component} from "react";
import CardList from "./CardList";
import "./App.css";

class App extends Component {
  constructor () {
    super ()
    this.state = {
      countriesSaved: [],
      countriesExtraSaved: [],
      worldExtraSaved: []
    } 
  };

  componentDidMount () {
    
    fetch ("https://coronavirus-19-api.herokuapp.com/countries")
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(fetchedCountries => this.setState({countriesSaved: fetchedCountries}));
    console.log("fetched COVID data 1");
    
    fetch ("https://raw.githubusercontent.com/amcharts/covid-charts/master/data/json/total_timeline.json")
    .then (response => response.json())
    .then(fetchedCountriesExtra => this.setState({countriesExtraSaved: fetchedCountriesExtra}));
    console.log("fetched COVID data 2");
      
    fetch ("https://raw.githubusercontent.com/amcharts/covid-charts/master/data/json/world_timeline.json")
    .then (response => response.json())
    .then(fetchedWorldExtra => this.setState({worldExtraSaved: fetchedWorldExtra}));
    console.log("fetched COVID data 3");
      };

  render () {
    console.log("rendered");
    if (this.state.countriesSaved.length === 0 || this.state.countriesExtraSaved.length === 0 || this.state.worldExtraSaved.length === 0) {
      // return <p className="tc">Waiting for the component to mount</p>
      return <div className="loader"></div>
    }
    else {
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const timeStamp = new Date();
      const day = weekdays[timeStamp.getDay()];
      const month = months[timeStamp.getMonth()];
      const date = timeStamp.getDate();
      const year = timeStamp.getFullYear();
      
      const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

      const hours = addZero(timeStamp.getHours());
      const minutes = addZero(timeStamp.getMinutes());
      const seconds = addZero(timeStamp.getSeconds());
      return (
        <div className="tc center db">
          <h1 style={{margin: "20px"}}>COVID-19 Tracker</h1>
          <p style={{margin: "10px", height: "24px"}}>status as of {day}, {month} {date}, {year} at {hours}:{minutes}:{seconds}</p> 
          <CardList countries={this.state.countriesSaved} covid_total_timeline={this.state.countriesExtraSaved} covid_world_timeline={this.state.worldExtraSaved}/>
        </div>
      )
    }
  }
}
export default App;
