import React from "react";
import AOS from "aos";

import Speaker from "../components/speakers/Speaker"
import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

class Events extends React.Component {
    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {
        const SpeakerComponent = SpeakerData.map(item => < Speaker key={item.id} item={item}/>);

        return (
            <div className="speakers">
                <div className="container py-5">
                    <div className="speakers-title header-gradient pt-5">
                        <h1 className="">Speakers</h1>
                        <p className="px-5"></p>
                    </div>
                </div>
                { <div className="px-5 ">
                    {SpeakerComponent}
                </div> }
            </div>
        );
    }
}

export default Events;