import { combineReducers} from 'redux';
import logReducer from './logReducer';

export default combineReducers({
    //this is our state for logs
    log: logReducer
});