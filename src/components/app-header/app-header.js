import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        color: grey;
        :hover{
        color: green;
        }
    }
    h2{
        font-size: 1.2rem;
        color: grey;
        :hover{
            color: green;
            }
    }
`
const AppHeader = () =>{
    return(
        <Header>
            <h1>Козин-Поздняков Василий</h1>
            <h2>5 записей из них понравилось 0</h2>
        </Header>
    )
}
export default AppHeader;