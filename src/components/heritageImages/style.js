import { styled } from 'styled-components';

export const HeritageImagesLayout = styled.div`
  position: relative;
`;

export const HeritageImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto));
  grid-template-rows: repeat(auto-fill);
  grid-gap: 20px;
  justify-content: center;
  place-items: center;
  margin: 50px 0;
  padding: 1px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(200px, auto));
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(200px, auto));
  }
`;

export const HeritageImagesItem = styled.img`
  width: 375px;
  height: 250px;
  background-color: #08214110;
  object-fit: contain;
`;

export const HeritageImagesButton = styled.button`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 250px;
  padding: 100px 0 0 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0));
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
