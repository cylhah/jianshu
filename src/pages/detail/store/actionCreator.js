import {actionType} from './actionType'
import {fromJS} from 'immutable'
import axios from 'axios'

const actionCreator = {
    getDetail(id) {
        return async (dispatch)=>{
            try {
                const res = await axios.get(`/api/detail.json?id=${id}`)
                const action = {
                    type: actionType.GET_DETAIL,
                    data: fromJS(res.data.data)
                }
                dispatch(action)

            }catch(error){
                console.log(error)
            }
        }
    }
}

export {actionCreator}