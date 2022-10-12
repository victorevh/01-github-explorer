import styled from 'styled-components';

export const Container = styled.header`

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    min-height: 20vh;

    padding: 1.2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Bttn = styled.div`
    display: flex;
    align-items: center;
    a{
        background: none;
        text-decoration: none;
        padding: 0 2rem;
        color: black;
    }

    button{
        cursor: pointer;
        background: none ;
        font-size: 1rem;
        color: #7510F7;
        border-color: #7510F7;
        border-width: 2px;
        padding: 0 2rem;
        border-radius: 10rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
    }

    }`