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

//should change later
export const addReview = (review)=>{
    return {
        type: types.ADD_REVIEW,
        review
    };
};

export const editReview = (review)=>{
    return {
        type: types.EDIT_REVIEW,
        review
    };
};

export const getCourseReview = (courseName) => {
    return {
        type:types.GET_REVIEW,
        courseName
    };  
};

export const updateReview = (courseName,newReview) =>{
    return {
        type:types.UPDATE_REVIEW,
        courseName,
        newReview
    };  
};