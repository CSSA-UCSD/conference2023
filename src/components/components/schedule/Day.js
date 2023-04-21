import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import AOS from "aos";
import StickyBox from "react-sticky-box";

import Event from "../../components/schedule/Event";
import DayScheduleData from "../../data/home/DayScheduleData";

function Day() {
    // componentDidMount() {
    //     AOS.init({
    //         duration : 2000
    //     });
    // }
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    })

    const getWeekday = (date, length) => {
        return new Intl.DateTimeFormat("en-US", { weekday: length }).format(new Date(date));
    }


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
                    {DayScheduleData.map(day => {
                        return <div className="day" key={day.id}>
                            <div className="schedule-title header-gradient">
                                <h1>Day {day.id}</h1>
                            </div>
                            <h4>{getWeekday(day.date, "short")} {day.date} | {day.time}</h4>
                            <span>📍{day.location}</span>
                            {/* {Day1Component} */}
                            {day.events.map((item, key) => {
                                return < Event key={key} item={item} />
                            })
                            }
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Day;

