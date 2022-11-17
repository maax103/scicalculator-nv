import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #5DB0E2;
    width: 100%;
    max-width: 100%;
    height: 80px;

    margin: auto;
    color: white;
    font-weight: bold;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    div{
        display: flex;
        justify-content: center;
        align-items:center
    }
    img{
        height: 50px;
        /* display: inline-block; */
    }
`