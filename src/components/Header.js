import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth  } from '../firebase'

function Header() {
  const[user] = useAuthState(auth);

  return (
    <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            alt ={user?.displayName}
            src={user?.photoURL}
            onClick ={() => auth.signOut()}
          />
          <AccessTimeIcon/>  
        </HeaderLeft>

        <HeaderSearch>
          <SearchIcon/>
          <input placeholder='search papafam'/>
        </HeaderSearch>

        <HeaderRight>
          <HelpOutlineIcon/>
        </HeaderRight> 
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  display:flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color:white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  display:flex;
  text-align: center;
  border-radius: 6px; 
  opacity: 1;
  background-color: #421f44;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  >input {
    background-color: transparent;
    border: none;
    outline: 0;
    color: white;
    text-align: center;
    min-width: 30vw;
  }

  /* > .MuiSvgIcon-root{
    padding-top:0;
  } */
`
const HeaderRight = styled.div`
  flex:0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`