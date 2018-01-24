import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class CourseReviewContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTextArea : false,
            reviewContent : this.props.reviewContent
        };
    }
    handleAddReviews(){
        this.setState({showTextArea: true});
    }
    handleSaveReviews(){
        this.props.onUpdate(this.state.reviewContent);
        this.setState({
            showTextArea: false
        });
    }
    handleReviewContentChange(event){
        this.setState({reviewContent: event.target.value});
    }
    render(){
        let optionButton = null;
        let reviewInputSection = null;
        let saveReviewButton = null;
        let reviewText = null;
        if(this.state.showTextArea){
            reviewInputSection=<textarea onChange={this.handleReviewContentChange.bind(this)} value={this.state.reviewContent}></textarea>;
            saveReviewButton= <button onClick={this.handleSaveReviews.bind(this)}>Save Reviews</button>;
        }else{
            reviewText = <h1>{this.state.reviewContent}</h1>;
            if(!this.props.reviewContent){
                optionButton = <button onClick={this.handleAddReviews.bind(this)}>Add Reviews</button>;
            }else{
                optionButton = <button onClick={this.handleAddReviews.bind(this)}>Edit Reviews</button>;
            }
        }
        return(
            <div>
                <h1>Course: {this.props.courseName}</h1>
                {reviewText}
                {optionButton}
                <br></br>
                {reviewInputSection}
                <br></br>
                {saveReviewButton}
            </div>
        );
    }
}
CourseReviewContent.propTypes = {
    courseName : PropTypes.string.isRequired,
    reviewContent : PropTypes.string,
    onUpdate: PropTypes.func
};

export default CourseReviewContent;