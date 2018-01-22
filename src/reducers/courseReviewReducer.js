import * as types from '../actions/actionTypes';

let defaultState = {
    reviewList:[]
};


export function courseReviewReducer(state = defaultState, action){
    const singleReview = {action.course : action.review}
    switch(action.type){
        case types.ADD_REVIEW:
            return {
                reviewList:[...state,
                Object.assign({},singleReview)
            ]
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