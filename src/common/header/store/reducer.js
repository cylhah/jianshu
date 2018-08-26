import {actionType} from './actionType'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    showIndex: 0,
    iconRotate: 0
})

export default (state = defaultState, action) => {
    if(action.type === actionType.SEARCH_FOCUS){
        return state.set('focused',true)
    }else if(action.type === actionType.SEARCH_BLUR){
        return state.set('focused',false)
    }else if(action.type === actionType.CHANGE_LIST){
        return state.set('list',action.data)
    }else if(action.type === actionType.CHANGE_ITEM_SHOW){
        let index = state.get('showIndex')+10
        let rotate = state.get('iconRotate')+360
        if(state.get('list').get(index)) {
            return state.merge({showIndex:index,iconRotate: rotate})
        }else {
            return state.merge({showIndex:0,iconRotate: rotate})
        }
    }else if(action.type === actionType.MOUSE_ENTER){
        return state.set('mouseIn',true)
    }else if(action.type === actionType.MOUSE_LEAVE){
        return state.set('mouseIn',false)
    }
    return state
}