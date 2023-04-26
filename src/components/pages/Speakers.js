import React, { useEffect } from "react";
import AOS from "aos";

import Speaker from "../components/speakers/Speaker"
import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";
import DayScheduleData from "../data/home/DayScheduleData";

function Events() {

    useEffect(() => {
        document.body.classList.add('speakers');
        AOS.init({
            duration: 2000
        });
    })

    return (
        // <div className="mx-5">
            <div className="container py-5">
                <div className="speakers-title header-gradient pt-5">
                    <h1 className="">Speakers</h1>
                    {/* <p className="px-5 mt-3">Soon to be released!</p> */}
                </div>
                { DayScheduleData.map((day) => {
                    let daySpeakers = SpeakerData.filter(speaker => speaker.day === day.id);
                    return <div className="mt-5" key={day.id}>
                        <h1 className="mb-5">Day <span className="ital">0{day.id}</span></h1>
                        <div className="row justify-content-center">
                        {
                            daySpeakers.map(item => <Speaker key={item.id} item={item} />)
                        }
                        </div>
                    </div>
                })}
            </div>            
        // </div>
    )
}

export default Events;