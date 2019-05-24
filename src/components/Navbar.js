import React, { Component } from "react";
import logo from '../assets/logo.jpg';
import {
  Navbar,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import AddTodo from "./AddTodo";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  addTask(){

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="Navbar">
          <img src={logo} className="App-logo"></img>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AddTodo />
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}