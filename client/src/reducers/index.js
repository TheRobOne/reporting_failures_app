import { combineReducers } from 'redux';
import addFailureReducer from './addFailureReducer';
import buildingReducer from './buildingReducer';

export default combineReducers({
    addFailure: addFailureReducer,
    building: buildingReducer
});