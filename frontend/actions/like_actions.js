import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const receiveLikes = likes => {
  return ({
    type: RECEIVE_LIKES,
    likes
  })
}

export const receiveLike = like => {
  return ({
    type: RECEIVE_LIKE,
    like
  })
};

export const removeLike = likeId => {
  return ({
    type: DELETE_LIKE,
    likeId
  })
}

export const fetchUserLikes = () => dispatch => {
  return(
    LikeAPIUtil.fetchUserLikes()
      .then(likes => dispatch(receiveLikes(likes)))
  )
};

export const createLike = like => dispatch => {
  return (
    LikeAPIUtil.createLike(like)
      .then((like) => dispatch(receiveLike(like)))
  )
};

export const deleteLike = likeId => dispatch => {
  return (
    LikeAPIUtil.deleteLike(likeId)
      .then(() => dispatch(removeLike(likeId)))
  )
}