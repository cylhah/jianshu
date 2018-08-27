import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreator} from './store/actionCreator';
import {LoginWrapper} from './style'

class Login extends PureComponent {
    render() {
        if(!this.props.loginFlag){
            return (
                <LoginWrapper>
                    <div className='loginBox'>
                        <input className='myInput' type="text" placeholder='帐号' ref={(input)=>{this.account = input}} />
                        <input className='myInput' type="password" placeholder='密码' ref={(input)=>{this.password = input}}/>
                        <button className='loginBtn' onClick={()=>{this.props.login(this.account.value,this.password.value)}} >登录</button>
                    </div>
                </LoginWrapper>
            );
        }
        else {
            return <Redirect to='/'></Redirect>
        }
    }
}

const mapState = (state)=>({
    loginFlag: state.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
    login(account,password) {
        dispatch(actionCreator.loginCheck(account,password))
    }
})

export default connect(mapState,mapDispatch)(Login);