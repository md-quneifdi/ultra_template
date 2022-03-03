import styled from 'styled-components';

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background-color: #444;
    position: relative;
    border-bottom: 1px solid #000;
`
export const Logo = styled.div`
    width: 50%;
    float: left;
    color: #ff5722;
    @media (min-width : 992px) and (max-width : 1170px) {
        width: 40%;
    }
    @media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`

export const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    @media (min-width : 992px) and (max-width : 1170px) {
        width: 60%;
    }
    @media (max-width : 991px) {
        width: 100%;
        float: none;
        margin-left: -10px;
    }
    @media (max-width : 575px) {
        width: 90%;
        float: none;
        margin-left: -10px;
    }
`
export const ListItem = styled.li`
    display: inline-block;
`
export const Anchor = styled.a`
    display: block;
    color: #ff5722;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #000;
        cursor: pointer;
    }
`
