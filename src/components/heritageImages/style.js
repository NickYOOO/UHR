import { styled } from 'styled-components';

export const HeritageImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto));
  grid-template-rows: repeat(auto-fill);
  grid-gap: 20px;
  justify-content: center;
  place-items: center;
  margin: 50px 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(200px, auto));
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, minmax(200px, auto));
  }
`;

export const HeritageImagesItem = styled.img`
  width: 375px;
  height: 250px;
  background-color: #08214110;
  object-fit: contain;
`;
