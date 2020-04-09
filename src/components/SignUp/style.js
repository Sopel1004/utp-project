import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em;
  background-color: #f1f1f1;
  border-radius: 0.25em;

  @media (min-width: 64em) {
    width: 50%;
    height: 70%;
  }
`;

const Container__Title = styled.h1`
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  color: #15c5e8;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.75em;

  @media (min-width: 64em) {
    width: 50%;
  }
`;

const Form__Subtitle = styled.h2`
  font-weight: 700;
  font-family: 'PT Sans', sans-serif;
  color: #777;
`;

const Form__Input = styled.input`
  width: 100%;
  padding: 0.25em 0.75em;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 1em;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid #15c5e8;
  }
`;

const Form__Label = styled.label`
  transform: ${(props) =>
    props.active ? 'translate(0, 0)' : 'translate(0.75em, 1.25em)'};
  color: ${(props) => (props.active ? '#000' : '#777')};
  transition: all 0.25s ease;
`;

const Form__ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Form__Button = styled.button`
  width: 40%;
  color: #fff;
  background-color: #15c5e8;
  padding: 0.25em 0.75em;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
  align-self: center;
  margin-top: 1em;

  &:hover {
    opacity: 0.9;
  }
`;

const Form__BackButton = styled(Form__Button)`
  && {
    background-color: transparent;
    border: 1px solid #15c5e8;
    color: #15c5e8;
  }
`;

const Styled = {
  Container,
  Container__Title,
  Form,
  Form__Subtitle,
  Form__Input,
  Form__Label,
  Form__ButtonsGroup,
  Form__Button,
  Form__BackButton,
};

export default Styled;
