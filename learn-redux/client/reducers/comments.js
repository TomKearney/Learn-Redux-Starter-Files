// reducer takes in (1) the action, and (2) a copy of the current state

function posts(state = [], action){
    console.log(state, action);
    return state;
}

export default posts;