import { useEffect, useState } from "react"; 
import EditEventDetails from "../../components/Dashboard/EditEventDetails/EditEventDetails";
import axios from "axios";

const EditEventDetailsPage = () => {

        // To store state variables
        const [events, setEvents] = useState([]);
        const [selectedEvent, setSelectedEvent] = useState(null);
    
        // Event handlers
        const closeEventDetails = () => {
            setSelectedEvent(null)
        };
        const handleSaveEdit =(editedEvent) => {
            axios
                .put(`http://localhost:3031/dashboard/${editedEvent.id}`, editedEvent, {
                    headers: {
                        'Content-Type': 'application.json',
                    },
                })
                .then((response) => {
                    eventListRequest();        
                    setSelectedEvent(null)
                })
                .catch((error) => {
                    console.error('Error updating event data', error)
                })
        };
    
        // To get data from all events
        function eventListRequest() {
            axios
                .get(`http://localhost:3031/dashboard`)
                .then(response => {
                    console.log('Successfully received data', response.data)
                    setEvents(response.data)
                }).catch((error) => console.log('Failed fetching data', error)
            );
        }
    
        useEffect(() => {
            eventListRequest();
        }, []);
    
        if (!events.length) {
            return<p>Loading...</p>
        };

    return (
        <div className="dashboard-content">
            <EditEventDetails 
                event={selectedEvent} 
                eventId={selectedEvent ? selectedEvent.id : null} 
                onSave={handleSaveEdit}
                closeEventDetails={closeEventDetails} 
            />
        </div>
    );
};

export default EditEventDetailsPage;