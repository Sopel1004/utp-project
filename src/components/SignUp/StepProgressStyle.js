import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Container__Step = styled.span`
  width: 2em;
  height: 2em;
  color: #fff;
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? '#15c5e8' : '#555')};

  &::after {
    content: '';
    width: 28%;
    height: 2px;
    position: absolute;
    background-color: ${(props) => (props.active ? '#15c5e8' : '#555')};
    z-index: -1;
  }
`;

const Styled = {
  Container,
  Container__Step,
};

export default Styled;
