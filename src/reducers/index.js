import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducers = combineReducers({
    courses
});

export default rootReducers;