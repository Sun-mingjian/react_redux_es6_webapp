import * as types from './actionTypes';

export const createCourse = (course)=>{
    return {
        type: types.CREATE_COURSE,
        course
    };
};

export const deleteCourse = (courseIndex)=>{
    return {
        type: types.DELETE_COURSE,
        courseIndex
    };
};