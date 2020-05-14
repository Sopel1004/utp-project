import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import Styled from './userDashstyle'

const UserDashboard = ({user}) => {
    const [events, setEvents] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventInput, setEventInput] = useState('')
    const [role, setRole] = useState('');
    const [food, setFood] = useState('');
    const [message, setMessage] = useState(null);
    const history = useHistory();

    useEffect(() => {
        try{
            const fetchData = async () => {
                const res = await fetch('http://localhost:3001/events');
                const result = await res.json();
                setEvents(result.events);
            }

            fetchData();
        }
        catch(error){
            console.log(error);
        }
    },[])

    const selectEvent = (id) => {
        setEventInput(id);
        const [event] = events.filter(event => event.id==id);
        setSelectedEvent(event);
    }

    const submitForm = async (e) => {
        e.preventDefault();
    
        if(selectedEvent !== null){
            const res = await fetch('http://localhost:3001/addParticipant',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                idEvent: selectedEvent.id,
                idUser: user.id,
                role: role,
                food: food
            })
            });
            const result = await res.json();
            console.log(result);
            setMessage(result.message);
        }
        else{
            setMessage('Pola są puste');
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
        <Styled.Container__Form onSubmit={submitForm}>
            <Styled.Container__Form__P as='label'>Wybierz wydarzenie:</Styled.Container__Form__P>
            <Styled.Container__Form__Input as='select' value={eventInput} onChange={e => selectEvent(e.target.value)}>
            <option value='' disabled></option>
            {events && events.map(event => <option key={event.id} value={event.id}>{event.name}</option>)}
            </Styled.Container__Form__Input>
            <Styled.Container__Form__P>Opis:</Styled.Container__Form__P>
            <span>{selectedEvent && selectedEvent.description}</span>
            <Styled.Container__Form__P>Data:</Styled.Container__Form__P>
            <span>{selectedEvent && selectedEvent.date}</span>
            <Styled.Container__Form__P as='label'>Typ uczestnictwa: </Styled.Container__Form__P>
            <Styled.Container__Form__Input as='select' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value='' disabled></option>
                <option value='słuchacz'>Słuchacz</option>
                <option value='autor'>Autor</option>
                <option value='sponsor'>Sponsor</option>
                <option value='organizator'>Organizator</option>
            </Styled.Container__Form__Input>
            <Styled.Container__Form__P as='label'>Rodzaj jedzenia:</Styled.Container__Form__P>
            <Styled.Container__Form__Input as='select' value={food} onChange={(e) => setFood(e.target.value)}>
                <option value='' disabled></option>
                <option value='bezPreferencji'>Bez preferencji</option>
                <option value='vege'>Wegetariańskie</option>
                <option value='bezGlutenu'>Bez glutenu</option>
            </Styled.Container__Form__Input>
            <Styled.Container__Form__Button type='submit'>Zapisz się</Styled.Container__Form__Button>
            {message && <p>{message}</p>}
        </Styled.Container__Form>
        </Styled.Container>

    );
}

export default UserDashboard;