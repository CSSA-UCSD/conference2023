import React from "react";
import '../../style/main.scss';
import Day from "../components/schedule/Day";
import Event from "../components/schedule/Event";
import EventData from "../data/event/EventData";

class Team extends React.Component {
    render() {
        const EventComponent = EventData.map(item => < Event key={item.id} item={item}/>);
        
        return (
            <div className="schedule pt-5">
                <div className="container py-5">
                    <div className="schedule-title header-gradient">
                        <h1 className="pb-5">Schedule</h1>
                    </div>
                    <Day />
                    {/* {EventComponent} */}

                </div>
            </div>
        );
    }
}

export default Team;