import React from "react";
import Styled from "styled-components";
import { CgMore } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { BsSend } from "react-icons/bs"
import { BsDownload } from "react-icons/bs"



const Post = props => {
    return (
        <>
            <Board>
                <High>
                    <Info>
                        <Profile>
                            <img src="src/assets/Profile.jpg" alt="사진" />
                        </Profile>
                        <Name>
                            <span>jaehooo13</span>
                            <span>서울</span>
                        </Name>
                    </Info>
                    <span><CgMore /></span>
                </High>

                <Pic />

                <Emoiton>
                    <Left>
                        <AiOutlineHeart />
                        <FaRegComment />
                        <BsSend />
                    </Left>
                    <Right>
                        <span><BsDownload /></span>
                    </Right>
                </Emoiton>

                <Comment>
                    <div>좋아요 ㅇㅇ개</div>
                    <div>아이디 내용</div>
                </Comment>
                <Write type="text" placeholder="댓글 달기..." />
            </Board >
        </>
    );
};

export default Post;


const Board = Styled.section`
    border: 3px solid black;
    width: 40%;
    height: 50rem;
    margin: 0 auto;
    margin-top: 2rem;
`

const High = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
`

const Profile = Styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`

const Name = Styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const Info = Styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

const Pic = Styled.div`
    border: 2px dashed red;
    width: 100%;
    height: 30rem;
`

const Emoiton = Styled.div`
    border: 1px double green;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    font-size:2rem;
`

const Left = Styled.span`
    display: flex;
    gap: 0.5rem;
`

const Right = Styled.span`
    padding-right: 1rem;
`

const Comment = Styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 10rem;
`

const Write = Styled.input`
    border: 1px solid red;
    width: 100%;
    height: 4rem;
`