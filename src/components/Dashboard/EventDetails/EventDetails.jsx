import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3031/events/${eventId}`)
            .then(response => {
                setEventDetails(response.data)
            })
            .catch(error => {
                console.error('Error fetching data', error)
            });
    }, [eventId]);

    if (!eventDetails) {
        return <div>Loading...</div>
    };

    return (
        <div>
            <h1>{eventDetails.eventName}</h1>
            <p>Date: {eventDetails.eventDate}</p>
            <p>Time: {eventDetails.eventTime}</p>
            <p>Location: {eventDetails.eventLocation}</p>
        </div>
    )
}

export default EventDetails;