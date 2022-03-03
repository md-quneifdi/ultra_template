import styled from "styled-components";

export const SocialSection = styled.div `
    height: auto;
    overflow: hidden;
`

export const Social = styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 70px 0 50px 60px;
    background: ${props => props.item === "1" ? "#3b5998" : ""};
    background: ${props => props.item === "2" ? "#498cbf" : ""};
    background: ${props => props.item === "3" ? "#cc2127" : ""};
    
    @media (max-width:991px) {
            padding: 30px;
            width: calc(100% / 3);
    }
    @media (max-width:575px) {
            width: 100%;
            float: none;
            padding: 70px 0 100px 60px;
    }
`
export const SocialIcon = styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: ${props => props.item === "1" ? "#3b5998" : ""};
    color: ${props => props.item === "2" ? "#498cbf" : ""};
    color: ${props => props.item === "3" ? "#cc2127" : ""};
    float: left;
    cursor: pointer;
    margin-right: 10px;
     @media (min-width:576px) and (max-width:991px) {
         height: 39px;
         width: 39px;
         margin-left: -21px;
         line-height: 40px;
         border-radius: 50%;
         box-sizing: border-box;
         margin-top: 5px;
         vertical-align: middle; 
    }
`
export const SocialContent = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
    margin-top: -7px;
    @media (min-width:576px) and (max-width: 991px) {
         font-size: 18px;
    }
`
export const Span = styled.span `
    display: block;
    margin-bottom: 7px;
    margin-top: 1px;
`
export const SpanInfo = styled.span `
    font-weight: normal
`