import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { checkAuth } from './actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer';
import Content from './components/mainPage/content';
import CoursePage from './components/course/course_page';
import Login from './components/loginpage/login';
import Homework from './components/homework';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/course" component={Content} />
          <Route path="/:coursetype/:id" component={CoursePage} />
          <Route path="/homework/:id" component={Homework} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
