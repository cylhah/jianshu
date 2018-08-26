import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    display: flex;
    height: 56px;
    padding: 0 50px;
    border-bottom: 1px solid rgb(230,230,230);
`

export const Logo = styled.div`
    cursor: pointer;
    display: block;
    width: 100px;
    height: 56px;
    background-image: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    position: relative;
    width: 77%;
    padding-right: 150px;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 20px;
    color: #666;
    background: #eee;
    transition: width 0.7s;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 300px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    background: white;
    visibility: hidden;
    left: 150px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoItem = styled.a`
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`

export const Additon = styled.a.attrs({
    href: '/'
})`
    display: inline-block;
    margin: 9px;
    padding: 11px 20px;
    text-decoration: none;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 15px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: white;
        background: #ec6149;
    }
`

