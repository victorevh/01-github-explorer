import styled from 'styled-components';


export const Container = styled.div`
    background: white;
    display: grid;
`
export const Content = styled.div`
        margin: 5rem 0; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1, h2 {
            margin: 0px 0px 24px;
        }
        p {
            color: black;
        }
`
export const DivProfile = styled.div`
        margin: 0px 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 18%;
            border: rgba(3, 0, 0, 0.63) 2px solid;
            border-radius: 100%;
        }   
        h3 {
            margin-bottom: 8px;
        }
`
export const Foot = styled.div`
    padding: 5rem 1.5rem 0rem;
    display: flex;
    justify-content: center;
    img {
        width: 55%;
    }
`

export const About = styled.div`
    display: flex;
    padding: 0em 0em 8em 0em;
    background: #7510F7;;
    h1, p, span {
        color: white;
    }
`