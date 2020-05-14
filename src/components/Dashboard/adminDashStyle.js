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

const Container__List = styled.ul`
    width: 100%;
    padding: 0.25em;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
`;

const Container__List__Element = styled.li`
    background-color: #15c5e8;
    color: #fff;
    padding: 0.25em;
    cursor: pointer;
    text-align: center;
    border-right: 1px solid #f1f1f1;

    &:last-child{
        border: none;
    }
`;

const Container__LogOutButton = styled.button`
    background-color: transparent;
    border: 1px solid #15c5e8;
    color: #15c5e8;
    cursor: pointer;
    padding: 0.25em 0.5em;
    align-self: flex-start;
`;

const Styled = {
    Container,
    Container__List,
    Container__List__Element,
    Container__LogOutButton
}

export default Styled;