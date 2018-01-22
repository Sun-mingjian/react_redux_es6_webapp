import * as types from '../actions/actionTypes';

let defaultState = {
    "aaa":"Hello SMJ"
};


export default function courseReviewReducer(state = defaultState, action){
    switch(action.type){
        case types.GET_REVIEW:
            const courseName = action.courseName;
            Object.keys(state).forEach(function(course){
                if(course===courseName){
                    return {review:state[course]};
                }
            });
           
        case types.ADD_REVIEW:
            // const singleReview = {action.course : action.review}
            return {
                reviewList:{}
            };
        
            
        case types.EDIT_REVIEW:
            return {
                reviewList:{}
            }
        ;      

        default:
            return state;

    }

}