import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ccc;
    &:hover{
        background: rgb(247,247,247);
    }
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    height: 100px;
`

export const TopicItem = styled.div`
    float: left;
    text-align: top;
    background: #f7f7f7;
    padding-right: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    margin: 0 18px 18px 0;
    border-radius: 4px;
    .topic-pic{
        display: block;
        margin-right: 10px;
        float: left;
        width: 32px;
        height: 32px;
    }
`

export const ListItem = styled.div`
    padding: 15px 2px 20px 0;
    margin-bottom: 15px;
    border-top: 1px solid #f0f0f0;
    .item-content{
        display: inline-block;
        width: 480px;
        p{
            margin: 15px 0;
        }
        .content-title{
            margin-top: 0;
            a{
                text-decoration: none;
                color: black;
                font-size: 18px;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .content-part{
            color: #999;
            font-size: 13px;
            line-height: 24px;
        }
        .content-menu{
            a{
                color: #b4b4b4;
                text-decoration: none;
                margin-right: 10px;
                &:hover{
                    color: rgb(120,120,120);
                }
            }
            i{
                font-size: 12px;
            }
            color: #b4b4b4;
            font-size: 12px;
        }
    }
    .item-img{
        display: inline-block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 4px;
    }
`

export const Rec = styled.div`
    margin-top: 30px;
    .rec-item{
        img{
            width: 280px;
            height: 50px;
            margin-bottom: 5px;
        }
    }
    .download{
        cursor: pointer;
        margin: 10px 0;
        width: 100%;
        border: 1px solid #f0f0f0;
        background: white;
        padding: 10px 22px 10px 16px;
        border-radius: 6px;
        img{
            display: inline-block;
            width: 60px;
            height: 60px;
        }
        p{
            margin: 8px 0;
        }
        .content{
            width: 145px;
            display: inline-block;
            vertical-align: top;
            padding: 5px 0 0 15px;
            .content-item2{
                font-size: 13px;
                color: #999;
            }
        }
    }
`