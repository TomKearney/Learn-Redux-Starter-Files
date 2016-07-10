import * as types from './actionTypes';

// increment or decrement likes
export function incrementLike(index){
    return {
        type: types.INCREMENT_LIKES,
        index
    }
}

// add comment
export function addComment(postId, author, comment){
    console.log('dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, commentIndex){
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentIndex
    }
}