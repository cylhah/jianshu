import {actionType} from './actionType'
import {fromJS} from 'immutable'
import axios from 'axios'

const actionCreator = {
    showBackTop() {
        return {
            type: actionType.SHOW_BACK_TOP
        }
    },
    hideBackTop() {
        return {
            type: actionType.HIDE_BACK_TOP
        }
    },
    getArticleList() {
        return async (dispatch)=>{
            try {
                const res = await axios.get('/api/articleList.json')
                const action = {
                    type: actionType.GET_ARTICLE_LIST,
                    data: fromJS(res.data.data)
                }
                dispatch(action)

            }catch(error){
                console.log(error)
            }
        }
    },
    getMoreArticle() {
        return async (dispatch)=>{
            try {
                const res = await axios.get('/api/moreArticle.json')
                const action = {
                    type: actionType.GET_MORE_ARTICLE,
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