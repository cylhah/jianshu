import React, { PureComponent} from 'react';
import {ListItem} from '../style';
import {connect} from 'react-redux';
import {actionCreator} from '../store/actionCreator';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item)=>{
                        return (
                            <ListItem key={item.get('id')}>
                                <div className='item-content'>
                                    <p className='content-title'>
                                        <Link to={`/detail/${item.get('id')}`}>
                                            {item.get('title')}
                                        </Link>
                                    </p>
                                    <p className='content-part'>
                                        {item.get('desc')}
                                    </p>
                                    <p className='content-menu'>
                                        <a href="">吻过地平线_8781</a>
                                        <a href="">
                                            <i className='iconfont'>&#xe684;</i>
                                            166
                                        </a>
                                        <span>
                                            <i className='iconfont'>&#xe6b3;</i>
                                            152
                                        </span>
                                    </p>
                                </div>
                                <img
                                    className='item-img'
                                    src={item.get('imgUrl')} alt=""/>
                            </ListItem>
                        )
                    })
                }
            </div>
        );
    }

    bindEvent() {
        window.addEventListener('scroll',this.props.getMoreArticle)
    }

    componentDidMount() {
        this.props.getArticleList()
        this.bindEvent()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.getMoreArticle)
    }
}

const mapState = (state)=>({
    articleList: state.getIn(['home','articleList'])
})

const mapDispatch = (dispatch)=>({
    getArticleList() {
        dispatch(actionCreator.getArticleList())
    },
    getMoreArticle() {
        let percent = document.documentElement.scrollTop/document.documentElement.scrollHeight
        if(percent>0.6){
            dispatch(actionCreator.getMoreArticle())
        }
    }
})

export default connect(mapState,mapDispatch)(List);