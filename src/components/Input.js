import React, { Component } from "react";
import Favorite from "./Favorite";
import "./input.css";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="input">
        <img
          src={
            this.props.dogImg ||
            "https://naotw-pd.s3.amazonaws.com/styles/aotw_detail_ir/s3/jardiland_fete_du_chien_aotw.jpg?itok=R-vMs80i"
          }
          className="dogPic"
          alt=""
        />
        <input
          className="but"
          placeholder="Enter Breed"
          onChange={e => this.handleInput(e)}
        />
        <button
          className="in "
          onClick={() => this.props.getDog(this.state.userInput)}
        >
          Search
        </button>
        <button className="in" onClick={() => this.props.randoDogFn()}>
          Rando Pupper Pic
        </button>
        <Favorite dogName = {this.state.userInput} addFavFn={this.props.addFavFn} />
      </div>
    );
  }
}
