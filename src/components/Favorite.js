import React, { Component } from "react";

export default function Favorite(props) {
  console.log(props)
  return (
    <div>
      <button className="in 1" onClick={() => props.addFavFn(props.dogName)}>
        Like Pup <span>👍</span>
      </button>
    </div>
  );

  
}
