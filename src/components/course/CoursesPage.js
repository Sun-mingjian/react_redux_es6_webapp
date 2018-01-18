import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import Course from './Course';


class CoursesPage extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state = {
            course:{title:""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    onClickSave(){
        if(!this.state.course.title){
            alert("Please input the course title");
        }else{
            this.props.actions.createCourse(this.state.course);
            this.setState({course:{title:""}});
        }
    }

    handleDeleteCourse(index){
        if(this.props.actions.deleteCourse){
            this.props.actions.deleteCourse(index);
        }
    }

    render(){
        let courseSectionHeader = "";
        
        if(this.props.courses.length>0){
            courseSectionHeader = <h2> Courses To Review</h2>;
        }

        return (
            <div>
                {courseSectionHeader}
                {this.props.courses.map((course,i) => 
                    <Course key={i} thisCourse={course} index={i} onDeleteCourse={this.handleDeleteCourse} />
                )}

                <h2>Please Add Courses</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    onDeleteCourse:PropTypes.func,
    deleteCourse:PropTypes.func
};

  
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);