import React, { Component } from "react";
import { connect } from "react-redux";

class TodoContainer extends Component {
  render() {
    return (
      <div className="TodoContainer">
        <button onClick={this.props.onClick}>{this.props.counter}</button>
      </div>
    );
  }
}

export default connect(
  state => ({ counter: state }),
  dispatch => ({
    onClick() {
      dispatch({ type: "BUTTON_CLICKED" });
    }
  })
)(TodoContainer);
