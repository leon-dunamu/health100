import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HEALTH_COLOR } from '../../modules/style/Color';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding-top: 8px;
  z-index: 10;
  box-shadow: 0 6px 10px -10px rgba(1, 1, 1, 0.3);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1080px;
  padding-left: 32px;
  font-size: 42px;
  font-weight: 300;
  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

export const MenuWrapper = styled.ul`
  float: right;
  width: 900px;
  height: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const SLink = styled(Link)`
  margin-right: 1.4rem;
  margin: 1px;
  font-size: 20px;
  width: 30%;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => (props.current ? HEALTH_COLOR : 'white')};
  font-weight: ${(props) => (props.current ? 300 : 200)};
  transition: background-color 0.3s;
  &:last-child {
    margin-right: 2rem;
  }
  &:hover {
    background-color: ${(props) =>
      props.current ? HEALTH_COLOR : 'rgba(46, 152, 217, 0.1)'};
    cursor: pointer;
    transition: background-color 0.3s;
  }
  text-align: center;
  line-height: 4rem;
  color: ${(props) => (props.current ? 'white' : 'black')};
`;
