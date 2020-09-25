import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import introImg from 'assets/img/intro_background.jpg';
import {
  DeskTopWidth,
  TabletWidth,
  SmallTabletWidth,
  SmartPhoneWidth,
} from 'components/modules/style/Width';
import { HEALTH_COLOR } from 'components/modules/style/Color';

const ScrollFade = keyframes`
0% {
  opacity: 1;
}
33% {
  opacity : 0.9;
}
66% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Container = styled.div`
  width: 100vw;
  position: relative;
`;

export const IntroTitle = styled.h1`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  align-self: flex-start;
  padding-top: 4rem;
  padding-left: 8%;
  padding-bottom: 8rem;
  font-size: 28px;
  font-weight: 200;
  line-height: 48px;
  color: #666666;
`;

export const IntroImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${introImg});
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
export const IntroDesc = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 18px;
  color: white;
  animation: ${ScrollFade} 2s infinite;
`;
export const Scroll = styled.div`
  text-align: center;
  font-size: 32px;
  line-height: 28px;
  color: white;
  animation: ${ScrollFade} 2s infinite;
`;

export const IntroItem = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: fixed;
  @media (max-width: ${TabletWidth}) {
    height: 50vh;
  }
  @media (max-width: ${SmallTabletWidth}) {
    height: 38vh;
  }
  @media (max-width: ${SmartPhoneWidth}) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  width: 52%;
  height: 100%;
  overflow: hidden;
  @media (max-width: ${SmallTabletWidth}) {
    width: 44%;
  }
  @media (max-width: ${SmartPhoneWidth}) {
    width: 100vw;
    display: block;
    height: 90vw;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  &:hover {
    width: 103%;
    height: 103%;
    transition: all 0.4s;
  }
`;

export const Desc = styled.div`
  width: 48%;
  height: 100%;
  text-align: center;
  line-height: normal;
  display: inline-block;
  @media (max-width: ${SmallTabletWidth}) {
    width: 56%;
  }
  @media (max-width: ${SmartPhoneWidth}) {
    width: 100vw;
    display: block;
  }
`;

export const Contents = styled.div`
  width: 70%;
  padding-left: 15%;
  margin-top: 25%;
  text-align: ${(props) => props.direct};
  font-size: 30px;
  line-height: 48px;
  font-weight: 300;
  transition: all 0.4s;
  &:hover {
    margin-top: 22%;
    width: 76%;
    padding-left: 12%;
    transition: all 0.4s;
  }
  @media (max-width: ${TabletWidth}) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: ${SmartPhoneWidth}) {
    font-size: 16px;
    margin-top: 13%;
    line-height: 28px;
    &:hover {
      margin-top: 10%;
      transition: all 0.4s;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 160px;
`;

export const LoginButton = styled(Link)`
  position: absolute;
  width: 60%;
  max-width: 280px;
  box-shadow: 0px 8px 10px -6px rgb(100, 100, 100);
  background-color: ${HEALTH_COLOR};
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 48px;
  border-radius: 24px;
  text-align: center;
  line-height: 48px;
  color: white;
  font-size: 22px;
  font-weight: 300;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3fbbed;
    transition: background-color 0.3s;
  }
`;
