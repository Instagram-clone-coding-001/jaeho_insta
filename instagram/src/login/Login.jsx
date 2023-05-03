import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = props => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/main")
    };

    return (
        <Form>
            <div>이메일</div>
            <Inputid type="text" placeholder="example@naver.com" />
            <div>비밀번호</div>
            <Inputid type="password" placeholder="비밀번호를 입력하세요" />
            <ButtonGroup>
                <Button>회원가입</Button>
                <Button onClick={handleButtonClick}>로그인</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Login;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 3px solid black;
  border-radius: 10px;
  width: 20%;
  margin: 0 auto;
  margin-top: 200px;
`;

const Inputid = Styled.input`
  padding: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 3px solid #CCC;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonGroup = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Button = Styled.button`
  width: 100px;
  height: 50px;
`