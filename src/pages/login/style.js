import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    z-index: 0;
    top: 56px;
    width: 100%;
    height: 100%;
    background: #eee;
    .loginBox{
        width: 400px;
        height: 220px;
        margin: 80px auto;
        background: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        padding-top: 20px;
        .myInput{
            display: block;
            width: 200px;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            margin: 10px auto;
            color: #777;
        }
        .loginBtn{
            display: block;
            outline: none;
            cursor:pointer;
            width: 220px;
            height: 30px;
            line-height: 30px;
            color: white;
            background: #3194d0;
            border-radius: 15px;
            border: none;
            margin: 10px auto;
        }
    }
`