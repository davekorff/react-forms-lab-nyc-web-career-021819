import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: "",
    remainingChars: this.props.maxChars
  }



  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      message: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    console.log('state in twittermessage', this.state.message);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} /> <span>{this.state.remainingChars} remaining characters</span>
      </div>
    );
  }
}

export default TwitterMessage;
