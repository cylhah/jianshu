import {actionType} from './actionType'
import axios from 'axios'

const changeLogin = (value)=>({
    type: actionType.CHANGE_LOGIN,
    value
})

const actionCreator = {
    loginCheck(account,password) {
        return async (dispatch)=>{
            try {
                const res = await axios.get(`/api/login.json?account=${account}&passowrd=${password}`)
                const login = res.data.data
                if(login) {
                    dispatch(changeLogin(true))
                }
            }catch(error){
                console.log(error)
            }
        }
    }
}

export {actionCreator}