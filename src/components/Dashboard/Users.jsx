import React, {useState, useEffect} from 'react';
import Styled from './componentsStyle';
import {ReactComponent as DeleteIcon} from '../../images/trash-2.svg';
import {ReactComponent as EditIcon} from '../../images/edit-3.svg';

const Users = () => {
    const [users, setUsers] = useState(null);

        useEffect(() => {
            try{
                const fetchData = async () => {
                    const res = await fetch('https://rest-api-utp.herokuapp.com/users');
                    const result = await res.json();
                    setUsers(result.users);
                }
    
                fetchData();
            }
            catch(error){
                console.log(error);
            }
        },[])
        
    return(
        <>
        <Styled.Button>Dodaj użytkownika</Styled.Button>
        <Styled.List>
        {users ? users.map(user => <Styled.List__Element key={user.id}><span>{user.firstName} {user.lastName}</span><EditIcon/><DeleteIcon/></Styled.List__Element>) : null}
        </Styled.List>
        </>
    );
}

export default Users;