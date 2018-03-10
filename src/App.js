import React, { Component } from "react";
import "./App.css";
import Input from "./conponents/Input";
import Header from "./conponents/Header"
import axios from "axios"

class App extends Component {
  constructor(){
    super();

    this.state = {
      dogImg: "",
    }
  this.getDog = this.getDog.bind(this)
  this.randoDog = this.randoDog.bind(this)


  }
  getDog(name){
    let promise = axios.get(`https://dog.ceo/api/breed/${name}/images/random`)
    promise.then((res) => {
      this.setState({dogImg: res.data.message})
    })
  }

  randoDog(){
    let promise = axios.get("https://dog.ceo/api/breeds/image/random")
    promise.then((res) => {
     this.setState({dogImg: res.data.message})
    })
  }
  



  render() {
    return (
      <div className = "body">
        <Header />

        <Input getDog= {this.getDog} dogImg={this.state.dogImg} randoDogFn={this.randoDog} dogTest = {this.dogTest} />





      </div>
    );
  }
}

export default App;
