// increment or decrement likes
function incrementLike(index){
    return {
        type: 'INCREMENT_LILKES',
        index
    }
}

// add comment
function addComment(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
function removeComment(postId, commentIndex){
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentIndex
    }
}