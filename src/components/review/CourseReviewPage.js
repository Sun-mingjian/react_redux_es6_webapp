import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import CourseReviewContent from './CourseReviewContent';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class CourseReviewPage extends React.Component{
    constructor(props){
        super(props);
        // this.getCourseReview = this.getCourseReview.bind(this);
        // this.getThisCourseReview = this.getThisCourseReview.bind(this);
        let courseName = this.props.params.courseTitle;
        this.props.actions.getCourseReview(courseName);

    }


    // getThisCourseReview(props){
    //     let courseName = this.props.params.courseTitle;
    //     return this.props.actions.getCourseReview(courseName);
    // }

    getCourseName(props){
        return this.props.params.courseTitle;
    }

    render(props){
        return(
            <CourseReviewContent courseName = {this.getCourseName(props)} 
            reviewContent = {this.props.review} /> 
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        review: state.review
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseReviewPage);
