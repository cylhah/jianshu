import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {DetailWrapper} from './style';
import {actionCreator} from './store/actionCreator'

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <p className='title'>{this.props.title}</p>
                <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}}>
                </div>
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state)=>({
    title: state.getIn(['detail','detail','title']),
    content: state.getIn(['detail','detail','content'])
})

const mapDispatch = (dispatch)=>({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id))
    }
})

export default connect(mapState,mapDispatch)(Detail);