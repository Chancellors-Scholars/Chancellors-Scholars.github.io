import { useState, useEffect } from "react";
import { fetchEventData } from '../scripts/event-script';
import { EventData } from '../types';
import EventsGrid from "../components/EventsGrid";

function Events(){
    // Events from google sheet (initially empty)
    const [events, setEvents] = useState<EventData[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Log the event list (debugging)
    useEffect(() => {
        console.log(events);
    }, [events])

    // Retrieve event list once on mount
    useEffect(() => {
        fetchEventData()
        .then((data: EventData[]) => {
        setEvents(data);
        setIsLoaded(true)})
        .catch(console.error);
    }, []);

    return (
        <div className="page-container">
            <h1 className="text-center"> Events </h1>
            <hr />
        
            {/* Container fit to middle width */}
            <div className="container text-center" id="event-cards">
            {/* Generates event cards from the pulled list of events and displays a message if there aren't any events */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/* Nested condition where it has two states for when the events have been fetched, and if not then display a loading message */}
                {isLoaded ? 
                (events.length > 0 ? (<EventsGrid events={events} />) : (<p style={{ padding: '40px' }}>No events coming up...</p>)) 
                : (<p style={{ padding: '40px' }}>Loading events...</p>
                )}
            </div>
            </div>
        </div>
    );
}

export default Events;