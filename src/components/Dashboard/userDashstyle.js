import styled from 'styled-components';

const Container = styled.div`
    width: 50%;
    min-height: 50%;
    padding: 0.25em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f1f1f1;
`;

const Container__LogOutButton = styled.button`
    background-color: transparent;
    border: 1px solid #15c5e8;
    color: #15c5e8;
    cursor: pointer;
    padding: 0.25em 0.5em;
    align-self: flex-start;
`;

const Container__Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Container__Form__Input = styled.input`
    width: 50%;
    border: 1px solid #000;
    margin: 0.5em 0;
`;

const Container__Form__P = styled.p`
    font-weight: 700;
`;

const Container__Form__Button = styled.button`

    width: 40%;
    background-color: #15c5e8;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.5em 0.75em;
    margin: 0.25em 0;
`;

const Styled = {
    Container,
    Container__LogOutButton,
    Container__Form,
    Container__Form__Input,
    Container__Form__P,
    Container__Form__Button
}

export default Styled;