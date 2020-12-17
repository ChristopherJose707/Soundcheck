import {RECEIVE_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, {[action.comment.id]: action.comment});
        case DELETE_COMMENT: 
            let nextState = Object.assign({}, oldState);
            delete nextState[action.commentId];
            return nextState;
        default:
            return oldState;
    }
};

export default commentsReducer;