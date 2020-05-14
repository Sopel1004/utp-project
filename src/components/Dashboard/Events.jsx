import React, {useState, useEffect} from 'react';
import Styled from './componentsStyle';
import {ReactComponent as DeleteIcon} from '../../images/trash-2.svg';
import {ReactComponent as EditIcon} from '../../images/edit-3.svg';

const Events = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        try{
            const fetchData = async () => {
                const res = await fetch('https://rest-api-utp.herokuapp.com/events');
                const result = await res.json();
                setEvents(result.events);
            }

            fetchData();
        }
        catch(error){
            console.log(error);
        }
    },[])

    return(
        <>
        <Styled.Button>Dodaj wydarzenie</Styled.Button>
        <Styled.List>
        {events ? events.map(event => <Styled.List__Element key={event.id}><span>{event.name} {event.date}</span><EditIcon/><DeleteIcon/></Styled.List__Element>) : null}
        </Styled.List>
        </>
    );
}

export default Events;