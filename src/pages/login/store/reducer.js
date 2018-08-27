import {fromJS} from 'immutable'
import {actionType} from './actionType'

const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    if(action.type === actionType.CHANGE_LOGIN){
        return state.set('login',action.value)
    }
    return state
}