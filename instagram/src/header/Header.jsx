import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components"


const Header = props => {

  const navigate = useNavigate();
  const logoutButtonClick = () => {
    navigate("/")
  }

  return (
    <Top>
      <div>사진</div>
      <Input type="text" placeholder="검색하기" />
      <ButtonGroup>
        <Button>메세지</Button>
        <Button onClick={logoutButtonClick}>로그아웃</Button>
      </ButtonGroup>
    </Top>
  )
};

export default Header;

const Top = Styled.header`
    width: 100%;
    font-size: 3rem;
    background-color: yellowgreen;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const Input = Styled.input`
  width: 40%;
  height: 40px; 
`
export const ButtonGroup = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Button = Styled.button`
  width: 100px;
  height: 50px;
`