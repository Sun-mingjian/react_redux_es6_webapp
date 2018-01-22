import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class CourseReviewContent extends React.Component{
    constructor(){
        super();
    }

    render(props){
        return(
            <div>
                <h1>Course: {this.props.courseName}</h1>
                <h1>{this.props.courseReviewContent}</h1>
            </div>
        );
    }
}
CourseReviewContent.propTypes = {
    courseName : PropTypes.string.isRequired
};

export default CourseReviewContent;