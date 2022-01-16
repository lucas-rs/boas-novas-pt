import styled from "styled-components";
import background from "../../assets/home.jpg";
import city from "../../assets/portugalbackground.jpg";

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: stretch;
    flex-direction: column;
    height: 100vw;
`
export const ImageBackgroundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #222;
    width: 100%;
    height: 600px;
    min-height: 400px;
`
export const ImageBackground = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    background-image: url(${background});
    background-position: 50% 40%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
`
export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    background-color: rgba(200, 23, 56, 1);
`
export const ContactContainer = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    padding: 20px;
    z-index: 5;
    width: 100%;
    max-width: 1200px;
    h3 {
        color: #fff;
        font-size: 2rem;
        font-family: sans-serif;
    }
    h1 {
        color: #fff;
        font-size: 3.5rem;
        font-family: sans-serif;
    }
`
export const ContactListContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    
`
export const TextContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    border-radius: 12px;
    padding: 1rem;
    flex-wrap: wrap;
    h1 {
        color: #fff;
        font-size: 3.5rem;
        font-family: sans-serif;
        line-height: 3.5rem;
    }
    h3 {
        color: #fff;
        font-size: 1.5rem;
        font-family: sans-serif;
        font-size: 1.6rem;
        margin: 0 10px;
    }
`
export const CityBackground = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #222;
    background-image: url(${city});
    background-position: 50% 70%;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 800px;
`
