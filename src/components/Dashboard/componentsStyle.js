import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const List__Element = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 50px 50px;
    justify-items: stretch;
    align-items: center;
    margin: 0.5em 0;
`;

const Button = styled.button`
    background-color: transparent;
    border: 1px solid #15c5e8;
    color: #15c5e8;
    cursor: pointer;
    padding: 0.25em 0.5em;
`;

const Styled = {
    List,
    List__Element,
    Button
}

export default Styled;