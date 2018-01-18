import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state,
                Object.assign({},action.course)
            ];
            
        case types.DELETE_COURSE:
            return [
                ...state.slice(0,action.courseIndex),
                ...state.slice(action.courseIndex+1)
            ]
        ;      

        default:
            return state;

    }

}