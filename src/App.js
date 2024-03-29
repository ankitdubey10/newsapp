import './App.css';
import React, { Component } from 'react'
import Navbar from './compo/Navbar';
import News from './compo/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  c = 'ankit'
  pageSize = 12;
  render() {
    return (
      <div >
        <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><News key = "general" pageSize = {this.pageSize} country = "in" category="general"/></Route>
          <Route exact path="/sports"><News key = "sports" pageSize = {this.pageSize} country = "in" category="sports"/></Route>
          <Route exact path="/science"><News key = "science" pageSize = {this.pageSize} country = "in" category="science"/></Route>
          <Route exact path="/entertainment"><News key = "entertainment" pageSize = {this.pageSize} country = "in" category="entertainment"/></Route>
          <Route exact path="/technology"> <News key = "technology" pageSize = {this.pageSize} country = "in" category="technology"/></Route>
          <Route exact path="/business"><News key = "business" pageSize = {this.pageSize} country = "in" category="business"/></Route>
          <Route exact path="/health"><News key = "health" pageSize = {this.pageSize} country = "in" category="health"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}