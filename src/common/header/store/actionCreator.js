import {actionType} from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeListAction = (data)=>({
    type: actionType.CHANGE_LIST,
    data
})

const actionCreator = {
    searchFocusAction(){
        return {
            type: actionType.SEARCH_FOCUS
        }
    },
    searchBlurAction() {
        return {
            type: actionType.SEARCH_BLUR
        }
    },
    changeItemShow() {
        return {
            type: actionType.CHANGE_ITEM_SHOW
        }
    },
    mouseEnter() {
        return {
            type: actionType.MOUSE_ENTER
        }
    },
    mouseLeave() {
        return {
            type: actionType.MOUSE_LEAVE
        }
    },
    getList() {
        return async (dispatch)=>{
            try {
                const res = await axios.get('/api/headerList.json')
                dispatch(changeListAction(fromJS(res.data.data)))

            }catch(error){
                console.log(error)
            }
        }
    }
}

export {actionCreator}