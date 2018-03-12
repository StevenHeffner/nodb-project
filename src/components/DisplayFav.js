import React, { Component } from "react";
import axios from "axios";

export default class DisplayFav extends Component {

  
  render() {
    let favoritsJSX = this.props.favorites.map((favorites, index) => {
      return (
        <h2 className="favorites">
          {favorites}
          <button className="in ed">Edit</button>
          <button onClick={() => this.props.deleteFav(index)} className="in ed">Delete</button>

        </h2>
      );
    });
    return (
      <div className="disfav">
        <h1 className="title list">Favorites</h1>
        {favoritsJSX}

      </div>
    );
  }
}
