import React, { useEffect } from 'react';
import styled from 'styled-components';

const MainBoxLayout = styled.div`
  max-width: 1200px;
  height: 978px;

  margin: 50px auto;
  padding: 20px;

  background-color: rgba(8, 33, 65, 0.05);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`;

const UserInfoBox = styled.div`
  margin: 20px;

  color: #082141;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InfoContainer = styled.div`
  margin: 20px 30px;

  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 2;
`;

const Separator = styled.hr`
  margin: 20px 0;

  border: none;
  border-top: 2px solid #224f89;
`;

const CommentTitle = styled.h2`
  margin: 50px 20px;

  color: #082141;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

const CommentTable = styled.table`
  width: 100%;

  margin: 50px 20px 20px;

  border-collapse: collapse;
`;

const CommentHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #000;

  text-align: left;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CommentRow = styled.tr`
  &:nth-child(even) {
    /* 테이블 행 추가할 스타일 코드있으면 넣기 */
  }
`;

const CommentCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MyPageLayout = () => {
  const comments = [
    {
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      comments: '서울 숭례문(서울 崇禮門)',
      originTime: '2023. 7. 17. 오후 1:12:30',
    },
    {
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      comments: '서울 숭례문(서울 崇禮門)',
      originTime: '2023. 7. 17. 오후 1:12:30',
    },
    {
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      comments: '서울 숭례문(서울 崇禮門)',
      originTime: '2023. 7. 17. 오후 1:12:30',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MainBoxLayout>
      <UserInfoBox>내 정보</UserInfoBox>
      <InfoContainer>
        <div>르탄이</div>
        <div>test@test.com</div>
      </InfoContainer>
      <Separator />
      <CommentTitle>작성한 댓글</CommentTitle>
      <CommentTable>
        <thead>
          <CommentRow>
            <CommentHeader>문화재명</CommentHeader>
            <CommentHeader>작성 댓글</CommentHeader>
            <CommentHeader>작성일자</CommentHeader>
          </CommentRow>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <CommentRow key={index}>
              <CommentCell>{comment.ccbaMnm1}</CommentCell>
              <CommentCell>{comment.comments}</CommentCell>
              <CommentCell>{comment.originTime}</CommentCell>
            </CommentRow>
          ))}
        </tbody>
      </CommentTable>
    </MainBoxLayout>
  );
};

const MyPage = () => {
  return (
    <>
      <MyPageLayout />
    </>
  );
};

export default MyPage;
