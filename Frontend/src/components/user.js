import React from 'react';

class TypeInYourName extends React.Component {

  onKeypress = (event) => {
    if (event.key == "Enter") {
      this.props.NameTypedIn(event.target.value.trim())
      console.log("I have been summoned")
    };
  };

  render() {
    return <input type="text" placeholder="user..." onKeyPress={this.onKeypress}/>
  };
}

export default TypeInYourName;
