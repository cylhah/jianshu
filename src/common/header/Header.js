import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store/actionCreator';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Additon
} from './style'

class Header extends PureComponent {
    render() {
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <NavSearch 
                        className={this.props.focused? 'focused': ''}
                        onFocus={this.props.focus}
                        onBlur={this.props.blur}
                    ></NavSearch>
                    <i className='iconfont' style={{position: 'relative',left: '-30px',top: '2px',cursor:'pointer'}}>&#xe624;</i>
                    <SearchInfo
                        onMouseEnter={this.props.mouseEnter}
                        onMouseLeave={this.props.mouseLeave}
                        style={(this.props.focused||this.props.mouseIn)?{visibility: 'visible'}: {}}
                    >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch
                                onClick={this.props.changeItemShow}
                            ><i className='iconfont'
                                style={{fontSize: '13px',transition: 'transform .5s',transform: `rotate(${this.props.iconRotate}deg)`,display: 'inline-block'}}
                            >&#xe851;</i>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        {this.getSearchInfoItems()}
                    </SearchInfo>
                </Nav>
                <div style={{width: '220px',position: 'absolute',right: 0}}>
                    <Additon className='reg'>注册</Additon>
                    <Additon className='writting'>
                        <i className='iconfont'>&#xe60b;</i>
                        写文章
                    </Additon>
                </div>
            </HeaderWrapper>      
        );
    }

    componentDidMount() {
        this.props.getList()
    }

    getSearchInfoItems() {
        if(this.props.list.size) {
            let showItemList = []
            for(let i=0;i<10;i++) {
                let index = this.props.showIndex+i
                let item = this.props.list.get(index)
                if(item) {
                    showItemList.push((<SearchInfoItem key={item}>{item}</SearchInfoItem>))
                }
            }
            return showItemList
        }
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    showIndex: state.getIn(['header','showIndex']),
    mouseIn: state.getIn(['header','mouseIn']),
    iconRotate: state.getIn(['header','iconRotate'])
})

const mapDispatchToProps = (dispatch) => ({
    getList(){
        dispatch(actionCreator.getList())
    },
    changeItemShow() {
        dispatch(actionCreator.changeItemShow())
    },
    focus(){
        dispatch(actionCreator.searchFocusAction())
    },
    blur(){
        dispatch(actionCreator.searchBlurAction())
    },
    mouseEnter() {
        dispatch(actionCreator.mouseEnter())
    },
    mouseLeave() {
        dispatch(actionCreator.mouseLeave())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);