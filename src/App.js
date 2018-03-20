import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./css/App.css";

const API_KEY = "96017337f93fa8350824afac99872c32";

class App extends React.Component {
  constructor(props) {
  super(props);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };

    this.getWeather = this.getWeather.bind(this);
  }


  // Object lives in component, responsible for keeping track of changing data of a component, ie user submitting a form. any interaction with application that causes a change
  // Calling super(props) in the constructor has been deprecated in React 16.
  // state = {
  //   // initial states
  //   temperature: undefined,
  //   city: undefined,
  //   country: undefined,
  //   humidity: undefined,
  //   description: undefined,
  //   error: undefined
  // }

  // Get data from OpenWeatherMap; passed through as a props; Because we are using an arrow function, we don't need to bind this in the constructor
  // Arrow function only for React 16+. This is bound to the APP component
  getWeather = async (e) => {
    // Prevents page reload
    e.preventDefault();

    // Grab from input fields name
    const city = e.target.elements.city.value;

    // API Call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);

    // Convert response/data to JSON format (any programming lang can understand)
    const data = await api_call.json();

    // If these values, return true
    if(city) {
      console.log(data);

      // Never manipulate state with this.state!!!
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        description: data.weather[0].description,
        error: ""
      });

      // this._inputElement1.value = "";
      // this._inputElement2.value = "";
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        description: undefined,
        error: "Please enter a valid city and country."
      });
    }
  }
  render() {
    return (
      <div className="weather">
        <Titles />
        <div className="weather--container">
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            description={this.state.description}
            error={this.state.error}/>
          </div>
      </div>
    );
  }
};

export default App;
