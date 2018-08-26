import {fromJS} from 'immutable'
import {actionType} from './actionType'

const defaultState = fromJS({
    detail: {}
})

export default (state = defaultState, action) => {
    if(action.type === actionType.GET_DETAIL){
        return state.set('detail',action.data)
    }
    return state
}