import { Card, Content, Navbar, Shortcuts } from "../../Components";
import "./style.css";

const eventData = [
    {
        name: "Dave's Night Out",
        description: "Futureproof get-together with Gustafsson cohort",
        date: "12 Dec 2022",
        time: "17:30",
        participants: [],
        rsvpRequired: true,
        rsvpStatus: null,
    },
    {
        name: "New Year's Eve Party",
        description: "New year's resolution: get a job!",
        date: "31 Dec 2022",
        time: "22:00",
        participants: [],
        rsvpRequired: false,
        rsvpStatus: null,
    },
];

export default function Events() {
    return (
        <div className="events">
            <Navbar></Navbar>
            <Content>
                <div className="events-heading">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4141/4141645.png"
                        alt=""
                    />
                    <h2>My Events</h2>
                </div>
                {eventData.map((event, index) => (
                    <Card key={index}>
                        <h3>{event.name}</h3>
                        <h4>
                            {event.date} @ {event.time}
                        </h4>
                        <p>{event.description}</p>
                        {event.rsvpRequired && !event.rsvpStatus && (
                            <select>
                                <option value="">RSVP required</option>
                                <option>👍 I'll be there</option>
                                <option>🤞 I'm not sure</option>
                                <option>👎 I can't make it</option>
                            </select>
                        )}
                    </Card>
                ))}
            </Content>
            <Shortcuts back="/holidays" />
        </div>
    );
}
