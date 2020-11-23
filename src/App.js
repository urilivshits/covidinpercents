import React, {Component} from "react";
import CardList from "./CardList";

class App extends Component {
  constructor () {
    super ()
    this.state = {
      countriesSaved: []
      // ,
      // populationSaved: []
    } 
  };

  componentDidMount () {
    fetch ("https://coronavirus-19-api.herokuapp.com/countries")
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(fetchedCountries => this.setState({countriesSaved: fetchedCountries}));
    console.log("fetched COVID data");

    // fetch ("https://pkgstore.datahub.io/core/population/population_json/data/315178266aa86b71057e993f98faf886/population_json.json")
    // .then(fetchedPopulation => this.setState({populationSaved: fetchedPopulation}));
    // console.log(this.state.populationSaved);
  };

  render () {
    console.log("rendered");
    if (this.state.countriesSaved.length === 0) {
      return <p className="tc">Waiting for the component to mount</p>
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
        <div className="tc">
          <h1>COVID-19 Tracker</h1>
          <p>status as of {day}, {month} {date}, {year} at {hours}:{minutes}:{seconds}</p> 
          <CardList countries={this.state.countriesSaved} />
        </div>
      )
    }
  }
}
export default App;
