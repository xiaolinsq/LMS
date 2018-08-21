import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseTag extends Component {
  render() {
    const { id } = this.props.CourseId;
    console.log(this.props);
    console.log('idd', id);
    return (
      <div className="divtop">
        <ul>
          <li>课程内容</li>
        </ul>
      </div>
    );
  }
}

export default CourseTag;
