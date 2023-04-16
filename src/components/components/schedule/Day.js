import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import AOS from "aos";
import StickyBox from "react-sticky-box";

import Event from "../../components/schedule/Event";
import EventData from "../../data/event/EventData";

class Day extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const Day1Component = EventData.filter(item => item.day === 1).map(item => < Event key={item.id} item={item}/>);
        const Day2Component = EventData.filter(item => item.day === 2).map(item => < Event key={item.id} item={item}/>);
        const Day3Component = EventData.filter(item => item.day === 3).map(item => < Event key={item.id} item={item}/>);

        return (
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="row" style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <StickyBox offsetBottom={40} className="sidebar mx-auto" >
                        {/* <div className=""> */}
                            <ul>
                                <li>
                                    <Link smooth to="#day1">Day 1</Link>
                                </li>
                                <li>
                                    <Link smooth to="#day2">Day 2</Link>
                                </li>
                                <li>
                                    <Link smooth to="#day3">Day 3</Link>
                                </li>
                            </ul>
                        {/* </div> */}
                    </StickyBox>
                    <div className="content">
                        <div className="day" id="day1">
                            <div className="schedule-title header-gradient">
                                <h1>Day 1</h1>
                            </div>
                            {Day1Component}
                        </div>
                        <div className="day" id="day2">
                            <div className="schedule-title header-gradient">
                                <h1>Day 2</h1>
                            </div>
                            {/* <p>{this.props.item.description}</p> */}
                            {Day2Component}
                        </div>
                        <div className="day" id="day3">
                            <div className="schedule-title header-gradient">
                                <h1>Day 3</h1>
                            </div>
                            {/* <p>{this.props.item.description}</p> */}
                            {Day3Component}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Day;

