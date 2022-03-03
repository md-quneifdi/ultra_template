import styled from "styled-components";

export const ContactSection = styled.div `
    padding: 50px 0;
    text-align: center;
    height: 90vh;
    margin-bottom: 20px;
`
export const ContactTitle = styled.h2 `
    font-size: 60px;
    margin-bottom: 30px;
    width: 100%;
    @media (max-width:575px) {
        font-size: 40px
    }
`
export const Span = styled.span `
    font-weight: normal;
`
export const Form = styled.form `
    width: 70%;
    margin: auto;
`

export const Input = styled.input `
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`
export const FormInput = styled.div `
    overflow: hidden;
`
export const InputText = styled(Input) `
    float: left;
    width: 49%;
     @media (max-width:991px) {
         width: 100%;
    }
     @media (max-width:575px) {
         width: 100%;
    }
`
export const InputEmail = styled(Input) `
    float: right;
    width: 49%;
    @media (max-width:991px) {
         width: 100%;
    }
    @media (max-width:575px) {
         width: 100%;
    }
`
export const InputSubject = styled(Input) `
    width: 100%;
`
export const TextArea = styled.textarea `
    width: 99%;
    height: 150px;
    outline: 0;
    background: #ccc;
    overflow: hidden;
    @media (max-width:575px) {
        width: 97%;
    }
`
export const InputSubmit = styled(Input) `
    width: 100%;
    background: #ff5722;
    border: 1px solid #ccc;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 12px;
    font-size: 18px;
    margin-bottom: 20px;
`