import React, { Component } from 'react';
import Header from "./Header/header";

export default class App extends Component {
  render() {
  console.log("GO, IT Monsters!");
  console.log("TEST BY VLAD");
    return (
      <React.Fragment>
        <Header/>
      <h1>Hello, World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus doloribus ipsam molestiae necessitatibus nisi, non sint. Ad corporis dignissimos earum, hic libero nisi non numquam quaerat quisquam sapiente voluptatem.</p>
      </React.Fragment>
    )
  }
}
