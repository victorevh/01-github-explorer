import styled from "styled-components";

export const Container = styled.div`
    h1 {
        margin: 50px 0px;
        display: flex;
        justify-content: center;
    }

    ul {
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        list-style-type: none;

            li {
                background-color: var(--bg-secondary);
                border: solid var(--border-primary) 0.2px;
                border-radius: 0.5rem;
                margin: 40px;

                    div {
                        width: 18.15rem;
                        height: 18.15rem;

                        h3 {
                            margin: 8px;
                        
                        }

                        p {
                            font-size: 14px;
                            color: var(--color-textCard);
                            margin: 0px 8px;
                            height: 15%;
                        }
    
                        img {
                            width: 100%;
                            height: 30%;
                        }
            
                        button {
                            
                            margin: 8px;
                            
                            a {
                                display: inline-block;
                                text-decoration: none;
                                color: black;
                            }
                        }

                    }  

            }
    }
`
