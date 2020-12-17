import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

export const receiveComments = comments => {
    return ({
        type: RECEIVE_COMMENTS,
        comments
    })
};

export const receiveComment = comment => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
};


export const removeComment = commentId => {
    return ({
        type: DELETE_COMMENT,
        commentId
    })
};

export const fetchComments = () => dispatch => {
    return(
        CommentAPIUtil.fetchComments()
            .then(comments => dispatch(receiveComments(comments)))
    )
};

export const createComment = comment => dispatch => {
    return (
        CommentAPIUtil.createComment(comment)
            .then(comment => dispatch(receiveComment(comment)))
    )
};

export const deleteComment = commentId => dispatch => {
    return (
        CommentAPIUtil.deleteComment(commentId)
            .then(() => dispatch(removeComment(commentId)))
    )
};