import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import songsReducer from "./songs_reducer";
import commentsReducer from './comment_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    songs: songsReducer,
    songComments: commentsReducer
});

export default entitiesReducer;