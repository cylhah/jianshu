import {fromJS} from 'immutable'
import {actionType} from './actionType'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        title: '摄影'
    },{
        id: 2,
        imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        title: '自然科普'
    }],
    articleList: [],
    showBackTop: false
})

export default (state = defaultState, action) => {
    if(action.type === actionType.GET_ARTICLE_LIST){
        return state.set('articleList',action.data)
    }else if(action.type === actionType.GET_MORE_ARTICLE){
        const articles = state.get('articleList').concat(action.data)
        return state.set('articleList',articles)
    }else if(action.type === actionType.SHOW_BACK_TOP){
        return state.set('showBackTop',true)
    }else if(action.type === actionType.HIDE_BACK_TOP){
        return state.set('showBackTop',false)
    }
    return state
}