import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Header from "./components/Header";
import axios from "axios";
import DisplayFav from "./components/DisplayFav";
import Favorite from "./components/Favorite"



class App extends Component {
  constructor() {
    super();

    this.state = {
      dogImg: "",
      favorites:[]
    };
    this.getDog = this.getDog.bind(this);
    this.randoDog = this.randoDog.bind(this);
    this.addFav = this.addFav.bind(this);
    this.deleteFav = this.deleteFav.bind(this);
  }

  componentDidMount() {
    this.getFav();
    
  }
  getFav(){
    let promise = axios.get("http://localhost:3050/favorites")
    promise.then(res => {
      this.setState({favorites: res.data})
    })
  }

  getDog(name) {
    let promise = axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
    promise.then(res => {
      this.setState({ 
        dogImg: res.data.message,
      });
    });
  }

  randoDog() {
    let promise = axios.get("https://dog.ceo/api/breeds/image/random");
    promise.then(res => {
      this.setState({ dogImg: res.data.message });
    });
  }

  addFav(dogName) {
    // this.setState({ favorites: [...this.state.favorites, dogName] });
    let promise = axios.post("http://localhost:3050/favorites", {favorite: dogName})
    promise.then(response => {
      this.setState({favorites: response.data})
    })
  }

  deleteFav(id){
   let promise=axios.delete(`http://localhost:3050/favorites/${id}`)
   promise.then(response => {
     this.setState({favorites: response.data})
   }).then(() => this.getFav())
  }
  editFav(id){
    
  }

  getFacts(){
    let promise = axios.get("https://dog-api.kinduff.com/api/facts")
    promise.then(res => {
      console.log(res.data)
    })
  }

  // getPeople() {
  //   axios
  //     .get('http://localhost:9001/comments')
  //     .then(response => {
  //       console.log(response.data)
  //     })

  //   axios
  //     .post('http://localhost:9001/comments', {favorite: 'something'})
  //     .then(response => {
  //       console.log(response.data)
  //     })
  // }

  render() {
    console.log(this.state.favorites)
    return (
      <div className="body">
        <Header />

        <Input
          getDog={this.getDog}
          dogImg={this.state.dogImg}
          randoDogFn={this.randoDog}
          addFavFn={this.addFav}
        />
        <DisplayFav favorites = {this.state.favorites} dogImg = {this.state.dogImg} deleteFav = {this.deleteFav}/>
        
      </div>
    );
  }
}

export default App;
