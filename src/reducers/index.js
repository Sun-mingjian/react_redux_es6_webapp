import {combineReducers} from 'redux';
import courses from './courseReducer';
import reviews from './courseReviewReducer';

const rootReducers = combineReducers({
    courses,
    reviews
});

export default rootReducers;