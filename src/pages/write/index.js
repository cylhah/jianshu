import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent {
    render() {
        if(this.props.loginFlag){
            return (
                <div>
                    写文章页面
                </div>
            );
        }
        else {
            return <Redirect to='/login'></Redirect>
        }
    }
}

const mapState = (state)=>({
    loginFlag: state.getIn(['login','login'])
})

export default connect(mapState,null)(Write);