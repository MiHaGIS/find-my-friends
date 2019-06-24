import React from 'react';

class TypeInYourName extends React.Component {

  onKeypress = (event) => {
    if (event.key === "Enter") {
      this.props.NameTypedIn(event.target.value.trim())
      console.log("I have been summoned")
    };
  };

  render() {
    return <div>
      <h1>Enter your name below to begin...</h1>
      <input type="text" placeholder="your name goes here..." onKeyPress={this.onKeypress}/>
    </div>
  };
}

export default TypeInYourName;
