import React from 'react';
import { FooterContainer, FooterIcons } from './style';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

function Footer() {
  return (
    <FooterContainer>
      <p>SpartaCodingClub</p>
      <p>유지완, 노진철, 최윤서, 임지영, 전수정</p>
      <p> &copy; 2023 5MyGod! All rights reserved</p>

      <FooterIcons>
        <a href="https://github.com/NickYOOO/UHR">
          <FaGithub size="35" color="#ffffff" />
        </a>
        <a href="https://www.figma.com/file/rsgKzR7L6PkEChGLXin56x/5%EC%A1%B0%3A-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%AC%B8%ED%99%94%EC%9C%A0%EC%82%B0-%EB%8B%B5%EC%82%AC%EA%B8%B0---Design?type=design&node-id=126%3A153&mode=design&t=ESyyUcq3jTfhx52s-1">
          <FaFigma size="35" color="#ffffff" />
        </a>
        <a href="https://www.notion.so/5-5-my-god-f05ebaf396004eaaada436eceb0e030c?pvs=4">
          <SiNotion size="35" color="#ffffff" />
        </a>
      </FooterIcons>
    </FooterContainer>
  );
}

export default Footer;
