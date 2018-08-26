import React, { PureComponent } from 'react';
import {Rec} from '../style'

class Recommend extends PureComponent {
    render() {
        return (
            <Rec>
                <a href="" className='rec-item'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt=""/>
                </a>
                <a href="" className='rec-item'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt=""/>
                </a>
                <a href="" className='rec-item'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/>
                </a>
                <a href="" className='rec-item'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
                </a>
                <a href="" className='rec-item'>
                    <img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/>
                </a>
                <div className='download'>
                    <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <div className='content'>
                        <p>下载简书手机App ></p>
                        <p className='content-item2'>随时随地发现和创作内容</p>
                    </div>
                </div>
            </Rec>
        );
    }
}

export default Recommend;