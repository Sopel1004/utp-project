import React, {useState} from 'react'
import Users from './Users';
import Events from './Events';
import {useHistory} from 'react-router-dom';
import Styled from './adminDashStyle';

const AdminDashboard = () => {
    const [view, setView] = useState(null)
    const history = useHistory();

    const changeView = () => {
        switch(view){
            case 'users':
                return (<Users />);
                break;
            case 'events':
                return (<Events />);
                break;
            default: return(null);
        }
    }

    const logOut = () => {
        history.push('/login');
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
    }

    return(
        <Styled.Container>
            <Styled.Container__LogOutButton onClick={logOut}>Wyloguj</Styled.Container__LogOutButton>
            <Styled.Container__List>
                <Styled.Container__List__Element onClick={() => setView('users')}>Użytkownicy</Styled.Container__List__Element>
                <Styled.Container__List__Element onClick={() => setView('events')}>Wydarzenia</Styled.Container__List__Element>
                <Styled.Container__List__Element>Potwierdzenie zapisów</Styled.Container__List__Element>
            </Styled.Container__List>
            {changeView()}
        </Styled.Container>
    );
}

export default AdminDashboard;