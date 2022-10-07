import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    display: grid;
    padding: 2rem;
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
            margin: 0px 0px;
            width: 250px;
            height: 250px;
            border: rgba(3, 0, 0, 0.63) 2px solid;
            border-radius: 100%;
        }
        h3 {
            margin-bottom: 8px;
        }
`
