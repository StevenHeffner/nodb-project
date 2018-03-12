import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">Pupper Liker <span>👍</span></div>
      </div>
    );
  }
}
