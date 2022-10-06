import styled from 'styled-components';

export const Container = styled.header`
    background: blue;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1.2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background: blueviolet;
        border: 0;
        padding: 0 2rem;
        border-radius: 10rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`