import * as types from '../actions/actionTypes';

let defaultState = {
    "aaa":"Hello SMJ"
};


export default function courseReviewReducer(state = defaultState, action){
    switch(action.type){
        case types.GET_REVIEW:
            return state;

        case types.UPDATE_REVIEW:
            const courseName = action.courseName;
            state[courseName] = action.newReview;
            return state;
            
        case types.DELETE_REVIEW:
            const thisCourseName = action.courseName;
            state[thisCourseName] = "";
            return {...state};

        default:
            return state;

    }

}