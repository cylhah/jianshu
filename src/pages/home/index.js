import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import { actionCreator } from './store/actionCreator';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                    className='banner-img'
                    src="//upload.jianshu.io/admin_banners/web_images/4417/50838faafd6d48d0677e6ee07633f08914bc2749.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                <BackTop 
                style={this.props.showBackTop? {visibility: 'visible'}:{visibility:'hidden'}}
                onClick={this.backTop.bind(this)}>
                    <i className='iconfont'>&#xe62d;</i>
                </BackTop>
            </HomeWrapper>  
        );
    }

    componentDidMount() {
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeShowBack)
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeShowBack)
    }

    backTop() {
        window.scrollTo(0, 0)
    }
}

const mapState = (state)=>({
    showBackTop: state.getIn(['home','showBackTop'])
})

const mapDispatch = (dispatch)=>({
    changeShowBack() {
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreator.showBackTop())
        }else {
            dispatch(actionCreator.hideBackTop())
        }
    }
})
export default connect(mapState,mapDispatch)(Home);