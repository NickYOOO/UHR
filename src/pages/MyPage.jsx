import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, getUserInfo, watchAuthStateChange } from '../api/firebase';
import { useNavigate } from 'react-router-dom';
import { getHeritage } from '../api/heritage';
import { useQuery } from '@tanstack/react-query';
import { getComment } from '../api/comment';
import Loading from '../components/loading/Loading';

const MyPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const currentUserUid = auth.currentUser ? auth.currentUser.uid : null;

  const { data, isLoading } = useQuery(
    ['comment', 'myPage', currentUserUid],
    async () => await getComment(currentUserUid)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    watchAuthStateChange(user => {
      if (user) {
        getUserInfo(auth.currentUser?.email)
          .then(info => {
            setUserName(info.displayName);
            setUserEmail(info.email);
          })
          .catch(error => {
            console.log('오류: ', error);
          });
      } else {
        navigate('/');
      }
    });
  }, []);

  const goToDetail = async id => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyPageLayout>
      <MyPageParagraph>내 정보</MyPageParagraph>
      <MyPageBox>
        <MyPageItem>
          <p className="category">이름</p>
          <p>{userName}</p>
        </MyPageItem>
        <MyPageItem>
          <p className="category">이메일</p>
          <p>{userEmail}</p>
        </MyPageItem>
      </MyPageBox>
      <Separator />
      <CommentParagraph>작성한 댓글</CommentParagraph>
      {data?.length !== 0 ? (
        <CommentTable>
          <thead>
            <CommentRow>
              <CommentHeader>문화재명</CommentHeader>
              <CommentHeader>작성 댓글</CommentHeader>
              <CommentHeader>작성일자</CommentHeader>
            </CommentRow>
          </thead>
          <tbody>
            {data &&
              data.map((comment, index) => {
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
      ) : (
        <NoCommentParagraph>작성한 댓글이 없습니다</NoCommentParagraph>
      )}
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
`;

const MyPageItem = styled.div`
  display: flex;
  margin: 10px 0;
  font-weight: 700;

  & .category {
    width: 65px;
    margin-right: 10px;
    border-right: 3px solid #082141;
    font-weight: 600;
  }
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
  table-layout: fixed;
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
  background-color: #ffffff;

  &:last-child td {
    border: none;
  }
`;

const CommentCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #000;
  font-size: 15px;
  white-space: pre-line;
  word-wrap: break-word;

  &:nth-child(1) {
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  &:nth-child(2) {
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:nth-child(3) {
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const NoCommentParagraph = styled.p`
  margin-top: 50px;
  text-align: center;
`;
