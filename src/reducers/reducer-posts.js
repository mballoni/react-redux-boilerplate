import {DELETE_POST, FETCH_POST, FETCH_POSTS} from "../actions";
import {mapKeys, omit} from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;
            return {...action, [action.payload.data.id]: action.payload.data}
        case FETCH_POSTS:
            return mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}