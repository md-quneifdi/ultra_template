import styled from "styled-components";

export const HomeSection = styled.div `
    height: 500px;
    background-image: url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;

    @media (max-width:991px) {
        font-size: 30px;
        color: #fff;
    }
    @media (max-width:575px) {
        height: 550px;
    }
    

`
export const HomeInformation = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #000;  
    @media (max-width:991px) {
        font-size: 41px;
        margin-bottom: 5px;
    }
    @media (max-width:575px) {
        font-size: 30px;
        margin-bottom: 5px;
    }
`
export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: #ff5722;
    margin-bottom: 20px;
    @media (max-width:991px) {
        margin-top: 20px;
    }
    @media (max-width:575px) {
        font-size: 22px;
    }
`
export const Homedesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    @media (max-width:575px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
`
export const Span = styled.span `
    color: #000
`
export const HomeBTN = styled.button `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
    background: #fff;
    color: #eb5424
    }
    @media (max-width:575px) {
        font-size: 16px;
        padding: 10px;
        margin-bottom: -15 px;
    }
`

