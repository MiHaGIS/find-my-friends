import React from 'react';

String.prototype.capatalize = function() {
  return this.charAt(0).toUpperCase() +
    this.substring(1).toLowerCase()
}

class TypeInYourName extends React.Component {

  onKeypress = (event) => {
    if (event.key === "Enter") {
      this.props.NameTypedIn(event.target.value.trim().capatalize())
    };
  };

  render() {
    return <div className="intro">
      <h1>Enter your name below to begin...</h1>
      <input type="text" placeholder="your name goes here..." onKeyPress={this.onKeypress}/>
    </div>
  };
}

export default TypeInYourName;
