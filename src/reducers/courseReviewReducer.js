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
            
        case types.EDIT_REVIEW:
            alert(types.EDIT_REVIEW);
            return {
                
            };

        default:
            return state;

    }

}