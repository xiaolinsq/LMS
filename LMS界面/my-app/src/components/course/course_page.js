import React, { Component } from 'react';
import '../../App.css';
import ContentDetail from './content_detail';
import TeacherInfo from './teacher_information';
import CourseInfo from './course_info';
import Header from '../header';
import NewHeader from '../newheader';
import Footer from '../footer';
import { connect } from 'react-redux';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    //const id=this.props.match.params;
  }
  render() {
    console.log(this.props.login);
    return (
      <div>
        <NewHeader />
        <ContentDetail CourseId={this.props.match.params.id} />
        {this.sort()}
        <Footer />
      </div>
    );
  }

  sort() {
    switch (this.props.match.params.coursetype) {
      case 'teacher':
        return <Teacher CourseId={this.props.match.params.id} />;
        break;
      case 'student':
        return <Student CourseId={this.props.match.params.id} />;
        break;
      case 'open':
        return <Open CourseId={this.props.match.params.id} />;
        break;
      default:
        return <Team CourseId={this.props.match.params.id} />;
    }
  }
}
function mapStateToProps(state) {
  console.log(state);
  return { ...state };
}
export default connect(mapStateToProps)(CoursePage);
