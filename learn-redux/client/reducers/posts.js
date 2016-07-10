import * as types from '../actions/actionTypes';

// reducer takes in (1) the action, and (2) a copy of the current state

function posts(state = [], action){
    switch(action.type){
        case types.INCREMENT_LIKES :
            console.log('incrementing likes');
            const i = action.index;
            return [
                ...state.slice(0,i), // before the post we're updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ]
        default :
            return state;
    }
}

export default posts;