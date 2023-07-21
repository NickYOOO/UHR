import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, getUserInfo } from '../api/firebase';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHeritage } from '../api/heritage';

const MyPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [comments, setComments] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const fetchComments = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/comments`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getUserInfo(auth.currentUser?.email)
      .then(info => {
        setUserName(info.displayName);
        setUserEmail(info.email);

        fetchComments();
      })
      .catch(error => {
        console.log('오류: ', error);
      });
  }, []);

  const goToDetail = async id => {
    setId(id);

    if (id) {
      try {
        const data = await getHeritage(id);
        const ccbaKdcd = data.children[9].value;
        const ccbaCtcd = data.children[10].value;
        const ccbaAsno = data.children[11].value;

        navigate(`/detail/${id}`, {
          state: { ccbaKdcd, ccbaCtcd, ccbaAsno },
        });
      } catch (error) {
        console.log('오류:', error);
      }
    }
  };

  return (
    <MyPageLayout>
      <MyPageParagraph>내 정보</MyPageParagraph>
      <MyPageBox>
        <div>{userName}</div>
        <div>{userEmail}</div>
      </MyPageBox>
      <Separator />
      <CommentParagraph>작성한 댓글</CommentParagraph>
      <CommentTable>
        <thead>
          <CommentRow>
            <CommentHeader>문화재명</CommentHeader>
            <CommentHeader>작성 댓글</CommentHeader>
            <CommentHeader>작성일자</CommentHeader>
          </CommentRow>
        </thead>
        <tbody>
          {comments &&
            comments.map((comment, index) => {
              return (
                <CommentRow key={index}>
                  <CommentCell
                    onClick={() => {
                      goToDetail(comment.hId);
                    }}
                  >
                    {comment.hName}
                  </CommentCell>
                  <CommentCell>{comment.content}</CommentCell>
                  <CommentCell>{comment.modifyTime}</CommentCell>
                </CommentRow>
              );
            })}
        </tbody>
      </CommentTable>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  max-width: 1200px;
  height: 978px;
  margin: 50px auto;
  padding: 20px;
  background-color: #08214110;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    margin: 50px 16px;
  }
`;

const MyPageParagraph = styled.h2`
  margin: 20px;
  color: #082141;
  font-size: 22px;
`;

const MyPageBox = styled.div`
  margin: 30px;
  color: #000;
  font-size: 18px;
  line-height: 2;
`;

const Separator = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 2px solid #082141;
`;

const CommentParagraph = styled.h3`
  margin: 40px 20px;
  color: #082141;
  font-size: 18px;
  margin-bottom: 20px;
`;

const CommentTable = styled.table`
  width: 95%;
  margin: 0 auto;
`;

const CommentHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #000;
  text-align: left;
  color: #000;
  font-size: 16px;

  &:nth-child(3) {
    width: fit-content;
  }
`;

const CommentRow = styled.tr`
  &:nth-child(even) {
    /* 테이블 행 추가할 스타일 코드있으면 넣기 */
  }
`;

const CommentCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #000;
  font-size: 15px;
  white-space: pre-line;
  word-wrap: break-word;

  &:nth-child(1) {
    width: fit-content;
  }

  &:nth-child(2) {
  }

  &:nth-child(3) {
    white-space: nowrap;
  }
`;
