import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import CourseTag from './course_tag';
import Footer from './footer';
import HomeworkDetail from './homework_detail';

class Homework extends Component {
  render() {
    console.log('ccc');
    console.log(this.props);
    return (
      <div style={{ background: '#eeeeee' }}>
        <Header />
        <div className="course-box">
          <CourseTag CourseId={this.props.match.params} />
          <HomeworkDetail />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homework;
