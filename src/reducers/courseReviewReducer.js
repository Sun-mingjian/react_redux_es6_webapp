import * as types from '../actions/actionTypes';

let defaultState = {
    "aaa":"Hello SMJ"
};


export default function courseReviewReducer(state = defaultState, action){
    switch(action.type){
        case types.GET_REVIEW:
            const courseName = action.courseName;
            return state;
         
           
        case types.ADD_REVIEW:
            alert(types.ADD_REVIEW);
            return {
                
            };
            
        case types.EDIT_REVIEW:
            alert(types.EDIT_REVIEW);
            return {
                
            };

        default:
            return state;

    }

}