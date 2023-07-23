import { styled } from 'styled-components';

export const HeritageDetailLayout = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;

export const HeritageDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeritageImageParagraph = styled.p`
  width: 550px;
  text-align: center;
  font-weight: 600;
`;

export const HeritageImage = styled.img`
  width: 550px;
  height: 350px;
  object-fit: contain;
`;

export const HeritageDetailTable = styled.table`
  width: 550px;
  height: 300px;

  tr {
    border-bottom: 1px solid #082141;
  }

  th,
  td {
    line-height: 1.5;
    text-align: left;
    vertical-align: middle;
  }

  th {
    width: 120px;
  }

  @media screen and (max-width: 580px) {
    width: 350px;
  }
`;

export const HeritageDetailParagraph = styled.p`
  margin-top: 30px;
  font-size: 15px;
  line-height: 1.6;
`;
