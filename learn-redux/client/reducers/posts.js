// reducer takes in (1) the action, and (2) a copy of the current state

function posts(state = [], action){
    if(action.type === 'INCREMENT_LIKES'){
        console.log('the post will change');
        console.log(state, action);
    };
    
    return state;
}

export default posts;