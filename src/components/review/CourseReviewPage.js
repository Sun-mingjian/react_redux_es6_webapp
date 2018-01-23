import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import CourseReviewContent from './CourseReviewContent';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class CourseReviewPage extends React.Component{
    constructor(props,context){
        super(props,context);
        let courseName = this.props.params.courseTitle;
        this.props.actions.getCourseReview(courseName);

    }

    render(props){
        const courseName = this.props.params.courseTitle;
        return(
            <CourseReviewContent courseName = {courseName} 
            reviewContent = {this.props.reviews[courseName]} /> 
        );
    }
}

CourseReviewPage.propTypes = {
    reviews: PropTypes.object.isRequired,
    params: PropTypes.object,
    actions:PropTypes.object
};

function mapStateToProps(state, ownProps) {
    console.info(state);
    return {
        reviews: state.reviews
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseReviewPage);
