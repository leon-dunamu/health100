import styled from 'styled-components';
import {
  DeskTopWidth,
  TabletWidth,
  SmallTabletWidth,
  SmartPhoneWidth,
} from 'components/modules/style/Width';

export const Container = styled.div`
  display: absolute;
  float: right;
  position: sticky;
  top: 0;
  box-shadow: 2px 0px 6px 3px rgba(1, 1, 1, 0.1);
  width: 52%;
  height: ${window.innerHeight - 300}px;
  background-color: #f9f9f9;
  padding: 24px;
  padding-top: 60px;
  padding-bottom: 190px;
  overflow: hidden;
  z-index: 5;

  @media (max-width: 960px) {
    width: 62%;
  }
  @media (max-width: 690px) {
    position: fixed;
    top: 4rem;
    width: 90%;
  }
`;

export const CloseButton = styled.a`
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  font-family: 'Jua', sans-serif;
`;
