import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;
    height: 65px;
    justify-content: center;
    a {
        color: #fff;
        font-family: sans-serif;
        font-size: 18px;
        text-decoration: none;
        margin: 3px;
    }
    a:hover {
        text-decoration: underline;
    }
`
