import React, {Component, PropTypes} from 'react';

class Course extends React.Component{
    constructor(){
        super();
        this.onDeleteCourse=this.onDeleteCourse.bind(this);
    }

    onDeleteCourse(){
        if(this.props.onDeleteCourse){
            this.props.onDeleteCourse(this.props.index);
        }
    }
    

    render(){
        const course = this.props.thisCourse;
        return (
            <div>
                <span>{course.title}</span>
                <button onClick={this.onDeleteCourse}>Delete</button>
            </div>
        );
    }

}


Course.propTypes = {
    thisCourse: PropTypes.object.isRequired,
    onDeleteCourse:PropTypes.func,
    index: PropTypes.number
};


export default Course;