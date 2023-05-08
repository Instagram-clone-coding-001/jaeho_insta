import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "styled-components"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineMessage } from "react-icons/ai"
import { AiFillLock } from "react-icons/ai"
import Post from "../article/Post";

const Header = props => {

  const navigate = useNavigate();
  const logoutButtonClick = () => {
    navigate("/")
  }

  return (
    <>
      <Top>
        <div><AiOutlineInstagram /></div>
        <Input type="text" placeholder="검색하기" />
        <ImgGroup>
          <div><AiOutlineMessage /></div>
          <div onClick={logoutButtonClick}><AiFillLock /></div>
        </ImgGroup>
      </Top>
      <Post />
    </>
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
  margin-left: 5rem;
`

const ImgGroup = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  cursor : pointer;
`;