import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="weather--form--container">
        <form className="weather--form" onSubmit={this.props.getWeather}>
          <input type="type" name="city" placeholder="Enter City Name" ref={(e) => this._inputElement1 = e} />
          <button>Check</button>
        </form>
      </div>
    );
  }
};

export default Form;
